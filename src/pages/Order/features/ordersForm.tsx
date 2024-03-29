import { Modal } from "antd";
import { FC } from "react";

interface PropsSellersForm {
    open: boolean;
    setOpen: (open: boolean) => void;
}
const OrdersForm: FC<PropsSellersForm> = ({ open, setOpen }) => {
    const onClose = () => {
        setOpen(false);
    };
    return (
        <Modal open={open} onCancel={onClose}>
            modal
        </Modal>
    );
};
export default OrdersForm;
