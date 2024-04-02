import { Button, Flex } from "antd";
// import { useState } from "react";
// import SellersForm from "./sellersForm";

const SellersHeader = () => {
    // const [open, setOpen] = useState(false);
    const handlyClick = () => {
        // setOpen(true);
    };
    return (
        <Flex justify='space-between' align='items-center'>
            <h1>Sellers</h1>
            <Button onClick={() => handlyClick()}>+ Create new</Button>
        </Flex>
        // { open && <SellersForm open={open} />}
    );
};

export default SellersHeader;
