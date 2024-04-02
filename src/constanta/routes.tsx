import { ReactNode } from "react";
import {
    Appearance,
    Coupons,
    Dashboard,
    FlashSales,
    Order,
    Pages,
    Products,
    Reviews,
    Sellers,
    Tools,
    Users,
} from "~pages/index";

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
        path: "/order",
        element: <Order />,
    },
    {
        id: 4,
        path: "/customers",
        element: <FlashSales />,
    },
    {
        id: 5,
        path: "/statistics",
        element: <Coupons />,
    },
    {
        id: 7,
        path: "/transactions",
        element: <Users />,
    },
    {
        id: 8,
        path: "/sellers",
        element: <Sellers />,
    },
    {
        id: 9,
        path: "/offers",
        element: <Appearance />,
    },
    {
        id: 10,
        path: "/appearance",
        element: <Tools />,
    },
    {
        id: 11,
        path: "/reviews",
        element: <Reviews />,
    },
];
