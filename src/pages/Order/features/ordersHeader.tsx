import { Button, Flex } from "antd";
import { useState } from "react";
import OrdersForm from "./ordersForm";

const OrdersHeader = () => {
    const [open, setOpen] = useState<boolean>(false);
    const hanlyOpenFunc = () => {
        setOpen(true);
    };
    return (
        <Flex justify='space-between' align='center' className='w-full'>
            <h1 className='h1 text-2xl font-semibold leading-[22px]'>Orders</h1>
            <Button onClick={hanlyOpenFunc} className='bg-[#3167EB] text-white'>
                + Create new
            </Button>
            {open && <OrdersForm open={open} setOpen={setOpen} />}
        </Flex>
    );
};
export default OrdersHeader;
