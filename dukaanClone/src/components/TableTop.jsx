export const TableTop = ()=>{
    return <div className="flex justify-between  ">
        <div>
            <div className="grid grid-cols-12 items-center text-gray-500 border-slate-200 border-2 rounded-md ml-4">
                <div className="flex justify-center items-center h-10 rounded-l-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5 mt-1 ml-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                </div>
                    
                <div className="col-span-8 ">
                    <input type="text" placeholder="Search features, tutorials, etc." className="w-full h-8 rounded-r-md focus:outline-none" />
                </div>
            </div>
        </div>

        <div className="flex justify-between">
            <div className=" border-slate-200 border-2 rounded-md flex justify-center items-center w-20 mr-5">
                <p className="text-lg">Sort</p>
                <div className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>

                </div>
            </div>

            <div className=" border-slate-200 border-2 rounded-md text-gray-500 w-14 flex justify-center items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>

            </div>
        </div>
    </div>
}