import React from 'react'
import { NavLink } from 'react-router-dom'
// import menu, { misc as op } from './index'
import menu, { misc } from '../routes'
import logo from '../../assets/images/blue.png'
import { AuthContext } from '../../Context/AuthContext'

export default function Sidebar(props) {
    const { state } = React.useContext(AuthContext)

    return (
        <React.Fragment>
            <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
                <div className="scrollbar-inner">
                    <div className="sidenav-header  d-flex  align-items-center">
                        <NavLink className="navbar-brand" to="/">
                            <img src={logo} className="navbar-brand-img" alt="..." />
                        </NavLink>
                        <div className=" ml-auto ">
                            {/* <!-- Sidenav toggler --> d-none*/}
                            <div className="sidenav-toggler d-xl-none active" data-action="sidenav-unpin" data-target="#sidenav-main">
                                <div className="sidenav-toggler-inner mr-2">
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-inner">
                        {/* <!-- Collapse --> */}
                        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                            <ul className="navbar-nav">
                                {menu.map((route, index) => {
                                    return (
                                        route.sidebar &&
                                        route.roles &&
                                        route.roles.includes(state.currentUser.role) &&
                                        <SidebarComp item={route} index={index} key={route.url} />
                                    )
                                })}
                            </ul>
                            {/* <!-- Divider --> */}
                            <hr className="my-3" />
                            {/* <!-- Heading --> */}
                            <h6 className="navbar-heading p-0 text-muted">
                                <span className="docs-normal">Miscalculaneous</span>
                            </h6>
                            {/* <!-- Navigation --> */}
                            <ul className="navbar-nav">
                                {misc.map((item, index) => {
                                    return (<SidebarComp item={item} key={index} />)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

const SidebarComp = ({ item }) => {
    return (
        <li className='nav-item'>
            <NavLink exact to={item.url} activeClassName='active' className='nav-link'>
                <i className={`ni ni-${item.icon} text-${item.color}`}></i>
                <span className="nav-link-text">{item.name}</span>
            </NavLink>
        </li>
    )
}