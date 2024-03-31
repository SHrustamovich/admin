import { useState } from "react";
import { Button, Table } from "antd";
import { StarFilled, StarOutlined, MoreOutlined } from "@ant-design/icons";

const TransactionsList = () => {
    const [selectionType, setSelectionType] = useState<"checkbox">("checkbox");

    interface DataType {
        key: React.Key;
        id: string;
        product: string;
        name: string;
        rating: number;
        date: string;
    }

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            width: 80,
        },
        {
            title: "Product",
            dataIndex: "product",
        },
        {
            title: "Name",
            dataIndex: "name",
            width: 250,
        },
        {
            width: 150,
            title: "Rating",
            dataIndex: "rating",
            render: (rating: number) => (
                <>
                    {[...Array(5)].map((_, index) => (
                        <span key={index}>
                            {index < rating ? (
                                <StarFilled
                                    style={{
                                        color:
                                            index < 3 ? "#FFD700" : undefined,
                                    }}
                                />
                            ) : (
                                <StarOutlined />
                            )}
                        </span>
                    ))}
                </>
            ),
        },
        {
            title: "Date",
            dataIndex: "date",
            width: 150,
        },
        {
            title: "Action",
            dataIndex: "action",
            render: () => <Button type='link' icon={<MoreOutlined />} />,
            width: 100,
        },
    ];

    const data: DataType[] = [
        {
            key: "1",
            id: "123",
            product: "Product A",
            name: "John Brown",
            rating: 4,
            date: "2024-03-29",
        },
        {
            key: "2",
            id: "456",
            product: "Product B",
            name: "Jim Green",
            rating: 3,
            date: "2024-03-30",
        },
        {
            key: "3",
            id: "789",
            product: "Product C",
            name: "Joe Black",
            rating: 5,
            date: "2024-03-31",
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
            );
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === "Disabled User",
            name: record.name,
        }),
    };

    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default TransactionsList;
