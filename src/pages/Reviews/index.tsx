import React, { useState } from "react";
import { DatePicker, Input, Select, Table } from "antd";
import { ReviewsData } from "./viewsData";

const columns = [
    {
        title: "ID",
        dataIndex: "userId",
    },
    {
        title: "Product",
        dataIndex: "product",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Rating",
        dataIndex: "rating",
    },
    {
        title: "Date",
        dataIndex: "date",
    },
    {
        title: "Action",
        dataIndex: "button",
    },
];

const Reviews: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div>
            <h1 className='text-2xlx'>Reviews</h1>
            <div className='bg-white rounded-[6px]'>
                <div className='flex items-center justify-between'>
                    <div className='p-[20px]  w-[50%]'>
                        <Input placeholder='Search' width={395} />
                    </div>
                    <div className='mr-[10px] gap-[10px]'>
                        <Select
                            defaultValue='Status'
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "Enable",
                                    label: "Enable",
                                },
                                {
                                    value: "Disable",
                                    label: "Disable",
                                },
                            ]}
                        />
                        <Select
                            defaultValue='Show 20 '
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                { value: "Show 30", label: "Show 30" },
                                { value: "Show 40", label: "Show 40" },
                            ]}
                        />
                        <DatePicker />
                    </div>
                </div>
                <div>
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={ReviewsData}
                        pagination={false}></Table>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
