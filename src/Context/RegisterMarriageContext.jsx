import React, { useReducer } from "react";

let initialState = {
    brideDetails: {},
    groomDetails: {}
}
let reducer = (state, action) => {
    switch (action.type) {
        case 'brideDetails':
            return { ...state, brideDetails: state.brideDetails = action.payload }
        case 'groomDetails':
            return { ...state, groomDetails: state.groomDetails = action.payload }
        default:
            return
    }
}

const RegisterMarriageContext = React.createContext({});

const RegisterMarriageContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    let value = { state, dispatch }
    return (
        <RegisterMarriageContext.Provider value={value}>{props.children}</RegisterMarriageContext.Provider>
    )
}

const RegisterMarriageContextConsumer = RegisterMarriageContext.Consumer;
export { RegisterMarriageContext, RegisterMarriageContextConsumer, RegisterMarriageContextProvider }