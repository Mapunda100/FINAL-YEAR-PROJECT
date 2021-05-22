import { useContext } from 'react';
// import { AuthContext } from '../../Context/AuthContext';
import { AuthContext } from '../Context/AuthContext'


export default function ShowForPermission({ allowedRoles, children }) {
    const { state } = useContext(AuthContext)
    let isPermitted = allowedRoles.some(e => e === state.currentUser.role_id)

    if (isPermitted) {
        return children;
    }
    return <></>
};

