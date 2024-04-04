import { Tabs, TabsProps } from "antd";
import GeneralComp from "./features/GeneralComp";
import Moderators from "./features/moderators";
import AdminAccount from "./features/adminAccount";

const Settings = () => {
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "General",
            children: <GeneralComp />,
        },
        {
            key: "2",
            label: "Moderators",
            children: <Moderators />,
        },
        {
            key: "3",
            label: "Admin account",
            children: <AdminAccount />,
        },
        {
            key: "4",
            label: "SEO settings",
            children: "Content of Tab Pane 3",
        },
        {
            key: "5",
            label: "Mail settings",
            children: "Content of Tab Pane 3",
        },
        {
            key: "6",
            label: "Newsletter",
            children: "Content of Tab Pane 3",
        },
    ];
    return (
        <div className='bg-white h-[85vh] p-[20px] rounded-[10px]'>
            <Tabs items={items} tabPosition='left' />
        </div>
    );
};

export default Settings;
