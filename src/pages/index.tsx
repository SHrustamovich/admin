import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Sales = lazy(() => import("./Sales"));
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

export {
    Dashboard,
    Sales,
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
};
