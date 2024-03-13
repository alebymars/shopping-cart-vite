import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '@components/Cards';
import Loader from '@components/Loader';
import { RootState } from '@store/index';
import { setProducts } from '@store/slices/rootSlice';
import { Product } from '@store/types';
import { getAllProducts } from '@utils/getAllProducts';
import usePreventPageUnload from '@hooks/usePreventPageUnload';

const Content: React.FC = () => {

    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.root.products);
    const basket = useSelector((state: RootState) => state.root.basket);

    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    usePreventPageUnload(hasUnsavedChanges);

    useEffect(() => {
        getAllProducts()
            .then((data: Product[]) => {
                setAllProducts(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        dispatch(setProducts(allProducts));
    }, [allProducts, dispatch]);

    useEffect(() => {
        if (basket.length > 0) {
            setHasUnsavedChanges(true);
        } else {
            setHasUnsavedChanges(false);
        }
    }, [dispatch, basket]);


    if (isLoading) {
        return <Loader />
    }

    // продуктов еще нет
    if (products.length === 0) {
        return <h1>Продуктов еще нет</h1>
    }

    return <Cards products={Object.values(products)} />
};

export default Content;
