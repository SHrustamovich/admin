import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Order = lazy(() => import("./Orders"));
const Products = lazy(() => import("./Products"));
const Settings = lazy(() => import("./Settings"));
const Sellers = lazy(() => import("./Sellers"));
const ReviewPage = lazy(() => import("./Reviews"));
const Statistics = lazy(() => import("./Statistics"));
const Customers = lazy(() => import("./Customers"));
const Transactions = lazy(() => import("./Transactions"));
const Offers = lazy(() => import("./Offers"));
const Appearance = lazy(() => import("./Appearance"));
export {
    Dashboard,
    Order,
    Products,
    Settings,
    Sellers,
    ReviewPage,
    Customers,
    Statistics,
    Transactions,
    Offers,
    Appearance,
};
