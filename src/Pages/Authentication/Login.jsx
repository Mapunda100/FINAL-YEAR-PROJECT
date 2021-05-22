import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

// edithemma30@gmail.com
export default function Login({ setHasAccount }) {
    const hist = useHistory()

    const { dispatch } = React.useContext(AuthContext)

    let setIsAuthorized = isAuthorized => dispatch({ type: 'isAuthenticated', payload: isAuthorized })
    let setCurrentUser = currentUser => dispatch({ type: 'currentUser', payload: currentUser })


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function login(e) {
        e.preventDefault()
        setError('')
        setLoading(true)
        await axios.post('/login', { email, password })
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('currentUser', JSON.stringify(response.data.user))
                setCurrentUser(response.data.user)
                setIsAuthorized(true)
                hist.replace('/')
            }).catch(error => {
                console.log(error)
                console.log(error.message)
                console.log(error.response)
                if (error.message === 'Network Error') {
                    return setError(error.message)
                }
                return setError(error.response.data.message)
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <section className='bg-default' style={{ height: '100vh' }} >
            <div class="main-content">
                <div class="header  bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                    <div class="container">
                        <div class="header-body text-center mb-7">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                                    <h3 class="text-white">Welcome to Change Supply System!</h3>
                                    <h1 class="text-white">Login Page</h1>
                                    {/* <p class="text-lead text-white">Use these awesome forms to login or create new account in
                                    your project for free.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="separator separator-bottom separator-skew zindex-100">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>

                <div class="container mt--8 pb-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-7">
                            <div class="card bg-secondary border-0 mb-0">
                                <div class="card-body px-lg-5 py-lg-5">
                                    <form onSubmit={login}>
                                        <div class="form-group mb-3">
                                            <div class="input-group input-group-merge input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                                </div>
                                                <input class="form-control" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-merge input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input class="form-control" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary my-4">
                                                {loading &&
                                                    <div className="spinner-border spinner-border-sm"></div>
                                                }
                                                &nbsp; Log in
                                            </button>
                                        </div>
                                    </form>
                                    {error &&
                                        <div class="alert alert-warning" role="alert">
                                            {error}
                                        </div>
                                    }
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <Link to='' class="text-light"><small>Forgot password?</small></Link>
                                </div>
                                <div class="col-6 text-right">
                                    <Link to='/register' class="text-light" onClick={() => setHasAccount(false)}><small>Create account as a Requester</small></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
