import React from 'react'
import { Link } from 'react-router-dom'
import InfoCard from '../../components/Gadgets/InfoCard'

export default function Register() {
    return (
        <>
            <div className="header bg-gradient-succes pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5">
                            <InfoCard title='Births Registered' text='100' icon='email-83' color='info' anchor='inbox' />
                            <InfoCard title='Deaths Registered' text='5' icon='delivery-fast' footerVal='3.48%' color='primary' footerText='Since last month' />
                            <InfoCard title='Marriage Registered' text='5' icon='delivery-fast' footerVal='3.48%' color='default' footerText='Since last month' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--5">
                <div className="row">
                    <div className="col-7">
                        <div className="card">
                            <div className="card-body">
                                <h4>Register Birth is the link where you can register all birth information of a person</h4>
                                <h4>Register Marriage is the link where you can register all Marriage information of a person</h4>
                                <h4>Register Death is the link where you can register all Death information information of a person</h4>
                                <div className='d-flex justify-content-around'>
                                    <Link to='/register/birth'><button className='btn btn-info'>Register Birth</button></Link>
                                    <Link to='/register/marriage'><button className='btn btn-primary'>Register Marriage</button></Link>
                                    <Link to='/register/death'><button className='btn btn-default'>Register Death</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
