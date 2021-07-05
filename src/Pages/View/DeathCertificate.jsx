import React, { useState } from 'react'
import './style.css'
import moment from 'moment'

import { Modal } from 'react-bootstrap'
export default function DeathCertificate({ user, show, setShow }) {
    // const [show, setShow] = useState(false)

    console.log('user', user)

    return (
        <div>
            {/* <button className="btn btn-default btn-sm" onClick={() => setShow(true)}>Generate Death Certificate</button> */}
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="w90"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Death Certificate
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="table-wrap">
                        <table class="sideways mobile-optimised">
                            <thead>
                                <tr class="">
                                    <th>&nbsp;</th>
                                    <th className='text-sm'><span>Person ID:</span></th>
                                    <th className='text-sm'><span>Full name:</span></th>
                                    <th className='text-sm'><span>Nationality</span></th>
                                    <th className='text-sm'><span>Date of Birth</span></th>
                                    <th className='text-sm'><span>Date of Death</span></th>
                                    <th className='text-sm'><span>Cause of Death</span></th>
                                    <th className='text-sm'><span>Gender</span></th>
                                    <th className='text-sm'><span>Place of Death</span></th>

                                    {/*                                     
                                    <th className='text-sm'><span>Date of Birth</span></th>
                                    <th className='text-sm'><span>Sex</span></th>
                                    <th className='text-sm'><span>Father's Name</span></th>
                                    <th className='text-sm'><span>Father's Nationality</span></th>
                                    <th className='text-sm'><span>Mother's name</span></th>
                                    <th className='text-sm'><span>Mother's Nationality</span></th>
                                    <th className='text-sm'><span>Date of Registration</span></th> */}
                                    {/* <th className='text-sm'><span>Signature of Registering officer</span></th> */}
                                </tr>
                                <tr class="subhead">
                                    <th>&nbsp;</th>
                                    <th><span>{user._id}</span></th>
                                    {/* <th>
                                        <span>
                                            <p className='p-0 m-0'>{user.birthInfo.country}</p>
                                            <p className='p-0 m-0'>{user.birthInfo.region}</p>
                                            <p className='p-0 m-0'>Iringa Urban</p>
                                        </span>
                                    </th> */}
                                    <th><span>{`${user.firstname} ${user.middlename} ${user.lastname}`}</span></th>
                                    <th><span>Tanzanian</span></th>
                                    <th><span>{moment(user.birthInfo.dateofbirth).format('DD MMMM YYYY')}</span></th>
                                    <th><span>{moment(user.deathInfo.dateofdeath).format('DD MMMM YYYY')}</span></th>
                                    <th><span>{user.deathInfo.causeofdeath}</span></th>
                                    <th><span>{user.gender}</span></th>
                                    <th>
                                        <span>
                                            <p className='p-0 m-0'>{`${user.deathInfo.location.country}, ${user.deathInfo.location.region}`}</p>
                                            <p className='p-0 m-0'>{`${user.deathInfo.location.district}, ${user.deathInfo.location.street}`}</p>
                                        </span>
                                    </th>
                                </tr>
                            </thead>

                        </table>

                    </div>
                    <p className='text-center'>Certified under the births and death's registration ordinance (Cap.108 of the Laws) to be
                        a true copy of an entry in the registration of my custody of Births. </p>
                    <p className='text-center'>Dated this <u>{moment(user.deathInfo.createdAt).format('DD MMMM YYYY')}</u></p>
                </Modal.Body>
            </Modal>
        </div>
    )
}
