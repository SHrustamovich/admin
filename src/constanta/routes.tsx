import { ReactNode } from "react";
import OrdersDetails from "~pages/Orders/OrderDetailsPage";
import {
    Appearance,
    Customers,
    Dashboard,
    Offers,
    Order,
    Products,
    ReviewPage,
    Sellers,
    Settings,
    Statistics,
    Transactions,
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
        element: <Customers />,
    },
    {
        id: 5,
        path: "/statistics",
        element: <Statistics />,
    },
    {
        id: 7,
        path: "/transactions",
        element: <Transactions />,
    },
    {
        id: 8,
        path: "/sellers",
        element: <Sellers />,
    },
    {
        id: 9,
        path: "/offers",
        element: <Offers />,
    },
    {
        id: 10,
        path: "/appearance",
        element: <Appearance />,
    },
    {
        id: 11,
        path: "/reviews",
        element: <ReviewPage />,
    },
    {
        id: 12,
        path: "/settings",
        element: <Settings />,
    },
    {
        id: 13,
        path: "/ordersdetails",
        element: <OrdersDetails />,
    },
];
