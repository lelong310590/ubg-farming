import {FC, Fragment, useEffect, useState} from 'react'
import {Element} from 'react-scroll'
import {clearIntervalAsync, setIntervalAsync} from 'set-interval-async/fixed'
import {getLocaleKey} from '../../../AppLanguages'
import {useSelector} from '../../../AppStores'
import {Button, Icon, InputNumber, Message} from '../../../components'
import {DateTimeUtils, InputWraper, NumberUtils, useForm} from '../../../modules'
import {AppService, ESMCStatus, SmcService} from '../../../services'
import {StakingServiceV2} from '../../../services/staking/stakingv2.service'
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
	const [packages, setPackages] = useState(null as null | any);
	const [isClaiming, setIsClaiming] = useState(false);
	const [isWithdraw, setIsWithdraw] = useState(false);
	const [isRedeeming, setIsRedeeming] = useState(false);
	const [redeemValue, setRedeemValue] = useState(0)
	const [now, setNow] = useState(new Date());
	const [ref, setRef] = useState('0x0000000000000000000000000000000000000000')
	const [selectedPool, setSelectedPool] = useState(null as any)
	const [showPoolDetail, setShowPoolDetail] = useState(false);
	const [calculateFarm, setCalculateFarm] = useState(null as any)
	const [totalClaim, setTotalClaim] = useState(null as any)

	const validateAmount = (value: number) => {
		if (value && typeof balance === 'number') {
			let compareBalance = checkTypeOfToken() ? balance : balance;
			if (value > compareBalance) return 'Your balance not enough';
			let compareValue = selectedPool.tokenAddress === SmcService.configs.SMC_UBG_TOKEN_ADDRESS ? selectedPool.minFarm / 1e9 : selectedPool.minFarm / 1e18;

			if (value < compareValue) {
				return 'Min deposit is: ' + compareValue + ' UBG'
			}
		}
	}

	const handleChangeRedeem = (e) => {
		setRedeemValue(e.target.value)
	}

	const validateRedeem = () => {
		let compareValue = checkTypeOfToken() ? calculateFarm[1] / 1e9 : calculateFarm[2] / 1e18;
		return redeemValue <= compareValue;
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
			let sendingAmount;
			let fromAddress;
			let toContract;
			let decimals = 9;
			if (selectedPool.tokenAddress == SmcService.configs.SMC_UBG_TOKEN_ADDRESS) {
				sendingAmount = values.amount * 1e9
				fromAddress = SmcService.configs.SMC_FARMING_V2_ADDRESS
				toContract = SmcService.contractUBGToken;
				decimals = SmcService.contractUBGToken._decimals;
			} else {
				sendingAmount = values.amount * 1e18
				fromAddress = SmcService.configs.SMC_FARMING_V2_ADDRESS
				toContract = await SmcService.liquidityContract(selectedPool.tokenAddress);
				decimals = 18;
			}

			await SmcService.requestApprove({
				fromAddress,
				toContract
			}, sendingAmount)
				.then(async () => {
					return SmcService.send({
						contract: SmcService.contractFarmingV2,
						method: 'farm'
					}, selectedPool.id, NumberUtils.cryptoConvert('encode', values.amount, decimals), ref ?? '0x0000000000000000000000000000000000000000')
						.then(async (res) => {
							await fetchUserBalance();
							// await fetchUserStake();
							fetchCalculateFarm(selectedPool.id)
							fetchTotalClaim(selectedPool.id)
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

		let contract = checkTypeOfToken() ? SmcService.contractUBGToken : SmcService.contractLiquidity
		let decimals = checkTypeOfToken() ? SmcService.contractUBGToken._decimals : 18;

		await SmcService.call({
			contract: contract,
			method: 'balanceOf',
		}, SmcService.address)
			.then(async res => {
				// console.log('balance: ', res)
				// console.log('ubg: ', SmcService.configs.SMC_UBG_TOKEN_ADDRESS)
				// console.log('selected: ', selectedPool)
				setBalance(+NumberUtils.cryptoConvert('decode', +res, decimals));
			})
			.catch(async (err) => {
				console.log('err fetchUserBalance: ', err)
				return false;
			});
	}

	const fetchPackagesV2 = async () => {
		let res = await StakingServiceV2.fetchPackages();
		return setPackages(res);
	}

	const initialize = async () => {
		// await fetchTime();
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
			case '3':
				return 'Farm UBG - 12 months'
			case '4':
				return 'Farm UBG - 6 months'
			case '5':
				return 'Farm UBG - 24 months'
			case '6':
				return 'Farm UBG - 36 months'
			case '7':
				return 'Farm UBG-BUSD'
			case '8':
				return 'Farm UBG-BNB'
			default:
				return 'Test'
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

	const redeem = async () => {
		setIsRedeeming(true);

		let amount = checkTypeOfToken() ? redeemValue * 1e9 : redeemValue * 1e18;

		if (validateRedeem()) {
			await SmcService.send({
				contract: SmcService.contractFarmingV2,
				method: 'redeem'
			}, selectedPool.id, amount)
				.then(async res => {
					setIsRedeeming(false);
					fetchCalculateFarm(selectedPool.id)
					fetchTotalClaim(selectedPool.id)
					SmcService.transactionSuccessAlert(res, 'Redeem successfully.');
				})
				.catch(async (err) => {
					setIsRedeeming(false);
					SmcService.transactionErrorAlert(err, 'Redeem failed.');
				});
		} else {
			let compareValue = checkTypeOfToken() ? calculateFarm[1] / 1e9 : calculateFarm[2] / 1e18;
			let label = checkTypeOfToken() ? ' UBG' : ' Token';
			alert('Max amount to redeem is: ' + compareValue + label)
			setIsRedeeming(false);
		}
	}

	/**
	 * func withdraw
	 */
	const withdraw = async () => {
		setIsWithdraw(true);

		await SmcService.send({
			contract: SmcService.contractFarmingV2,
			method: 'claim',
		}, selectedPool.id)
			.then(async res => {
				setIsWithdraw(false);
				fetchCalculateFarm(selectedPool.id)
				fetchTotalClaim(selectedPool.id)
				SmcService.transactionSuccessAlert(res, 'Claim successfully.');
			})
			.catch(async (err) => {
				console.log('err: ', err)
				setIsWithdraw(false);
				SmcService.transactionErrorAlert(err, 'Claim failed.');
			});
	}

	/**
	 *
	 */
	const claim = async () => {
		setIsClaiming(true);

		await SmcService.send({
			contract: SmcService.contractFarmingV2,
			method: 'claimInterest',
		}, selectedPool.id)
			.then(async res => {
				setIsClaiming(false);
				fetchCalculateFarm(selectedPool.id)
				fetchTotalClaim(selectedPool.id)
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

	const fetchTotalClaim = async (packageId) => {
		await SmcService.call({
			contract: SmcService.contractFarmingV2,
			method: 'claimed',
		},packageId, SmcService.address)
			.then(res => {
				setTotalClaim(res)
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
		fetchUserBalance()
		fetchCalculateFarm(id)
		fetchTotalClaim(id)
	}

	const closePoolDetail = () => {
		setShowPoolDetail(false)
		setSelectedPool(null)
	}

	const checkTypeOfToken = () => {
		//true mean UBG, false mean luquid
		if (selectedPool !== null) {
			return SmcService.configs.SMC_UBG_TOKEN_ADDRESS === selectedPool.tokenAddress
		} else {
			return true
		}
	}

	const showUserBalance = () => {
		if (balance === null) {
			return '--'
		} else {
			let decimals = checkTypeOfToken() ? 9 : 18;
			let label = checkTypeOfToken() ? ' UBG' : ' LP';
			return balance.toLocaleString(getLocaleKey(true), { maximumFractionDigits: decimals }) + label
		}
	}

	const showAward = (p) => {
		// return SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? p.interestSec / 1e9 : p.interestSec / 1e18
		return p.interestSec / 1e9
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
										<div className="UserBalance pool-item-user-balance">
											<span className="icon"><Icon.Wallet /></span>
											<span className="label">Your balance:</span>
											<span className="value">{showUserBalance()}</span>
										</div>
										<div className="pool-item-info-row">
											<div className="pool-item-info-label">Min Deposit: </div>
											<div className="pool-item-info-value">{checkTypeOfToken() ? selectedPool.minFarm / 1e9 : selectedPool.minFarm / 1e18} {checkTypeOfToken() ? 'UBG' : 'LP'}</div>
										</div>
										<div className="pool-item-info-row">
											<div className="farming-pool-label">End Time: </div>
											<div className="farming-pool-value">{selectedPool.endTime > 0 ? showHumanTime(selectedPool.endTime) : 'Endless'}</div>
										</div>
										<div className="pool-item-info-row">
											<div className="farming-pool-label">Without Unlock: </div>
											<div className="farming-pool-value">{selectedPool.endTime > 0 ? Math.round(Math.abs(new Date().getTime() - selectedPool.endTime) / 1000 / 60 / 60/ 24) + ' day(s)' : 'Endless'}</div>
										</div>
										{calculateFarm !== null &&
											<Fragment>
												{calculateFarm[0] > 0 &&
													<Fragment>
														<div className="pool-item-info-row pool-award">
															<div className="farming-pool-label">Your reward:  </div>
															<div className="farming-pool-value">{checkTypeOfToken() ? (calculateFarm[0] - totalClaim) / 1e9 : (calculateFarm[0] - totalClaim) / 1e18} UBG</div>
														</div>
														<div className="pool-item-info-row pool-award">
															<div className="farming-pool-label">Your deposit: </div>
															<div className="farming-pool-value">{checkTypeOfToken() ? calculateFarm[1] / 1e9 : calculateFarm[1] / 1e18} {checkTypeOfToken() ? 'UBG' : 'LP'}</div>
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
													// console.log('new Date: ', new Date().getTime())
													// console.log('selectedPool.endTime: ', selectedPool.endTime)
													// console.log('calculateFarme: ', calculateFarm)
													// console.log('selectedPool: ', selectedPool)
													if (calculateFarm !== null) {
														if (calculateFarm[0] > 0) {
															return (
																<Fragment>
																	<Button isLoading={isSubmitting} type="submit" label="Continue Farm" />

																	<Button isLoading={isClaiming} className="claim-button" onClick={() => claim()} type="button"  label="Claim" />

																	{checkPoolTime &&
																		<Button className="claim-button" isLoading={isWithdraw} onClick={() => withdraw()} type="button" label="Withdraw" />
																	}
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

										{SmcService.address === '0xAdF5461160CEc0aA39c5a16D72Ff407EB7e971b2' &&
											<div className="pool-items-action redeem-action">
												<div className="InputWraper"><label htmlFor="amount">Enter your amount to redeem </label><br/>
													<div className="inputSection">
														<div className="input">
															<input inputMode="numeric" type="text" value={redeemValue} onChange={(e) => handleChangeRedeem(e)}/>
														</div>
													</div>
												</div>

												<div className="redeem-button">
													<Button isLoading={isRedeeming} onClick={() => redeem()} type="button" label="Redeem" />
												</div>
											</div>
										}
									</div>
								</div>
							</div>
						</Fragment>
					)}

					<div className="col-12">
						<div className='pool-group-type'>
							<div className="pool-group-title">
								Farm UBG earn UBG
							</div>
							<div className='row'>
								{_.map(packages, (p, i) => {
									return (
										<Fragment key={i}>
											{i <= 3 && 
											<div className="col-12 col-md-3" key={i}>
												<div className="farming-pool-wrapper">
													<img src="./images/pool.png" alt="" className="img-fluid"/>
													<div className="farming-pool-info">
														<div className="farming-pool-title">
															{getNameById(p.id)}
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">Min Deposit: </div>
															<div className="farming-pool-value">{SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? p.minFarm / 1e9 : p.minFarm / 1e18} {SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? ' UBG' : ' LP'}</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">End Time: </div>
															<div className="farming-pool-value">{p.endTime > 0 ? showHumanTime(p.endTime) : 'Endless'}</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">Reward: </div>
															<div className="farming-pool-value">{p.interestSec / 1e9} {SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? ' UBG' : ' LP'} / day</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">Pool Holder : </div>
															<div className="farming-pool-value">{p.totalAmount} {SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? ' UBG' : ' LP'}</div>
														</div>

														<div className="farming-pool-info-item">
															<div className="farming-pool-label">ARP: </div>
															{p.endTime !== 0 ? (
																<div className="farming-pool-value">{SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? p.abr + ' %' : 'N/A'}</div>
															) : (
																<div className="farming-pool-value">N/A</div>
															)}
														</div>
														{/* <div className="farming-pool-info-item">
															<div className="farming-pool-label">Pool Holder: </div>
															<div className="farming-pool-value">{p.interestSec} / day</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">Total Reward: </div>
															<div className="farming-pool-value">{p.interestSec} / day</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">ARP: </div>
															<div className="farming-pool-value">{p.interestSec} / day</div>
														</div> */}

														<div className="farming-pool-action">
															<Button type="button" onClick={() => joinPool(p.id)} label="Join Pool" />
														</div>
													</div>
												</div>
											</div>
											}
										</Fragment>
									)
								})}
							</div>
						</div>

						<div className='pool-group-type'>
							<div className="pool-group-title">
								Farm UBG earn LP
							</div>
							<div className='row'>
								{_.map(packages, (p, i) => {
									return (
										<Fragment key={i}>
											{i > 3 &&
											<div className="col-12 col-md-3" key={i}>
												<div className="farming-pool-wrapper">
													<img src="./images/pool.png" alt="" className="img-fluid"/>
													<div className="farming-pool-info">
														<div className="farming-pool-title">
															{getNameById(p.id)}
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">Min Deposit: </div>
															<div className="farming-pool-value">{SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? p.minFarm / 1e9 : p.minFarm / 1e18} {SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? ' UBG' : ' LP'}</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">End Time: </div>
															<div className="farming-pool-value">{p.endTime > 0 ? showHumanTime(p.endTime) : 'Endless'}</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">Reward: </div>
															<div className="farming-pool-value">{showAward(p)} {SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? ' UBG' : ' LP'} / day</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">Pool Holder : </div>
															<div className="farming-pool-value">{p.totalAmount} {SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? ' UBG' : ' LP'}</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">ARP: </div>
															{p.endTime !== 0 ? (
																<div className="farming-pool-value">{SmcService.configs.SMC_UBG_TOKEN_ADDRESS === p.tokenAddress ? p.abr + ' %' : 'N/A'}</div>
															) : (
																<div className="farming-pool-value">N/A</div>
															)}
														</div>
														{/* <div className="farming-pool-info-item">
															<div className="farming-pool-label">Pool Holder: </div>
															<div className="farming-pool-value">{p.interestSec} / day</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">Total Reward: </div>
															<div className="farming-pool-value">{p.interestSec} / day</div>
														</div>
														<div className="farming-pool-info-item">
															<div className="farming-pool-label">ARP: </div>
															<div className="farming-pool-value">{p.interestSec} / day</div>
														</div> */}

														<div className="farming-pool-action">
															<Button type="button" onClick={() => joinPool(p.id)} label="Join Pool" />
														</div>
													</div>
												</div>
											</div>
											}
										</Fragment>
									)
								})}
							</div>
						</div>
					</div>
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