import {SmcService} from "../smc";

export class StakingServiceV2 {

    static async fetchFee(): Promise<any> {
        return await SmcService.call({
            contract: SmcService.contractFarmingV2,
            method: "fee",
        })
    }

    static async fetchAbleToRedeem(address: string): Promise<any> {
        return await SmcService.call(
            {
                contract: SmcService.contractFarmingV2,
                method: 'ableToRedeem',
            }, address
        );
    }

    static async fetchPackages(): Promise<StakePackage[]> {
        const packages = await Promise.all(
            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(async (value, index) => {
                const packageRes = await SmcService.call(
                    {
                        contract: SmcService.contractFarmingV2,
                        method: "getPackInfo",
                    },
                    value
                );

                const fetchTotalPoolAmount = await SmcService.call({
                    contract: SmcService.contractFarmingV2,
                    method: 'farmAmount',
                }, value)

                let totalPoolAmount = SmcService.configs.SMC_UBG_TOKEN_ADDRESS === packageRes.tokenAddress ? fetchTotalPoolAmount / 1e9 : fetchTotalPoolAmount / 1e18
                let interestYear = SmcService.configs.SMC_UBG_TOKEN_ADDRESS === packageRes.tokenAddress ? packageRes.interestSec / 1e9 * 86400 * 30 : packageRes.interestSec / 1e18 * 86400 * 30

                let abr = totalPoolAmount === 0 ? 0 : interestYear/totalPoolAmount * 100

                const data: StakePackage = {
                    totalAmount: totalPoolAmount,
                    abr: abr,
                    id: `${value}`,
                    interestSec: +packageRes.interestSec * 60 * 60 * 24,
                    tokenAddress: packageRes.tokenAddress,
                    minFarm: packageRes.minFarm,
                    farmingType: packageRes.farmingType,
                    endTime: packageRes.endTime * 1000,
                };

                return data;
            })
        );

        return packages.filter((v) => {
            return v.interestSec > 0;
        });
    }


    /**
     *
     * @param address
     * @param packageId
     */
    static fetchCalculateFarm = async (address: string, packageId: number) : Promise<CalculateFarmPackage> => {

        const calculateFarm = await SmcService.call(
            {
                contract: SmcService.contractFarmingV2,
                method: 'calculateFarm',
            }, address, packageId
        );

        return {
            currentInterest: calculateFarm[0],
            totalFarm: calculateFarm[1]
        };
    }

}

// uint256 id;
// address tokenAddress; // farming token address
// uint256 minFarm; // 9 decimals for UBG, 18 for others.
// uint256 interestSec; // interest per second, 9 decimals
// uint256 farmingType; // 0: has end, 1: endless
// uint256 endTime; // time to end, 0 mean endless

export interface StakePackage {
    totalAmount: number,
    abr: number,
    id: any;
    interestSec: number;
    tokenAddress: number;
    minFarm: number;
    farmingType: number;
    endTime: number;
}

export interface CalculateFarmPackage {
    currentInterest: number;
    totalFarm: number
}

export interface UserStake {
    initial: number;
    reward: number;
    payAt: Date;
    startAt: Date;
}
