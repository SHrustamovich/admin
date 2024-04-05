import { CalendarOutlined, PrinterOutlined } from "@ant-design/icons";
import { Button, Flex, Select } from "antd";

const OrdersDetailsHeader = () => {
    return (
        <div>
            <Flex className='justify-between p-[10px]'>
                <div className='flex items-center gap-[10px]'>
                    <CalendarOutlined className='w-[20px] h-[20px] text-[#97A0B8]' />
                    <div className='flex-col'>
                        <div className='text-[#97A0B8] text-[15px] font-semibold leading-6'>
                            {Date()}
                        </div>
                        <p className='text-[#97A0B8] text-[12px] font-normal leading-4'>
                            #ID 3453012
                        </p>
                    </div>
                </div>
                <div className='flex gap-[10px]'>
                    <Select
                        style={{ width: "173px", height: "38px" }}
                        defaultValue={"1"}
                        options={[
                            { value: "1", label: "Status" },
                            { value: "2", label: "Pending" },
                            { value: "3", label: "Canceled" },
                            { value: "4", label: "Recelved" },
                        ]}
                    />
                    <Button className='w-[74px] h-[38px]'>Save</Button>
                    <Button className='w-[42px] h-[38px]'>
                        <PrinterOutlined />
                    </Button>
                </div>
            </Flex>
        </div>
    );
};
export default OrdersDetailsHeader;