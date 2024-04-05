import { DatePicker, Flex, Input, Select } from "antd";
import OrdersHeader from "./features/ordersHeader";
import OrdersTable from "./features/ordersTable";

const Orders = () => {
    return (
        <div className='w-full p-[6px]'>
            <OrdersHeader />

            <div className='bg-white rounded-xl mt-[22px] p-[16px]'>
                <Flex
                    className='p-[4px]'
                    justify='space-between'
                    align='center'>
                    <Input style={{ width: 395 }} placeholder='Search' />
                    <Flex justify='center' align='center' gap={"small"}>
                        <Select
                            style={{ width: "120px" }}
                            defaultValue={"1"}
                            options={[
                                { value: "1", label: "Status" },
                                { value: "2", label: "Pending" },
                                { value: "3", label: "Canceled" },
                                { value: "4", label: "Recelved" },
                            ]}
                        />
                        <Select
                            style={{ width: "120px" }}
                            defaultValue={"1"}
                            options={[
                                { value: "1", label: "show 20" },
                                { value: "2", label: "show 40" },
                                { value: "3", label: "show 60" },
                            ]}
                        />
                        <DatePicker />
                    </Flex>
                </Flex>
                <div className='pt-[15px]'>
                    <OrdersTable />
                </div>
            </div>
        </div>
    );
};

export default Orders;
