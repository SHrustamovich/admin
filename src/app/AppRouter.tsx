import {
    BellOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
    SunOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Layout, Menu, Input, Avatar } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { FC, Suspense, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Lazy from "~components/Lazy";
import { Icons } from "~constanta/icons";
import { MenuLink, MenuSystem } from "~constanta/menuRoute";
import { router } from "~constanta/routes";

const AppRouter: FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div style={{ height: "100vh" }}>
            <ConfigProvider>
                <Layout
                    style={{
                        height: "100%",
                    }}>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={collapsed}
                        style={{
                            overflow: "auto",
                            background: "#fff",
                            color: "#FFF",
                        }}>
                        <div className='demo-logo-vertical' />
                        <div className='flex justify-between items-center pl-[14px]'>
                            <Icons.Logo />
                            <Button
                                type='text'
                                icon={
                                    collapsed ? (
                                        <MenuUnfoldOutlined />
                                    ) : (
                                        <MenuFoldOutlined />
                                    )
                                }
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: "16px",
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </div>
                        <div>
                            <Menu
                                theme='light'
                                mode='inline'
                                defaultSelectedKeys={["1"]}>
                                {MenuLink.map(({ id, title, path, icon }) => (
                                    <Menu.Item
                                        key={id}
                                        icon={icon}
                                        onClick={() => setOpen(!open)}>
                                        <div className='flex items-center justify-between'>
                                            <Link to={path}>{title}</Link>
                                            {open ? (
                                                <Icons.Up />
                                            ) : (
                                                <Icons.Down />
                                            )}
                                        </div>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </div>
                        <hr />
                        <div className=''>
                            <p className='text-[#000] pl-[25px]'>System</p>
                            <Menu
                                theme='light'
                                mode='inline'
                                defaultSelectedKeys={["1"]}>
                                {MenuSystem.map(({ id, title, path, icon }) => (
                                    <Menu.Item
                                        key={id}
                                        icon={icon}
                                        onClick={() => setOpen(!open)}>
                                        <div className='flex items-center justify-between'>
                                            <Link to={path}>{title}</Link>
                                            {open ? (
                                                <Icons.Up />
                                            ) : (
                                                <Icons.Down />
                                            )}
                                        </div>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </div>
                    </Sider>
                    <Layout>
                        <Header
                            style={{
                                padding: 0,
                                backgroundColor: "#fff",
                                // position: "fixed",
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                            className='flex'>
                            <div className='flex items-center pl-[31px] gap-x-[5px]'>
                                <SearchOutlined className='text-[24px]' />
                                <Input
                                    placeholder='Basic usage'
                                    className='w-[275px] border-none bg-inherit text-[#AEB6CA]'
                                />
                            </div>
                            <div className='flex justify-center items-center gap-x-[20px]'>
                                <SunOutlined className='text-[24px]' />
                                <BellOutlined className='text-[24px]' />
                                <div className='flex justify-start items-center'>
                                    <Avatar size={38} icon={<UserOutlined />} />
                                    <Icons.Down />
                                </div>
                            </div>
                        </Header>
                        <Content
                            style={{
                                padding: 24,
                            }}>
                            <Suspense fallback={<Lazy />}>
                                {router.map((item) => (
                                    <Routes key={item.id}>
                                        <Route
                                            key={item.id}
                                            element={item.element}
                                            path={item.path}
                                        />
                                    </Routes>
                                ))}
                            </Suspense>
                        </Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </div>
    );
};

export default AppRouter;
