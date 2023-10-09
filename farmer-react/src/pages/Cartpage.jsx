import React, { useState } from 'react';
import { cart } from '../components/cart';
import Cardcart from '../components/cartcard';
import "./shop.css";

const Cart = () => {
    const [cart1, setCart] = useState(cart);
    const [Total, setTotal] = useState(calculate());
    const removeFromCart = (productId) => {
        // Remove the item from the cart based on its unique identifier, e.g., productId
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };
    function calculate() {
        let t = 0;
        for (const [index, value] of cart1.entries()) {
            t += value.quantity * value.price;
        }
        return t;
    }
    console.log("total" + Total);
    return (
        <div className='shop'>
            <div className="shop-img-container"><img src="./images/shop.jpg" alt="shop-img" /></div>
            <h1 className='menu-header-txt'>Cart-Items</h1>
            <div className="card-container">
                <div className="card-main">
                    {cart1.map((item) => <Cardcart product={item} key={item.id} removeFromCart={removeFromCart} setTotal={setTotal} calculate={calculate} />)}
                </div>
                <div className="total">Total Bill:RS.{cart1.length === 0 ? 0 : Total}</div>
            </div>
            <div className="checkout text-center my-5"><button className='btn btn-success px-5 py-4 mx-3' style={{ width: "20%", fontSize: "2.5rem" }} onClick={() => cart1.length === 0 ? alert("CART IS EMPTY!!") : alert("YOUR ORDER HAS BEEN PLACED SUCCESSFULLY!!")}>Order Now</button></div>
        </div>
    );
};

export default Cart;