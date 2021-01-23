import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, image, title, price, rating, keyId}) {

    const [{basket},dispatch]= useStateValue();

    const removeFromBasket = () =>{
        //remove the item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            keyId: keyId,
        })
    }

    return (
        
        <div className="checkoutProduct">
            <img 
            className="checkoutProduct__image" src={image} alt=""
            />
{console.log(`They key of item ${id} is  ${keyId}`)}
            <div className= "checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    {price}
                    <small>$ </small>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>
                            ⭐
                        </p>
                    ))
                    }
                </div>
                <button onClick={removeFromBasket}> Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
