import { Flex } from "antd";
import { DetailsData } from "~constanta/ordersData";

const OrdersDetailsCard = () => {
    return (
        <div>
            <Flex className='gap-[5px]'>
                {DetailsData.map((item) => (
                    <>
                        <div
                            key={item.id}
                            className='flex gap-[30px] w-[350px] h-[123px]'>
                            <div className='bg-[#3167EB] bg-opacity-5 w-[40px] h-[40px] rounded-[50%] p-[11px]'>
                                {item.icon}
                            </div>
                            <div>
                                <h1 className='text-[15px] font-semibold leading-6'>
                                    {item.title}
                                </h1>
                                <p className='text-[15px] font-normal leading-6'>
                                    {item.name}
                                </p>
                                <p className='text-[15px] font-normal leading-6'>
                                    {item.email}
                                </p>
                                <p className='text-[15px] font-normal leading-6'>
                                    {item.phone}
                                </p>
                                <a
                                    className='text-[15px] text-[#3167EB] font-normal leading-6'
                                    href='#'>
                                    {item.link}
                                </a>
                            </div>
                        </div>
                    </>
                ))}
            </Flex>
        </div>
    );
};
export default OrdersDetailsCard;