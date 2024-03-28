import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Order = lazy(() => import("./Order"));
const FlashSales = lazy(() => import("./FlashSales"));
const Coupons = lazy(() => import("./Coupons"));
const Pages = lazy(() => import("./Pages"));
const Products = lazy(() => import("./Products"));
const Users = lazy(() => import("./Users"));
const Localizations = lazy(() => import("./Localizations"));
const Appearance = lazy(() => import("./Appearance"));
const Tools = lazy(() => import("./Tools"));
const Reports = lazy(() => import("./Reports"));
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
    FlashSales,
    Coupons,
    Pages,
    Users,
    Localizations,
    Appearance,
    Tools,
    Reports,
    Settings,
    Sellers,
    Customers,
    Statistics,
    Reviews,
    Transactions,
    HotOffers,
};
