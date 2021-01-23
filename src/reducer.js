export const initialState = {
    basket: [],
    err:{value:''},
    user: null,
    itemBasketNo:0,
};
// export const initialState = {
//     lol: '' ,
// };

//export const initialState ={ value: null,};

//export const plusOneInBasket = (itemBasketNo) => itemBasketNo+1;

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item)=>  item.price + amount, 0);

const reducer = (state, action)=> {
  // console.log(action);
    switch(action.type){
        case'ADD_TO_BASKET':
        let basketnumber =action.item.keyId+1;
            return{
                ...state,
                basket:[...state.basket, action.item],
                itemBasketNo: basketnumber,
            }

        case'REMOVE_FROM_BASKET':
        //in order to delete the specific product ONCE from the state, we use index
            const index= state.basket.findIndex(          //finds the first match
                (basketItem) => basketItem.keyId === action.keyId
                );

            let newBasket = [...state.basket];
            
            if (index >=0) {
               newBasket.splice(index, 1);
            } else {console.warn(
                "Can't remove product (id: ${action.id}) as its not in the basket!"
                )
            }
            return{
                ...state,
                basket: newBasket
            }
        
        case'ERROR_MESSAGE':
            return{
                ...state,
                err:{value:'Δεν μπαίνεις φίλος, κάτι λάθος έχεις κάνει...'}
            }

        case'SET_USER':
            return{
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;
