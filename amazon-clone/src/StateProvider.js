import React, {createContext, useContext, useReducer } from "react";
// Prepares the data Layer
export const StateContext= createContext();

//wrap our app and provides the Data Layer
export const StateProvider = ({reducer, initialState , children}) => (
    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//Pull information from the data layer
export const useStateValue =() => useContext(StateContext);