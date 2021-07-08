import React, { createContext, useContext, useReducer } from "react";

// preparing the data layer
export const StateContext = createContext();

// higher order component(we gonna use this to wrap our app)
// wrap the app with this StateProvider and provides the data lyer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// useStateValue - it's a hook to pull something from the data layer
export const useStateValue = () => useContext(StateContext);
