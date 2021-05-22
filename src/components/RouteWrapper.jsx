import { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { AuthContext } from '../Context/AuthContext'

export default function RouteWrapper({ Component, ...props }) {
    // console.log(props)
    const { state } = useContext(AuthContext)

    if (props.roles && !props.roles.includes(state.currentUser.role)) {
        return <Redirect to="/error/401" />
    }
    return (
        <Route {...props} render={routeProps => <Component {...routeProps} />} />
    )
}
