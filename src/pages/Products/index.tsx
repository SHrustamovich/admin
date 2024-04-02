import ProductHeader from "./productHeader";
import ProductMainHeader from "./productMain";

const Products = () => {
    return (
        <div>
            <div>
                <ProductHeader />
                <div className='bg-white p-[20px] rounded-[6px]'>
                    <ProductMainHeader />
                </div>
            </div>
        </div>
    );
};

export default Products;
