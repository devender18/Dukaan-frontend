import {TableTop} from './TableTop';
import {orderData} from './data';

export const Table = ()=>{
    return <div className='bg-white-500 px-3 pt-3 pb-2 rounded-lg grid gap-4'>
        <TableTop />
        <div>
            <table className='w-full text-gray-500 text-sm text-left'>
                <thead className='text-sm font-medium text-slate-600'>
                    <tr>
                        <th scope="col" className="px-6 py-3 font-medium">
                            ORDER ID
                        </th>

                        <th scope="col" className="px-6 py-3 font-medium">
                            STATUS
                        </th>

                        <th scope="col" className="px-6 py-3 font-medium">
                            TRANSACTION ID
                        </th>

                        <th scope="col" className="px-6 py-3 font-medium">
                            REFUND STATUS
                        </th>

                        <th scope="col" className="px-6 py-3 font-medium text-right">
                            ORDER AMOUNT
                        </th>
                    </tr>
   
                </thead>
                {orderData.map((order)=>{
                    return (
                        <tbody>
                            <tr className='bg-white border-b'>
                                <th scope="row" className="px-6 py-4 font-medium text-blue-700 ">
                                    #{order.id}
                                </th>

                                <td className = "px-6 py-4 flex items-center gap-2 text-black-600">
                                    { order.status === "Successful" ? <div className='bg-green-500 h-2.5 w-2.5 rounded-full'></div> : null}

                                    { order.status === "Processing" ? <div className='bg-yellow-500 h-2.5 w-2.5 rounded-full'></div> : null}

                                    { order.status === "Failed" ? <div className='bg-red-700 h-2.5 w-2.5 rounded-full'></div> : null}

                                    {order.status}

                                </td>

                                <td class="px-6 py-4 text-black-400">
                                    {order.transactionID}
                                </td>

                                <td class="px-6 py-4 text-black-400">
                                    {order.refundDate}
                                </td>

                                <td class="px-6 py-4 text-black-400 text-right">
                                    {order.amount}
                                </td>

                                
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    </div>
}