import { useDispatch, useSelector } from "react-redux";
import { Icon20DeleteOutline } from '@vkontakte/icons';
import DualButton from "@components/DualButton";
import Button from "@components/Button";
import { RootState } from "@store/index";
import { setProductsInBasket } from "@store/slices/rootSlice";
import styles from "./Card.module.css";

interface Props {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    count: number;
}

const Card = ({ id, title, price, image, description, count }: Props) => {
    const dispatch = useDispatch();
    const basket = useSelector((state: RootState) => state.root.basket);

    const addToBasket = () => {
        if (!basket.some((item) => item.id === id)) {
            dispatch(setProductsInBasket([...basket, { id, title, price, image, count: 1 }]));
            return;
        }

        const updatedBasket = basket.map((item) => {
            if (item.id === id) {
                return item.count >= 10 ? item : { ...item, count: item.count + 1 };
            }
            return item;
        });

        dispatch(setProductsInBasket(updatedBasket));
    };

    const removeFromBasket = () => {
        const updatedBasket = basket.map((item) => {
            if (item.id === id) {
                return item.count <= 1 ? null : { ...item, count: item.count - 1 };
            }
            return item;
        }).filter(item => item !== null);

        dispatch(setProductsInBasket(updatedBasket));
    };

    const clearAllItemFromBasket = () => {
        dispatch(setProductsInBasket(basket.filter((item) => item.id !== id)));
    };

    const isDisabledDecrementButton = () => {
        return basket.some((item) => item.id === id && item.count <= 0) || basket.filter((item) => item.id === id).length === 0
    }

    const isDisabledIncrementButton = () => {
        return basket.some((item) => item.id === id && item.count >= 10)
    }

    return (
        <div className={styles.card}>
            <img src={image} className={styles.image} alt={title} />
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <div className={styles.priceAndCountContainer}>
                    <p className={styles.count}>{count} шт</p>
                    <p className={styles.price}>{price}₽</p>
                </div>
                <DualButton
                    style={{ marginTop: "10px" }}
                    titleOne={""}
                    titleTwo={""}
                    onClickOne={removeFromBasket}
                    onClickTwo={addToBasket}
                    disabledDecrementButton={isDisabledDecrementButton()}
                    disabledIncrementButton={isDisabledIncrementButton()}
                    removeButton={<Button title="" icon={<Icon20DeleteOutline color="rgba(0, 140, 255, 1)" width={20} height={20} />} onClick={() => {
                        clearAllItemFromBasket();
                    }} />}
                />
            </div>
        </div>
    );
};

export default Card;