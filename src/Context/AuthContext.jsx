import React, { useReducer } from "react";

let initialState = {
    isAuthenticated: sessionStorage.getItem('token') ? true : false,
    token: '',
    currentUser: JSON.parse(sessionStorage.getItem('currentUser')) || {}
}
let reducer = (state, action) => {
    switch (action.type) {
        case 'isAuthenticated':
            return { ...state, isAuthenticated: state.isAuthenticated = action.payload }
        case 'token':
            return { ...state, token: state.token = action.payload }
        case 'currentUser':
            return { ...state, currentUser: state.currentUser = action.payload }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = React.createContext({});

const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    let value = { state, dispatch }
    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}

const AuthContextConsumer = AuthContext.Consumer;
export { AuthContext, AuthContextConsumer, AuthContextProvider }