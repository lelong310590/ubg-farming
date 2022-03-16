import {SmcService} from "../smc";

export class StakingServiceV2 {
    static async fetchPackages(): Promise<StakePackage[]> {
        const packages = await Promise.all(
            ["1", "2", "3"].map(async (value, index) => {
                const packageRes = await SmcService.call(
                    {
                        contract: SmcService.contractFarmingV2,
                        method: "getPackInfo",
                    },
                    value
                );

                console.log("packageRes: ", packageRes);

                const data: StakePackage = {
                    id: `${value}`,
                    name: packageRes.duration / 86400 + " days",
                    roi: +packageRes.interest,
                    interest: packageRes.interest,
                    numberOfDays: +packageRes.duration / 86400,
                    interestSec: +packageRes.interestSec * 86400,
                    tokenAddress: packageRes.tokenAddress,
                    minFarm: packageRes.minFarm,
                    farmingType: packageRes.farmingType,
                    endTime: packageRes.endTime * 1000,
                };

                return data;
            })
        );

        return packages.filter((v) => !["1 months"].includes(v.name));
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
    id: any;
    name: any;
    roi: number;
    interest: number;
    numberOfDays: number;
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
