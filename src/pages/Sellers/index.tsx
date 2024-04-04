import { DatePicker, Flex, Input, Select } from "antd";
import SellersHeader from "./features/sellersHeader";
import SellersCard from "./features/sellersCard";

const Sellers = () => {
    return (
        <div className='w-full p-[6px]'>
            <SellersHeader />

            <div className='bg-white rounded-xl mt-[22px] p-[16px]'>
                <Flex
                    className='p-[5px]'
                    justify='space-between'
                    align='center'>
                    <Input style={{ width: 395 }} placeholder='Search' />
                    <Flex justify='center' align='center' gap={"small"}>
                        <Select
                            style={{ width: "120px" }}
                            defaultValue={"1"}
                            options={[
                                { value: "1", label: "show 20" },
                                { value: "2", label: "show 40" },
                                { value: "3", label: "show 60" },
                            ]}
                        />
                        <DatePicker />
                    </Flex>
                </Flex>
                <SellersCard />
            </div>
        </div>
    );
};

export default Sellers;
