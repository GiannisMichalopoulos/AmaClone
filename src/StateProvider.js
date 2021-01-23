import React,{ createContext, useContext,useReducer} from "react";


//Prepares the DataLayer
export const StateContext = createContext();

//Wrap our App and provide the data layer to every conpenent outsite of the app
export const StateProvider = ({ reducer, initialState , children}) =>(
    <StateContext.Provider value= {useReducer ( reducer,initialState)}>
    {children}
    </StateContext.Provider>
);


//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);