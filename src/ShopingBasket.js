import React, {forwardRef} from 'react'
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';


function ShopingBasket() {
    const[{basket}] = useStateValue();

    const FumctionalCheckoutProduct = forwardRef((item, ref)=>( // για να παίξει το FlipMove σε Funnctional Component, χρειάζεται να βάλουμε τα Childs σε ένα ref 
        <div ref={ref}>
            <CheckoutProduct
                   id={item.id}
                   title={item.title}
                   price={item.price}
                   image={item.image}
                   rating={item.rating}
                   keyId = {item.keyId}
                   key={item.keyId}
                />
        </div>
    )
    )


    return (
        <div>
            <FlipMove >
                        {basket.map((item) => (
                            <FumctionalCheckoutProduct {...item}/>

                            ))}

                        {/* {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                keyId = {item.keyId}
                                key={item.keyId}
                            />
                           
                        ))} */}
            </FlipMove>

        </div>
    )
}

export default ShopingBasket
