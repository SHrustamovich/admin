import { DatePicker } from "antd";
import SearchComp from "~components/Search";
import SelectComp from "~components/Select";

const ProductMainHeader = () => {
    // const data = [
    //     { value: "1", label: "show 20" },
    //     { value: "2", label: "show 40" },
    //     { value: "3", label: "show 60" },
    // ];
    return (
        <div className='flex items-center justify-between'>
            <SearchComp />
            <div className='flex gap-2'>
                <SelectComp />
                <DatePicker />
            </div>
        </div>
    );
};

export default ProductMainHeader;
