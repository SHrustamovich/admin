import { productData } from "~constanta/productData";

const ProductCard = () => {
    return (
        <div>
            {productData.map((item) => (
                <div>
                    <div>
                        <img src={item.image} alt='' />
                    </div>
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
