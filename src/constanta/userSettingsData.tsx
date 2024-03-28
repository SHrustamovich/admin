import {
    LogoutOutlined,
    SettingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { ReactNode } from "react";

interface IUSer {
    id: number;
    icon: ReactNode;
    title: string;
    path: string;
}

export const UserSettingsData: IUSer[] = [
    {
        id: 1,
        icon: <SettingOutlined />,
        title: "Settings",
        path: "/settings",
    },
    {
        id: 2,
        icon: <UserOutlined />,
        title: "Profile",
        path: "/profile",
    },
    {
        id: 3,
        icon: <LogoutOutlined />,
        title: "Exit",
        path: "/exit",
    },
];
