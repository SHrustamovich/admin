import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, TableProps } from "antd";

const OrderList = () => {
    interface DataType {
        key: string;
        id: number;
        name: string;
        age: number;
        email: string; // Adding email field
        total: number; // Adding total field
        status: string; // Adding status field
        date: string; // Adding date field
    }

    const columns: TableProps<DataType>["columns"] = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Email", // New column for email
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Total", // New column for total
            dataIndex: "total",
            key: "total",
        },
        {
            title: "Status", // New column for status
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Date", // New column for date
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <Space size='middle'>
                    <EditOutlined />
                    <DeleteOutlined />
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: "1",
            id: 1,
            name: "John Brown",
            age: 32,
            email: "john@example.com", // Adding email
            total: 100, // Adding total
            status: "Pending", // Adding status
            date: "2024-03-29", // Adding date
        },
        {
            key: "2",
            id: 2,
            name: "Jim Green",
            age: 42,
            email: "jim@example.com", // Adding email
            total: 200, // Adding total
            status: "Delivered", // Adding status
            date: "2024-03-30", // Adding date
        },
        {
            key: "3",
            id: 3,
            name: "Joe Black",
            age: 32,
            email: "joe@example.com", // Adding email
            total: 150, // Adding total
            status: "Processing", // Adding status
            date: "2024-03-31", // Adding date
        },
    ];

    // Adding ids
    data.forEach((item, index) => {
        item.id = index + 1;
    });

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default OrderList;
