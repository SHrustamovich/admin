// routes.tsx
import { ReactNode } from "react";
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
import AddProduct from "~pages/Products/features/addProduct";
import ProductsBrands from "~pages/Products/features/productsBrands";
import ProductsCategories from "~pages/Products/features/productsCategories";
import Productlist from "~pages/Products/features/productsList";

interface IRouter {
    id: number;
    path: string;
    element: ReactNode;
    children?: IRouter[];
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
        path: "/addproduct",
        element: <AddProduct />,
    },
    {
        id: 4,
        path: "/productlist",
        element: <Productlist />,
    },
    {
        id: 5,
        path: "/categories",
        element: <ProductsCategories />,
    },
    {
        id: 6,
        path: "/brands",
        element: <ProductsBrands />,
    },
    {
        id: 7,
        path: "/order",
        element: <Order />,
    },
    {
        id: 8,
        path: "/customers",
        element: <Customers />,
    },
    {
        id: 9,
        path: "/statistics",
        element: <Statistics />,
    },
    {
        id: 10,
        path: "/transactions",
        element: <Transactions />,
    },
    {
        id: 11,
        path: "/sellers",
        element: <Sellers />,
    },
    {
        id: 12,
        path: "/offers",
        element: <Offers />,
    },
    {
        id: 13,
        path: "/appearance",
        element: <Appearance />,
    },
    {
        id: 14,
        path: "/reviews",
        element: <ReviewPage />,
    },
    {
        id: 15,
        path: "/settings",
        element: <Settings />,
    },
];
