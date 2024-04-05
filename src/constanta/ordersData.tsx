import { ReactNode } from "react";
import { Icons } from "./icons";

export interface DataType {
    key: string;
    id: string;
    name: string;
    email: string;
    total: string;
    status: string[];
    date: string;
}

interface ItemsType {
    key: string;
    label: string;
}

interface DetailsDataType {
    id: string;
    title: string;
    icon: ReactNode;
    name: string;
    email: string;
    phone: string;
    link: string;
}

interface DetailsColDataType {
    id: string;
    title: string;
}

interface DetailsLineDataType {
    id: string;
    title: string;
    icon: string;
    num: string;
    price: string;
    total: string;
}

interface DetailsRowDataType {
    id: string;
    title: string;
    price: string;
}

export const items: ItemsType[] = [
    { key: "1", label: "View" },
    { key: "2", label: "Edit" },
    { key: "3", label: "Delete" },
];

export const data: DataType[] = [
    {
        key: "1",
        id: "0901",
        name: "Marvin McKinney",
        email: "Marvin McKinney",
        total: "$9.00",
        status: ["Pending"],
        date: "03.12.2020",
    },
    {
        key: "2",
        id: "2323",
        name: "Joe Leslie Alexander",
        email: "leslie@example.com",
        total: "$46.61",
        status: ["Pending"],
        date: "21.02.2020",
    },
    {
        key: "3",
        id: "1233",
        name: "Esther Howard",
        email: "esther@example.com",
        total: "$12.00",
        status: ["Canceled"],
        date: "03.07.2020",
    },
    {
        key: "4",
        id: "2323",
        name: "Jenny Wilson",
        email: "jenny@example.com",
        total: "$589.99",
        status: ["Received"],
        date: "22.05.2020",
    },
    {
        key: "5",
        id: "2112",
        name: "Marvin McKinney",
        email: "marvin@example.com",
        total: "$16.58",
        status: ["Received"],
        date: "23.04.2020",
    },
    {
        key: "6",
        id: "7897",
        name: "Albert Flores",
        email: "albert@example.com",
        total: "$10.00",
        status: ["Received"],
        date: "13.03.2020",
    },
    {
        key: "7",
        id: "2323",
        name: "Wade Warren",
        email: "wade@example.com",
        total: "$105.55",
        status: ["Received"],
        date: "23.09.2019",
    },
    {
        key: "8",
        id: "2324",
        name: "Jane Cooper",
        email: "jane@example.com",
        total: "$710.68",
        status: ["Received"],
        date: "28.04.2020",
    },
    {
        key: "9",
        id: "2325",
        name: "Savannah Nguyen",
        email: "savannah@example.com",
        total: "$710.68",
        status: ["Received"],
        date: "23.03.2020",
    },
];

export const DetailsData: DetailsDataType[] = [
    {
        id: "1",
        title: "Customer",
        icon: <Icons.OrdersProfile/>,
        name: "John Alexander",
        email: "alex@example.com",
        phone: "+998 99 22123456",
        link: "View profile",
    },
    {
        id: "2",
        title: "Order info",
        icon: <Icons.OrdersCar />,
        name: "Shipping: Fargo express",
        email: "Pay method: Credit card",
        phone: "Status: New",
        link: "Download",
    },
    {
        id: "3",
        title: "Deliver to",
        icon: <Icons.OrdersMap />,
        name: "City: Tashkent, Uzbekistan",
        email: "Street: Beruniy 369",
        phone: "Address: Block A, House 123, Floor 2",
        link: "Open map",
    },
];

export const DetailsColData: DetailsColDataType[] = [
    {
        id: "1",
        title: "Product",
    },
    {
        id: "2",
        title: "Quantity",
    },
    {
        id: "3",
        title: "Unit Price",
    },
    {
        id: "4",
        title: "Total",
    },
];

export const DetailsLineData: DetailsLineDataType[] = [
    {
        id: "1",
        title: "Supreme helinox chair one",
        icon: "#",
        num: "2",
        price: "$43.50",
        total: "$87.00",
    },
    {
        id: "2",
        title: "Gopro hero 7 ",
        icon: "#",
        num: "1",
        price: "$102.04",
        total: "$203.08",
    },
];

export const DetailsRowData: DetailsRowDataType[] = [
    {
        id: "1",
        title: "Subtotal",
        price: "$973.35",
    },
    {
        id: "2",
        title: "Shipping cost",
        price: "$10.00",
    },
    {
        id: "3",
        title: "Unit Grand total",
        price: "$983.00",
    },
];
