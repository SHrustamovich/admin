import { Drawer } from "antd";
import OrdersForm from "./ordersForm";
import { FC } from "react";

interface PropsOrder {
    open: boolean;
    setOpen: (open: boolean) => void;
}
const OrdersDrawer: FC<PropsOrder> = ({ open, setOpen }) => {
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer
                title='Filter'
                closable={false}
                onClose={onClose}
                open={open}>
                <OrdersForm />
            </Drawer>
        </>
    );
};

export default OrdersDrawer;