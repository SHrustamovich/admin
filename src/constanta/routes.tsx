import { ReactNode } from "react";
import { Appearance, Coupons, Dashboard, FlashSales, Localizations, Pages, Products, Reports, Sales, Settings, Tools, Users } from "~pages/index";



interface IRouter {
    id: number;
    path: string;
    element: ReactNode;
}

export const router: IRouter[] = [
    {
        id: 1,
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        id: 2,
        path: "/products",
        element: <Products />,
    },
    {
        id: 3,
        path: "/sales",
        element: <Sales />,
    },
    {
        id: 4,
        path: "/flashsales",
        element: <FlashSales />,
    },
    {
        id: 5,
        path: "/coupons",
        element: <Coupons />,
    },
    {
        id: 6,
        path: "/pages",
        element: <Pages />,
    },
    {
        id: 7,
        path: "/users",
        element: <Users />,
    },
    {
        id: 8,
        path: "/localizations",
        element: <Localizations />,
    },
    {
        id: 9,
        path: "/appearance",
        element: <Appearance />,
    },
    {
        id: 10,
        path: "/tools",
        element: <Tools />,
    },
    {
        id: 11,
        path: "/reports",
        element: <Reports />,
    },
    {
        id: 12,
        path: "/settings",
        element: <Settings />,
    },
];
