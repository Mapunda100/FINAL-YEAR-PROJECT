import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

export default function Navbar() {
    const { state, dispatch } = React.useContext(AuthContext)
    let setIsAuthenticated = status => dispatch({ type: 'isAuthenticated', payload: status })
    let roleName = ''

    switch (state.currentUser.role) {
        case '3':
            roleName = 'SUPER ADMIN'
            break;
        case '2':
            roleName = 'ADMIN'
            break;
        case '1':
            roleName = 'REGISTRAR'
            break;
        default:
            break;
    }

    function handleLogout() {
        let logout = window.confirm('are you sure you want to logout?')
        if (logout) {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('userDetails')
            setIsAuthenticated(false)

            // axios.post('/logout', { token: sessionStorage.getItem('token') })
            //     .then(res => {
            //         console.log(res)
            //         // sessionStorage.removeItem('token')
            //         // sessionStorage.removeItem('userDetails')
            //         // setIsAuthenticated(false)
            //     }).catch(error => {
            //         console.log(error)
            //         console.log(error.response)
            //     })
        }
    }

    return (
        <React.Fragment>
            <nav className={`navbar navbar-top navbar-expand navbar-dark bg-default border-bottom`}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h2 className='text-white'>CIVIL REGISTRATION AND VITAL STATISTIC SYSTEM</h2>
                        {/* <BreadCrumb /> */}
                        {/* <!-- Navbar links --> */}
                        <ul className="navbar-nav align-items-center  ml-md-auto ">
                            <li className="nav-item d-xl-none">
                                {/* <!-- Sidenav toggler --> */}
                                <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                                    <div className="sidenav-toggler-inner">
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                    </div>
                                </div>
                            </li>
                            {/* <li className="nav-item d-sm-none">
                                <Link className="nav-link" to="#" data-action="search-show" data-target="#navbar-search-main">
                                    <i className="ni ni-zoom-split-in"></i>
                                </Link>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ni ni-bell-55"></i>
                                </Link>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
                            <li className="nav-item dropdown">
                                <Link className="nav-link pr-0" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <span className='ni ni-sound-wave' style={{ fontSize: '20px' }}></span>
                                            {/* <img alt="placeholder" src="assets/img/theme/team-4.jpg" /> */}
                                        </span>
                                        <div className="media-body  ml-2  d-none d-lg-block">
                                            {/* <span className="mb-0 text-sm  font-weight-bold">Sam Provider</span> */}
                                            {/* <span className="mb-0 text-sm  font-weight-bold">{`${state.currentUser.name.toUpperCase()}`}</span> */}
                                            <div className='mb-n5 mt-n4'>
                                                <span>{`${state.currentUser.firstname.toUpperCase()}`}</span><br />
                                                <small className='badge badge-primary px-3'>{roleName}</small>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="dropdown-menu  dropdown-menu-right ">
                                    <div className="dropdown-header noti-title">
                                        <h6 className="text-overflow m-0">Welcome!</h6>
                                    </div>

                                    <div className="dropdown-divider"></div>
                                    <Link to="#" className="dropdown-item" onClick={handleLogout}>
                                        <i className="ni ni-user-run"></i>
                                        <span>Logout</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
