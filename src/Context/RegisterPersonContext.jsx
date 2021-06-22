import React, { useReducer } from "react";

let initialState = {
    personDetails: {}
}
let reducer = (state, action) => {
    switch (action.type) {
        case 'personDetails':
            return { ...state, personDetails: state.personDetails = action.payload }
    }
}

const RegisterPersonContext = React.createContext({});

const RegisterPersonContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    let value = { state, dispatch }
    return (
        <RegisterPersonContext.Provider value={value}>{props.children}</RegisterPersonContext.Provider>
    )
}

const RegisterPersonoContextConsumer = RegisterPersonContext.Consumer;
export { RegisterPersonContext, RegisterPersonoContextConsumer, RegisterPersonContextProvider }