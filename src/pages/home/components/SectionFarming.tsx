import { useEffect, Fragment } from 'react'
import { useState } from 'react'
import { FC } from 'react'
import { Element } from 'react-scroll'
import { clearIntervalAsync, setIntervalAsync } from 'set-interval-async/fixed'
import { getLocaleKey } from '../../../AppLanguages'
import { useSelector } from '../../../AppStores'
import { Button, Icon, InputNumber, Message } from '../../../components'
import { InputTagSelect } from '../../../components/input/tag-select'
import { DateTimeUtils, InputWraper, NumberUtils, useForm } from '../../../modules'
import { AppService, ESMCStatus, SmcService } from '../../../services'
import { StakePackage, UserStake } from '../../../services/staking'
import { StakingServiceV2 } from '../../../services/staking/stakingv2.service'
import _ from 'lodash'

export const SectionFarming: FC = () => {
	return (
		<Element name="SectionBank" className="Section SectionBank">
			<div className="container">
				<div className="sectionTitle">Farming</div>

				<div className="row justify-content-center">
					<div className="col-xs-12">
						<Form />
					</div>
				</div>
			</div>
		</Element>
	)
}

const Form: FC = () => {
	const smc = useSelector(s => s.smc);
	const [isFetched, setIsFetched] = useState(false);
	const [balance, setBalance] = useState(null as null | number);
	const [packages, setPackages] = useState(null as null | StakePackage[]);
	const [userStake, setUserStake] = useState(null as null | UserStake);
	const [isClaiming, setIsClaiming] = useState(false);
	const [now, setNow] = useState(new Date());
	const [ref, setRef] = useState('0x0000000000000000000000000000000000000000')
	const [selectedPool, setSelectedPool] = useState(null as any)
	const [showPoolDetail, setShowPoolDetail] = useState(false);
	const [calculateFarm, setCalculateFarm] = useState(null as any)

	const validateAmount = (value: number) => {
		if (value && typeof balance === 'number') {
			if (value > balance) return 'Your balance not enough';

			let compareValue = selectedPool.minFarm === SmcService.configs.SMC_UBG_TOKEN_ADDRESS ? selectedPool.minFarm / 1e9 : selectedPool.minFarm / 1e18;

			if (value < compareValue) {
				return 'Min deposit is: ' + compareValue + ' UBG'
			}
		}
	}

	const { handleSubmit, isSubmitting, inputProps, values } = useForm({
		enableReinitialize: true,
		fields: {
			amount: {
				isRequired: true,
				label: 'Enter your amount to farm',
				validate: validateAmount,
			}
			// packageId: {
			// 	isRequired: true,
			// 	label: 'Saving duration',
			// 	exProps: {
			// 		options: packages ? packages.map(v => ({ label: v.name, value: v.id })) : [],
			// 	},
			// 	defaultValue: packages ? packages[0].id : '',
			// }
		},
		onSubmit: async ({ values }) => {

			let sendingAmount = checkTypeOfToken ? values.amount : values.amount * 1e18

			let fromAddress = SmcService.configs.SMC_FARMING_V2_ADDRESS
			let toContract = checkTypeOfToken ? SmcService.contractUBGToken : SmcService.contractLiquidity

			await SmcService.requestApprove({
				fromAddress,
				toContract
			}, sendingAmount)
				.then(async () => {
					return SmcService.send({
						contract: SmcService.contractFarmingV2,
						method: 'farm'
					}, selectedPool.id, NumberUtils.cryptoConvert('encode', values.amount, SmcService.contractUBGToken._decimals), ref ?? '0x0000000000000000000000000000000000000000')
						.then(async (res) => {
							// await fetchUserBalance();
							// await fetchUserStake();
							setShowPoolDetail(false)
							SmcService.transactionSuccessAlert(res, 'Farm successfully.');
						})
						.catch(async (err) => {
							setShowPoolDetail(false)
							SmcService.transactionErrorAlert(err, 'Farm failed.');
						})
				})
				.catch(() => {
					return AppService.createErrNoti('Approve amount failed.');
				})
		}
	})

	const fetchTime = async () => {
		return SmcService.call({
			contract: SmcService.contractStaking,
			method: 'getNow'
		})
			.then(res => {
				setNow(new Date(+res * 1000));
			});
	}

	// get current user balance
	const fetchUserBalance = async () => {
		await SmcService.call({
			contract: SmcService.contractUBGToken,
			method: 'balanceOf',
		}, SmcService.address)
			.then(async res => {
				setBalance(+NumberUtils.cryptoConvert('decode', +res, SmcService.contractUBGToken._decimals));
			})
			.catch(async (err) => {
				console.log('err fetchUserBalance: ', err)
				return false;
			});
	}

	const fetchUserStake = async () => {
		return SmcService.call({
			contract: SmcService.contractStakingV2,
			method: 'getMyStakingData'
		})
			.then(res => {
				console.log('getMyStakingData: ', res)
				// if (!(+res.initial)) return setUserStake(null);
				// setUserStake({
				// 	initial: +NumberUtils.cryptoConvert('decode', +res.initial, SmcService.contractUBGToken._decimals),
				// 	reward: +NumberUtils.cryptoConvert('decode', +res.reward, SmcService.contractUBGToken._decimals),
				// 	payAt: new Date(+res.payday * 1000),
				// 	startAt: new Date(+res.startday * 1000)
				// })
			})
			.catch(() => false);
	}

	// const fetchPackages = async () => {
	// 	return StakingService.fetchPackages()
	// 		.then(res => setPackages(res))
	// 		.catch(() => false);
	// }

	const fetchPackagesV2 = async () => {
		return StakingServiceV2.fetchPackages()
			.then(res => setPackages(res))
			.catch(() => false);
	}

	const initialize = async () => {
		await fetchTime();
		// TODO: uncomment it when go to v1
		// await fetchPackages();
		await fetchPackagesV2();
		setIsFetched(true);
	}

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const refAddress = queryParams.get('ref');
		setRef(refAddress);

		let interval: any;
		let interval2: any;

		if (smc.status !== ESMCStatus.NONE) {
			initialize();
			// interval = setIntervalAsync(async () => {
			// 	await fetchTime();
			// }, 1000);
		}

		if (smc.status === ESMCStatus.READY) {
			fetchUserBalance();
			// fetchUserStake();
			//
			interval2 = setIntervalAsync(async () => {
				await fetchUserBalance();
				// await fetchUserStake();
			}, 5000);
		}

		return () => {
			if (interval) clearIntervalAsync(interval);
			if (interval2) clearIntervalAsync(interval2);
		}
	}, [smc.status])

	const getNameById = (id) => {
		switch (id) {
			case '1':
				return 'Farm UBG'
			case '2':
				return 'Farm UBGUSDT'
			case '3':
				return 'Farm UBGBNB'
			default:
				return ''
		}
	}

	const showHumanTime = (timestamp) => {
		let date = new Date(timestamp);

		return date.getDate()+
			"/"+(date.getMonth()+1)+
			"/"+date.getFullYear()+
			" "+date.getHours()+
			":"+date.getMinutes()+
			":"+date.getSeconds();
	}

	/**
	 * func claim
	 */
	const claim = async () => {
		setIsClaiming(true);

		await SmcService.call({
			contract: SmcService.contractFarmingV2,
			method: 'claim',
		}, selectedPool.id)
			.then(async res => {
				console.log('claim: ', res)
				setIsClaiming(false);
				SmcService.transactionSuccessAlert(res, 'Claim successfully.');
			})
			.catch(async (err) => {
				console.log('err: ', err)
				setIsClaiming(false);
				SmcService.transactionErrorAlert(err, 'Claim failed.');
			});
	}

	const fetchCalculateFarm = async (packageId) => {
		await SmcService.call({
			contract: SmcService.contractFarmingV2,
			method: 'calculateFarm',
		}, SmcService.address, packageId)
			.then(res => {
				console.log('calculateFarm: ', res)
				setCalculateFarm(res)
			})
			.catch((err) => {
				console.log('err fetchUserBalance: ', err)
				return false;
			});
	}

	const joinPool = (id) => {
		let selectedPoolIdx = _.findIndex(packages, function(o) { return o.id == id });
		setSelectedPool(packages[selectedPoolIdx])
		setShowPoolDetail(true)
		console.log('selectedPool: ', packages[selectedPoolIdx])
		fetchCalculateFarm(id)
	}

	const closePoolDetail = () => {
		setShowPoolDetail(false)
		setSelectedPool(null)
	}

	const checkTypeOfToken = () => {
		//true mean UBG, false mean luquid
		return SmcService.configs.SMC_UBG_TOKEN_ADDRESS === selectedPool.tokenAddress
	}

	return <form onSubmit={handleSubmit}>
		<div className="head">
			<div className="title">Investment</div>
			<div className="UserBalance">
				<span className="icon"><Icon.Wallet /></span>
				<span className="label">Your balance:</span>
				<span className="value">{balance === null ? '--' : `${balance.toLocaleString(getLocaleKey(true), { maximumFractionDigits: 9 })} UBG`}</span>
			</div>
		</div>

		{function () {
			if (smc.error) return <div className="block">
				<Message type="INFO" content={smc.error} />
			</div>

			if (!isFetched) return <div className="Loading">
				<Icon.Loading />
				Loading...
			</div>

			return <>
				<div className="row">
					{showPoolDetail && (
						<Fragment>
							<div className="pool-background">
								<div className="pool-item">
									<div className="pool-item-title">Pool {getNameById(selectedPool.id)} Info</div>
									<div className="pool-item-info">
										<img src="./images/pool.png" alt="" className="img-fluid"/>
										<div className="pool-item-info-row">
											<div className="pool-item-info-label">Min Deposit: </div>
											<div className="pool-item-info-value">{checkTypeOfToken() ? selectedPool.minFarm / 1e9 : selectedPool.minFarm / 1e18} UBG</div>
										</div>
										<div className="pool-item-info-row">
											<div className="farming-pool-label">End Time: </div>
											<div className="farming-pool-value">{selectedPool.endTime > 0 ? showHumanTime(selectedPool.endTime) : 'Endless'}</div>
										</div>
										<div className="pool-item-info-row">
											<div className="farming-pool-label">Reward: </div>
											<div className="farming-pool-value">{selectedPool.interestSec} / day</div>
										</div>
										{calculateFarm !== null &&
											<Fragment>
												{calculateFarm[0] > 0 &&
													<Fragment>
														<div className="pool-item-info-row pool-award">
															<div className="farming-pool-label">Intersec / seconds: </div>
															<div className="farming-pool-value">{checkTypeOfToken() ? calculateFarm[0] / 1e9 : calculateFarm[0] / 1e18} {checkTypeOfToken() ? 'UBG' : 'Token'} / seconds</div>
														</div>
														<div className="pool-item-info-row pool-award">
															<div className="farming-pool-label">Total Farmed Token: </div>
															<div className="farming-pool-value">{checkTypeOfToken() ? calculateFarm[1] / 1e9 : calculateFarm[1] / 1e18} {checkTypeOfToken() ? 'UBG' : 'Token'}</div>
														</div>
													</Fragment>
												}
											</Fragment>
										}
										<div className="pool-item-action">
											<InputWraper inputProps={inputProps.amount} component={InputNumber} />
											<div className="pool-item-action-button">
												{function () {
													if (smc.error) return
													if (smc.status === ESMCStatus.NONE) return;
													if (smc.status !== ESMCStatus.READY) return <Button label="Connect Wallet" buttonType="warning" onClick={() => SmcService.handleConnectWallet()} />
													let checkPoolTime = new Date().getTime() > selectedPool.endTime
													console.log('new Date: ', new Date().getTime())
													console.log('selectedPool.endTime: ', selectedPool.endTime)
													console.log('calculateFarme: ', calculateFarm)
													console.log('selectedPool: ', selectedPool)
													if (calculateFarm !== null) {
														if (calculateFarm[0] > 0) {
															return (
																<Fragment>
																	<Button isLoading={isSubmitting} type="submit" label="Continue Farm" />
																	<Button className="claim-button" isLoading={isClaiming} onClick={() => claim()} type="button" label="Claim" />
																</Fragment>
															)
														} else {
															return <Button isLoading={isSubmitting} type="submit" label="Go Farm!" />
														}
													} else {
														return <Button isLoading={isSubmitting} type="submit" label="Go Farm!" />
													}
												}()}

												<Button className="close-button" onClick={() => closePoolDetail()} type="button" label="Close" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</Fragment>
					)}

					<Fragment>
						{_.map(packages, (p, i) => {
							return (
								<div className="col-12 col-md-4" key={i}>
									<div className="farming-pool-wrapper">
										<img src="./images/pool.png" alt="" className="img-fluid"/>
										<div className="farming-pool-info">
											<div className="farming-pool-title">
												{getNameById(p.id)}
											</div>
											<div className="farming-pool-info-item">
												<div className="farming-pool-label">Min Deposit: </div>
												<div className="farming-pool-value">{SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? p.minFarm / 1e9 : p.minFarm / 1e18} UBG</div>
											</div>
											<div className="farming-pool-info-item">
												<div className="farming-pool-label">End Time: </div>
												<div className="farming-pool-value">{p.endTime > 0 ? showHumanTime(p.endTime) : 'Endless'}</div>
											</div>
											<div className="farming-pool-info-item">
												<div className="farming-pool-label">Reward: </div>
												<div className="farming-pool-value">{p.interestSec} / day</div>
											</div>

											<div className="farming-pool-action">
												<Button type="button" onClick={() => joinPool(p.id)} label="Join Pool" />
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</Fragment>
				</div>
			</>
		}()}
	</form>
}

const countDownShow = (startTime: Date, endTime: Date) => {
	const { days, hours, minutes, isExpired } = DateTimeUtils.coutdown(endTime, new Date(startTime).getTime());
	if (isExpired) return ''

	let string = '';
	if (!!days) string += `${days}d`;
	if (!!hours) string += ` - ${hours}h`;
	if (!!minutes) string += ` - ${minutes}m`;

	return `Remain: ${string}`;
}