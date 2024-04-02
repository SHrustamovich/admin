import { DatePicker, Select } from "antd";

const MainHeader = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
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
            </div>
        </div>
    );
};
export default MainHeader;
