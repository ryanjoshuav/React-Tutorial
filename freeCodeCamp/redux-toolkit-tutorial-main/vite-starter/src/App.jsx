import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";

function App() {
    const { cartItems, isLoading } = useSelector((store) => store.cart);
    const { isOpen } = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems]);

    useEffect(() => {
        dispatch(getCartItems());
    }, []);

    return (
        <>
            {isLoading ? (
                <h2>Loading....</h2>
            ) : (
                <main>
                    {isOpen && <Modal />}
                    <Navbar />
                    <CartContainer />
                </main>
            )}
        </>
    );
}
export default App;
