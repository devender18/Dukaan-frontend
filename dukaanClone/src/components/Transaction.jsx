export const Transaction = ()=>{
    return <div className="flex flex-col gap-6 m-4">
       <div className="font-semibold text-lg">Transactions | This Month
       </div>
       <div className="flex ">
        <div className="bg-slate-200 text-gray-500 rounded-2xl h-7 flex items-center justify-center text-sm">
            <span className = "p-5">
                Payouts (22)
            </span>
        </div>
        <div className="bg-blue-700 text-white ml-5 rounded-2xl h-7 flex items-center justify-center text-sm">
            <span className = "p-5">
                Refunds (6)
            </span>
        </div>
       </div>

    </div>
}