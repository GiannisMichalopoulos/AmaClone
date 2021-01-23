import React, {useState} from 'react';
import './Payment.css';
import ShopingBasket from './ShopingBasket';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';


function Payment() {
    const[{basket,user}]=useStateValue();

    const stripe = useStripe();
    const elements= useElements();

    const [succeeded,setSucceed] = useState(null);
    const [processing, setProcessing] = useState("");
    const[error,setError] = useState(null);
    const [disabled,setDisabled] = useState(null);

    const handleSubmit = async (event)=> {
        //do all the fancy stripe stuff..
        event.preventDefault();
        setProcessing(true)
    }

    const handleChange = e=> {
        //listens for changes inside the CardElement 
        //and displays any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message:"");

    }
    
    return ( 
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout ( 
                        <Link to='/checkout'>
                            {basket?.length } items
                        </Link>
                    ) 
                </h1>


                {/*payment section -  Delivery Address*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/*payment section -  Review Items*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                     <ShopingBasket/>
                    </div>
                </div>

                {/*payment section -  Payment Method*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className= 'payment__details'>
                        {/* Stripe goes here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className= 'payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) =>(
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType = {"text"}
                                    thousandSaparator={true}
                                    prefix={"$"} 
                                />
                                <button  className='payment__buyButton' 
                                    disabled={processing || disabled || succeeded}
                                    >
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/*Errors */}
                            {error && <div>{error}</div>}  {/*Δείξε το error μόνο αν υπάρχει error*/}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
