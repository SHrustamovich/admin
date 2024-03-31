import { Button, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

const TransactionsList = () => {
    const generateRandomID = (): number => {
        return Math.floor(1000 + Math.random() * 9000);
    };

    const generateRandomStatus = (): string => {
        const statuses = ["Pending", "Processing", "Completed", "Cancelled"];
        return statuses[Math.floor(Math.random() * statuses.length)];
    };

    const [data, setData] = useState([
        {
            key: "1",
            id: generateRandomID(),
            name: "John Doe",
            email: "john.doe@example.com",
            total: 120.5,
            status: generateRandomStatus(),
            date: "2024-03-29",
        },
        {
            key: "2",
            id: generateRandomID(),
            name: "Jane Smith",
            email: "jane.smith@example.com",
            total: 85.25,
            status: generateRandomStatus(),
            date: "2024-03-30",
        },
        {
            key: "3",
            id: generateRandomID(),
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            total: 200.0,
            status: generateRandomStatus(),
            date: "2024-03-31",
        },
        {
            key: "4",
            id: generateRandomID(),
            name: "Bob Brown",
            email: "bob.brown@example.com",
            total: 50.75,
            status: generateRandomStatus(),
            date: "2024-04-01",
        },
        {
            key: "5",
            id: generateRandomID(),
            name: "Eva Lee",
            email: "eva.lee@example.com",
            total: 300.0,
            status: generateRandomStatus(),
            date: "2024-04-02",
        },
    ]);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 150,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: string) => (
                <span
                    style={{
                        textTransform: "capitalize",
                        color:
                            status === "Completed"
                                ? "green"
                                : status === "Cancelled"
                                ? "red"
                                : "inherit",
                    }}>
                    {status}
                </span>
            ),
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <Space size='middle'>
                    <Button
                        type='link'
                        icon={<EditOutlined />}
                        onClick={() => handleEdit()}>
                        Edit
                    </Button>
                    <Button
                        type='link'
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete()}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    const handleEdit = () => {
        console.log("Edit button clicked");
    };

    const handleDelete = () => {
        console.log("Delete button clicked");
    };

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default TransactionsList;
