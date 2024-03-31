import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, TableProps } from "antd";

const OrderList = () => {
    interface DataType {
        key: string;
        id: number;
        name: string;
        age: number;
        email: string;
        total: number;
        status: string;
        date: string;
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
            email: "john@example.com",
            total: 100,
            status: "Pending",
            date: "2024-03-29",
        },
        {
            key: "2",
            id: 2,
            name: "Jim Green",
            age: 42,
            email: "jim@example.com",
            total: 200,
            status: "Delivered",
            date: "2024-03-30",
        },
        {
            key: "3",
            id: 3,
            name: "Joe Black",
            age: 32,
            email: "joe@example.com",
            total: 150,
            status: "Processing",
            date: "2024-03-31",
        },
    ];

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
