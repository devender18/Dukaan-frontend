import { RevenueCardColored } from "./RevenueCardColored";
import {BlueCard} from "./BlueCard";

export const Overview = ()=>{
    return <div>
        <div className="p-4">
            <div className="flex justify-between">
                <div className="font-semibold text-xl">Overview</div>
                <div >
                    <div className="border-2 flex text-md p-1">
                        <p>This Month</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-4 ml-1 my-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-4">
            <div className="grid grid-cols-3 gap-10">
                <BlueCard amount={"2,312.23"} title={"Next payout"} orderCount={23}/>
                <RevenueCardColored title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
                <RevenueCardColored title={"Amount Processed"} amount={"23,92,312.19"} />
            </div>
        </div>
    </div>
} 