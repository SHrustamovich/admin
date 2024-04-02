import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Order = lazy(() => import("./Order"));
const Products = lazy(() => import("./Products"));
const Appearance = lazy(() => import("./Appearance"));
const Settings = lazy(() => import("./Settings"));
const Sellers = lazy(() => import("./Sellers"));
const Customers = lazy(() => import("./Customers"));
const Statistics = lazy(() => import("./Statistics"));
const Reviews = lazy(() => import("./Reviews"));
const Transactions = lazy(() => import("./Transactions"));
const HotOffers = lazy(() => import("./HotOffers"));

export {
    Dashboard,
    Order,
    Products,
    Appearance,
    Settings,
    Sellers,
    Customers,
    Statistics,
    Reviews,
    Transactions,
    HotOffers,
};
