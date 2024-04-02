import { Select } from "antd";
export interface ISData {
    value: string;
    label: string;
}

const SelectComp = () => {
    return (
        <Select
            style={{ width: "120px" }}
            defaultValue={"1"}
            options={[
                { value: "1", label: "show 20" },
                { value: "2", label: "show 40" },
                { value: "3", label: "show 60" },
            ]}
        />
    );
};
export default SelectComp;
