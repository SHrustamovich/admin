import { Flex } from "antd";
import {
    DetailsColData,
    DetailsLineData,
    DetailsRowData,
} from "~constanta/ordersData";

const OrdersDetailsMain = () => {
    return (
        <div className='w-[673px] border-[1px] border-[#E4E4E4]'>
            <div>
                <Flex className='justify-between p-[15px]'>
                    {DetailsColData.map((item) => (
                        <div key={item.id}>
                            <h1 className='text-[#AEB6CA]'>{item.title}</h1>
                        </div>
                    ))}
                </Flex>
                <Flex className='flex-col'>
                    {DetailsLineData.map((item) => (
                        <Flex className='w-full gap-[190px] p-[10px] border-[1px] border-[#E4E4E4]'>
                            <Flex className='justify-between w-[240px]'>
                                <div className='flex'>
                                    <h1>{item.icon}</h1>
                                    <h1 className='text-[#3167EB] text-[15px] font-semibold'>
                                        {item.title}
                                    </h1>
                                </div>
                                <h1>{item.num}</h1>
                            </Flex>

                            <div className=''>
                                <Flex className='justify-between w-[240px]'>
                                    <h1>{item.price}</h1>
                                    <h1>{item.total}</h1>
                                </Flex>
                            </div>
                        </Flex>
                    ))}
                    <div className='p-[20px]'>
                        {DetailsRowData.map((item) => (
                            <Flex className='justify-end'>
                                <div className='flex w-[210px] justify-between items-center'>
                                    <div>
                                        <h1 className='text-[15px] font-normal text-[#97A0B8]'>
                                            {item.title}
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className='text-[24px] font-semibold'>
                                            {item.price}
                                        </h1>
                                    </div>
                                </div>
                            </Flex>
                        ))}
                    </div>
                </Flex>
            </div>
        </div>
    );
};
export default OrdersDetailsMain;
