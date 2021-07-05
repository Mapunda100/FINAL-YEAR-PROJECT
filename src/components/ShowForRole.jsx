import { useContext } from 'react';
// import { AuthContext } from '../../Context/AuthContext';
import { AuthContext } from '../Context/AuthContext'


export default function ShowForRole({ allowedRoles, children }) {
    const { state } = useContext(AuthContext)
    console.log(state)
    let isPermitted = allowedRoles.some(e => e === state.currentUser.role)

    if (isPermitted) {
        return children;
    }
    return <></>
};

