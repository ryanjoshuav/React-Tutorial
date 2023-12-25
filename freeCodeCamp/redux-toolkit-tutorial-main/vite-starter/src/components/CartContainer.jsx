import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((store) => store.cart);

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
                {!amount && <h4 className="empty-cart">is currently empty</h4>}
            </header>
            {amount ? (
                <>
                    <div>
                        {cartItems.map((item) => (
                            <CartItems key={item.id} {...item} />
                        ))}
                    </div>
                    <footer>
                        <hr />
                        <div className="cart-total">
                            <h4>
                                total <span>${total}</span>
                            </h4>
                        </div>
                        <button
                            className="btn clear-btn"
                            onClick={() => {
                                dispatch(openModal());
                            }}
                        >
                            clear cart
                        </button>
                    </footer>
                </>
            ) : null}
        </section>
    );
};
export default CartContainer;
