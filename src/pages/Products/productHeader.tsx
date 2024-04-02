import { Icons } from "~constanta/icons";

const ProductHeader = () => {
    return (
        <div className='flex items-center justify-between mb-[24px]'>
            <h1 className='text-2xl font-semibold leading-6'>Product grid</h1>
            <div className='flex items-center gap-[18px]'>
                <button className='flex items-center gap-[7px] px-[10px] py-[8px] border-[1px] border-solid rounded-[6px]'>
                    <Icons.export /> <p>Export</p>
                </button>
                <button className='flex items-center gap-[7px] px-[10px] py-[8px] border-[1px] border-solid rounded-[6px]'>
                    <Icons.import /> <p>Import</p>
                </button>
                <button className='flex items-center gap-[7px] px-[10px] py-[8px] border-[1px] border-solid rounded-[6px] bg-[#3167EB] text-white'>
                    + Create new
                </button>
            </div>
        </div>
    );
};

export default ProductHeader;
