import { DatePicker, Flex, Input, Select } from "antd";
import OrdersHeader from "./features/ordersHeader";
import OrderList from "./features/ordersList";

const Sales = () => {
    return (
        <div className='w-full p-[6px]'>
            <OrdersHeader />
            <div className='bg-white rounded-xl p-[20px] mt-[32px]'>
                <Flex
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <Input
                        placeholder='Basic usage'
                        style={{
                            width: "395px",
                        }}
                    />
                    <Flex
                        style={{
                            display: "flex",
                            columnGap: "10px",
                        }}>
                        <Select
                            defaultValue='lucy'
                            style={{ width: 120 }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                                {
                                    value: "disabled",
                                    label: "Disabled",
                                    disabled: true,
                                },
                            ]}
                        />
                        <Select
                            defaultValue='lucy'
                            style={{ width: 120 }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                                {
                                    value: "disabled",
                                    label: "Disabled",
                                    disabled: true,
                                },
                            ]}
                        />
                        <DatePicker />
                    </Flex>
                </Flex>
                <OrderList />
            </div>
        </div>
    );
};

export default Sales;
