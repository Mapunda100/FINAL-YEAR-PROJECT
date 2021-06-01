import React from 'react'
import { Link } from 'react-router-dom'

export default function InfoCard({ title, text, icon, footerVal, footerText, progress, color, anchor }) {
    return (
        <>
            <React.Fragment>
                <div className="col-xl-3  col-md-6 col-lg-6 ">
                    <div className="card card-stats">
                        <Link to={anchor} className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">{title}</h5>
                                    <span className="h2 font-weight-bold mb-0">{text}</span>
                                </div>
                                <div className="col-auto">
                                    <div className={`icon icon-shape bg-gradient-${color || 'info'} text-white rounded-circle shadow`}>
                                        <i className={`ni ni-${icon}`}></i>
                                    </div>
                                </div>
                            </div>
                            {!progress ?
                                <p className="mt-3 mb-0 text-sm">
                                    <span className="text-success mr-2">
                                        {footerVal &&
                                            <>
                                                <i className="fa fa-arrow-up"></i> {footerVal}
                                            </>
                                        }

                                    </span>
                                    <span className="text-nowrap">{footerText}</span>
                                </p>
                                :
                                <p className="mt-3 mb-0 text-sm">
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ "width": "70%" }}></div>
                                    </div>
                                </p>
                            }
                        </Link>
                    </div>
                </div>

            </React.Fragment >
        </>
    )
}
