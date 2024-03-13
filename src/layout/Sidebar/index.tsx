import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon24TrashSimpleOutline } from '@vkontakte/icons';
import Button from '@components/Button';
import { RootState } from '@store/index';
import { setProductsInBasket } from '@store/slices/rootSlice';
import styles from './Sidebar.module.css';


const Sidebar = () => {

    const dispatch = useDispatch();

    const products = useSelector((state: RootState) => state.root.basket);

    const totalPrice = () => {
        return products.reduce((a, b) => a + (b.price * b.count), 0).toFixed(2);
    }

    const clearBasket = () => {
        dispatch(setProductsInBasket([]));
    }

    return (
        <div className={styles.container}>
            <span className={styles.titleBlock}>Корзина {products.length > 0 && <span>({products.length})</span> || null}</span>
            <p className={styles.total}>Итого: {totalPrice()}₽</p>
            {products.length > 0 && <Button
                disabled={products.length === 0}
                icon={<Icon24TrashSimpleOutline width={16} height={16} />}
                style={{ borderRadius: 7, fontSize: 16, fontWeight: 500, flexDirection: "row" }}
                title={'Очистить'}
                onClick={clearBasket} /> || null}
            {products.length > 0 && products.map((product) => (
                <div key={product.id} className={styles.basketCard}>
                    <img src={product.image} className={styles.image} alt={product.title} />
                    <div className={styles.info}>
                        <p className={styles.title}>{product.title}</p>
                        <p className={styles.price}>{product.price} руб</p>
                        <p className={styles.count}>Количество: {product.count}</p>
                        <p className={styles.totalPrice}>{(product.count * product.price).toFixed(2)}₽</p>
                    </div>
                </div>
            )) || <p className={styles.empty}>Корзина пуста</p>}
        </div>
    )
};

export default Sidebar;
