import { ReactNode } from "react";

export interface MenuType {
    id: number;
    title: string;
    icon: ReactNode;
    path: string;
}
