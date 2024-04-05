import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, Table, TableProps, Tag } from "antd";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { DataType, data, items } from "~constanta/ordersData";
import OrdersDetails from "../OrderDetailsPage";

const OrdersTable: React.FC = () => {
    const columns: TableProps<DataType>["columns"] = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
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
            title: "Toatal",
            dataIndex: "total",
            key: "total",
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (status: string[]) => (
                <span>
                    {status.map((item) => {
                        let color = item == "Pending" ? "green" : "orange";
                        if (item === "Canceled") {
                            color = "red";
                        }
                        return (
                            <Tag
                                color={color}
                                key={item}
                                className='rounded-[50px]'>
                                {item.toString()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        {
            title: "Date",
            key: "date",
            dataIndex: "date",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: () => (
                <Dropdown menu={{ items }}>
                    <button
                        onClick={handlyOrderDetailsPage}
                        className='w-[30px] h-[30px] rounded-[50%] hover:bg-[#E4E4E4]'>
                        <EllipsisOutlined />
                    </button>
                </Dropdown>
            ),
        },
    ];

    const navigate = useNavigate();
    function handlyOrderDetailsPage() {
        navigate("/ordersdetails");
    }
    return (
        <div className='gap-[100px]'>
            <Table columns={columns} dataSource={data} pagination={false} />
            <Routes>
                <Route path='/' />
                <Route path='/ordersdetails' element={<OrdersDetails />} />
            </Routes>
        </div>
    );
};

export default OrdersTable;
