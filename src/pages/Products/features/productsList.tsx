import { Table, Tag, Space } from "antd";
import {
    ClockCircleOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";
import ProductHeader from "../productHeader";
import ProductMainHeader from "../productMain";

const Productlist = () => {
    interface DataType {
        key: React.Key;
        name: string;
        price: number;
        status: string;
        date: string;
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text: string) => (
                <Space>
                    <img
                        src='/path/to/product-image.png'
                        alt='Product Image'
                        style={{ width: 50, height: 50 }}
                    />
                    <span>{text}</span>
                </Space>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            render: (price: number) => <span>${price}</span>,
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (status: string) => (
                <Tag
                    icon={
                        status === "available" ? (
                            <CheckCircleOutlined />
                        ) : status === "unavailable" ? (
                            <CloseCircleOutlined />
                        ) : (
                            <ClockCircleOutlined />
                        )
                    }
                    color={
                        status === "available"
                            ? "green"
                            : status === "unavailable"
                            ? "red"
                            : "yellow"
                    }>
                    {status.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: "Date",
            dataIndex: "date",
            render: (date: string) => (
                <span>{date}</span> // You can format the date here as needed
            ),
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <Space size='middle'>
                    <EllipsisOutlined />
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: "1",
            name: "Product 1",
            price: 100,
            status: "available",
            date: "12 days ago",
        },
        {
            key: "2",
            name: "Product 2",
            price: 200,
            status: "unavailable",
            date: "Now",
        },
        {
            key: "3",
            name: "Product 3",
            price: 150,
            status: "in process",
            date: "3 days ago",
        },
    ];

    return (
        <div>
            <ProductHeader />
            <div className='bg-white rounded-xl mt-[22px] p-[16px]'>
                <ProductMainHeader />

                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default Productlist;
