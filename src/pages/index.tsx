import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Order = lazy(() => import("./Order"));
const Products = lazy(() => import("./Products"));
const Users = lazy(() => import("./Users"));
const Tools = lazy(() => import("./Tools"));
const Settings = lazy(() => import("./Settings"));
const Sellers = lazy(() => import("./Sellers"));
const ReviewPage = lazy(() => import("./Reviews"));
export {
    Dashboard,
    Order,
    Products,
    Users,
    Tools,
    Settings,
    Sellers,
    ReviewPage,
};
