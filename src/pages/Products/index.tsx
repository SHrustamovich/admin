import { Suspense } from "react";
import ProductHeader from "./productHeader";
import ProductMainHeader from "./productMain";
import Lazy from "~components/Lazy";
import { Route, Routes } from "react-router-dom";
import { router } from "~constanta/routes";

const Products = () => {
    return (
        <div>
            <div>
                <ProductHeader />
                <div className='bg-white p-[20px] rounded-[6px]'>
                    <ProductMainHeader />
                    <Suspense fallback={<Lazy />}>
                        {router.map((item) => (
                            <Routes key={item.id}>
                                <Route
                                    key={item.id}
                                    element={item.element}
                                    path={item.path}
                                />
                            </Routes>
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Products;
