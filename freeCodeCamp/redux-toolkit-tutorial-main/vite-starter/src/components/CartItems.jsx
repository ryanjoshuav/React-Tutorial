import { useDispatch } from "react-redux";
import { ChevronUp, ChevronDown } from "../icons";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

const CartItems = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(id))}
                >
                    remove
                </button>
            </div>
            <div>
                <button
                    className="amount-btn"
                    onClick={() => dispatch(increase({ id }))}
                >
                    <ChevronUp />
                </button>
                <button
                    className="amount-btn"
                    onClick={() =>
                        amount === 1
                            ? dispatch(removeItem(id))
                            : dispatch(decrease({ id }))
                    }
                >
                    <ChevronDown />
                </button>
            </div>
        </article>
    );
};
export default CartItems;
