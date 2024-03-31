import { Button, Space, Table } from "antd";

const TransactionsList = () => {
    interface DataType {
        key: string;
        id: number;
        paid: boolean;
        method: string;
        created: string;
    }

    const columns = [
        {
            title: "Transaction ID",
            dataIndex: "id",
            key: "id",
            width: 130,
            render: (id: number) => `#${id}`,
        },
        {
            title: "Paid",
            dataIndex: "paid",
            key: "paid",
            render: (paid: boolean) => (paid ? "Yes" : "No"),
        },
        {
            title: "Method",
            dataIndex: "method",
            key: "method",
        },
        {
            title: "Created",
            dataIndex: "created",
            key: "created",
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <Space size='middle'>
                    <Button type='link' onClick={() => handleView()}>
                        View
                    </Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: "1",
            id: 1,
            paid: true,
            method: "Credit Card",
            created: "2024-03-29",
        },
        {
            key: "2",
            id: 2,
            paid: false,
            method: "PayPal",
            created: "2024-03-30",
        },
        {
            key: "3",
            id: 3,
            paid: true,
            method: "Bank Transfer",
            created: "2024-03-31",
        },
        {
            key: "4",
            id: 4,
            paid: true,
            method: "Credit Card",
            created: "2024-04-01",
        },
        {
            key: "5",
            id: 5,
            paid: false,
            method: "PayPal",
            created: "2024-04-02",
        },
    ];

    const handleView = () => {
        console.log("View button clicked");
    };

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default TransactionsList;
