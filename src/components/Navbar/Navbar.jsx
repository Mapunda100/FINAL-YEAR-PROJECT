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
            localStorage.removeItem('token')
            localStorage.removeItem('userDetails')
            setIsAuthenticated(false)

            // axios.post('/logout', { token: localStorage.getItem('token') })
            //     .then(res => {
            //         console.log(res)
            //         // localStorage.removeItem('token')
            //         // localStorage.removeItem('userDetails')
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
                            <li className="nav-item d-sm-none">
                                <Link className="nav-link" to="#" data-action="search-show" data-target="#navbar-search-main">
                                    <i className="ni ni-zoom-split-in"></i>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ni ni-bell-55"></i>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
                                    {/* <!-- Dropdown header --> */}
                                    <div className="px-3 py-3">
                                        <h6 className="text-sm text-muted m-0">You have <strong className="text-primary">13</strong> notifications.</h6>
                                    </div>
                                    {/* <!-- List group --> */}
                                    <div className="list-group list-group-flush">
                                        <Link to="#!" className="list-group-item list-group-item-action">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    {/* <!-- Avatar --> */}
                                                    <img alt="placeholder" src="assets/img/theme/team-1.jpg" className="avatar rounded-circle" />
                                                </div>
                                                <div className="col ml--2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 className="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div className="text-right text-muted">
                                                            <small>2 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="#!" className="list-group-item list-group-item-action">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    {/* <!-- Avatar --> */}
                                                    <img alt="placeholder" src="assets/img/theme/team-2.jpg" className="avatar rounded-circle" />
                                                </div>
                                                <div className="col ml--2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 className="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div className="text-right text-muted">
                                                            <small>3 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="#!" className="list-group-item list-group-item-action">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    {/* <!-- Avatar --> */}
                                                    <img alt="placeholder" src="assets/img/theme/team-3.jpg" className="avatar rounded-circle" />
                                                </div>
                                                <div className="col ml--2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 className="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div className="text-right text-muted">
                                                            <small>5 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm mb-0">Your posts have been liked Link lot.</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="#!" className="list-group-item list-group-item-action">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    {/* <!-- Avatar --> */}
                                                    <img alt="placeholder" src="assets/img/theme/team-4.jpg" className="avatar rounded-circle" />
                                                </div>
                                                <div className="col ml--2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 className="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div className="text-right text-muted">
                                                            <small>2 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="#!" className="list-group-item list-group-item-action">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    {/* <!-- Avatar --> */}
                                                    <img alt="placeholder" src="assets/img/theme/team-5.jpg" className="avatar rounded-circle" />
                                                </div>
                                                <div className="col ml--2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 className="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div className="text-right text-muted">
                                                            <small>3 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <!-- View all --> */}
                                    <Link to="#!" className="dropdown-item text-center text-primary font-weight-bold py-3">View all</Link>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
                            <li className="nav-item dropdown">
                                <Link className="nav-link pr-0" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img alt="placeholder" src="assets/img/theme/team-4.jpg" />
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
                                    <Link to="#!" className="dropdown-item">
                                        <i className="ni ni-single-02"></i>
                                        <span>My profile</span>
                                    </Link>
                                    <Link to="#!" className="dropdown-item">
                                        <i className="ni ni-settings-gear-65"></i>
                                        <span>Settings</span>
                                    </Link>
                                    <Link to="#!" className="dropdown-item">
                                        <i className="ni ni-calendar-grid-58"></i>
                                        <span>Activity</span>
                                    </Link>
                                    <Link to="#!" className="dropdown-item">
                                        <i className="ni ni-support-16"></i>
                                        <span>Support</span>
                                    </Link>
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
