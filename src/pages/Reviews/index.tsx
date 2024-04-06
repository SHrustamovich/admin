import React, { useState } from "react";
import { DatePicker, Input, Select, Table } from "antd";
import { ReviewsData } from "./viewsData";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const Reviews: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [showFilter, setShowFilter] = useState<string>("Show 20"); // State for Show dropdown

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const handleChangeShow = (value: string) => {
        setShowFilter(value);
    };

    const renderStars = (rating: number) => {
        const filledStars = Array(Math.floor(rating)).fill(
            <StarFilled style={{ color: "#fadb14" }} />
        );
        const notFilledStars = Array(Math.floor(5 - rating)).fill(
            <StarOutlined style={{ color: "#fadb14" }} />
        );
        return [...filledStars, ...notFilledStars];
    };

    const filteredData = ReviewsData.filter((item) => {
        return (
            showFilter === "Show 20" ||
            showFilter === "Show 30" ||
            showFilter === "Show 40"
        );
    });

    const columns = [
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
            render: (rating: number) => <div>{renderStars(rating)}</div>,
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
                            defaultValue='Show 20 '
                            style={{ width: 120 }}
                            onChange={handleChangeShow}
                            value={showFilter}
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
                        rowSelection={{
                            selectedRowKeys,
                            onChange: onSelectChange,
                        }}
                        columns={columns}
                        dataSource={filteredData}
                        pagination={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
