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
        title: "Sales",
        path: "/sales",
        icon: <Icons.Sales />,
    },
    {
        id: 4,
        title: "Flashsales",
        path: "/flashsales",
        icon: <Icons.FlashSales />,
    },
    {
        id: 5,
        title: "Coupons",
        path: "/coupons",
        icon: <Icons.Coupons />,
    },
    {
        id: 6,
        title: "Pages",
        path: "/pages",
        icon: <Icons.Pages />,
    },
];

export const MenuSystem: LinkType[] = [
    {
        id: 1,
        title: "Users",
        path: "/users",
        icon: <Icons.Users />,
    },
    {
        id: 2,
        title: "Localizations",
        path: "/localizations",
        icon: <Icons.Localizations />,
    },
    {
        id: 3,
        title: "Appearance",
        path: "/appearance",
        icon: <Icons.Appearance />,
    },
    {
        id: 5,
        title: "Reports",
        path: "/reports",
        icon: <Icons.Reports />,
    },
    {
        id: 6,
        title: "Settings",
        path: "/settings",
        icon: <Icons.Settings />,
    },
];
