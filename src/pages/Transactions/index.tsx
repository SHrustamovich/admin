import { DatePicker, Flex, Input, Select } from "antd";
import TransactionsHeader from "./features/transactionsHeader";
import TransactionsList from "./features/transactionsList";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const Transactions = () => {
    const [value, setValue] = useState<string>("");
    return (
        <div className='w-full p-[6px]'>
            <TransactionsHeader />
            <div className='bg-white rounded-xl p-[20px] mt-[32px] flex w-full gap-[20px]'>
                <div className='w-[70%]'>
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
                            <DatePicker />
                        </Flex>
                    </Flex>
                    <TransactionsList />
                </div>
                <div className='w-[30%]'>
                    <TextArea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder='Controlled autosize'
                        style={{ width: "100%", height: "100%" }}
                        autoSize={{ minRows: 20, maxRows: 5 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Transactions;
