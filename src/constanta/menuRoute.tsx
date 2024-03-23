import { ReactNode } from "react";
import { Icons } from "./icons";

export interface LinkType {
    id: number;
    title: string;
    path: string;
    icon: ReactNode;
}

export const MenuLink: LinkType[] = [
    {
        id: 1,
        title: "Dashboard",
        path: "/dashboard",
        icon: <Icons.Dashboard />,
    },
    {
        id: 2,
        title: "Products",
        path: "/products",
        icon: <Icons.Products />,
    },
    {
        id: 3,
        title: "Orders",
        path: "/order",
        icon: <Icons.Sales />,
    },
    {
        id: 4,
        title: "Customers",
        path: "/customers",
        icon: <Icons.FlashSales />,
    },
    {
        id: 5,
        title: "Statistics",
        path: "/statistics",
        icon: <Icons.Coupons />,
    },
    {
        id: 6,
        title: "Reviews",
        path: "/reviews",
        icon: <Icons.Pages />,
    },
    {
        id: 7,
        title: "Transactions",
        path: "/transactions",
        icon: <Icons.Pages />,
    },
    {
        id: 8,
        title: "Sellers",
        path: "/sellers",
        icon: <Icons.Pages />,
    },
    {
        id: 9,
        title: "Hot offers",
        path: "/offers",
        icon: <Icons.Pages />,
    },
];

export const MenuSystem: LinkType[] = [
    {
        id: 1,
        title: "Appearance",
        path: "/appearance",
        icon: <Icons.Users />,
    },
    {
        id: 2,
        title: "Settings",
        path: "/settings",
        icon: <Icons.Localizations />,
    },
];
