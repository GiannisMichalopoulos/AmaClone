
import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
//import FlipMove from 'react-flip-move';
import ShopingBasket from './ShopingBasket';



function Checkout() {
    const[{basket, user}] = useStateValue();
    

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src= "https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
                alt=""/>
                <div >
                    <h3>Hello {user? user?.email : 'Guest'}</h3>
                    <h2 className="checkout__title">Your Shoping Basket</h2>

                    {/*checkoutProduct*/}

                    <ShopingBasket />
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout



