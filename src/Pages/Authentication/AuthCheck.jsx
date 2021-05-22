import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function AuthCheck() {
    const [hasAccount, setHasAccount] = useState(true)

    if (hasAccount) {
        return (<Login setHasAccount={setHasAccount} />)
    } else {
        return (<Register setHasAccount={setHasAccount} />)
    }
    
}