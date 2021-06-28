import React, { useState } from 'react'
import './style.css'
import { Modal } from 'react-bootstrap'
export default function BirthCertificate() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="btn btn-default btn-sm" onClick={() => setShow(true)}>Generate Birth Certificate</button>
            <Modal
                size="xl"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="certificate-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Birth Certificate
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <table>
                        <th class="rotate">
                            <div>
                                <span>Column header 1</span>
                            </div>
                        </th>
                        <th class="rotate">
                            <div>
                                <span>Column header 1</span>
                            </div>
                        </th>
                        <tr>
                            <td class="rotate">
                                <div>
                                    <span>Column header 1</span>
                                </div>
                            </td>
                            <td class="rotate">
                                <div>
                                    <span>Column header 1</span>
                                </div>
                            </td>
                        </tr>
                    </table> */}
                    <div class="table-wrap">
                        <table class="sideways mobile-optimised">
                            <thead>
                                <tr class="">
                                    <th>&nbsp;</th>
                                    <th><span>Full name:</span></th>
                                    <th><span>Date of Birth</span></th>
                                    <th><span>Nationality</span></th>
                                    <th><span>Sex</span></th>
                                    <th><span>Father's Name</span></th>
                                    <th><span>Father's Nationality</span></th>
                                    <th><span>Mother's name</span></th>
                                    <th><span>Mother's Nationality</span></th>
                                    <th><span>Date of Registration</span></th>
                                    <th><span>Signature of Registering officer</span></th>
                                    {/* <th><span>Opera for Android</span></th>
                                    <th><span>Safari on IOS</span></th>
                                    <th><span>Samsung Internet</span></th> */}
                                </tr>
                                <tr class="subhead">
                                    <th>&nbsp;</th>
                                    <th><span>1990-04-04-0001</span></th>
                                    <th>
                                        <span>
                                            <p className='p-0 m-0'>Iringa Hospital</p>
                                            <p className='p-0 m-0'>Iringa Urban</p>
                                        </span>
                                    </th>
                                    <th><span>Michael</span></th>
                                    <th><span>Male</span></th>
                                    <th><span>Opera</span></th>
                                    <th><span>Safari</span></th>
                                    <th><span>Android Webview</span></th>
                                    <th><span>Chrome for Android</span></th>
                                    <th><span>Edge Mobile</span></th>
                                    <th><span>Firefox for Android</span></th>
                                    <th><span>Opera for Android</span></th>
                                    <th><span>Safari on IOS</span></th>
                                    <th><span>Samsung Internet</span></th>
                                </tr>
                            </thead>

                        </table>

                    </div>
                    <p>Certified under the births and death's registration ordinance (Cap.108 of the Laws) to be
                        a true copy of an entry in the registration of my custody of Births. </p>
                    <p className='text-center'>Dated this....................</p>
                    {/* <p class="other"><a target="_blank" href="https://codepen.io/paulobrien/pen/OrwXOp">See other similar versions</a></p>
                    <p class="other"><a target="_blank" href="https://codepen.io/paulobrien/pen/bOOVEJ">See other similar versions</a></p>
                    <p class="other"><a target="_blank" href="https://codepen.io/paulobrien/pen/xmmwOr">See other similar versions</a></p>
Run Pen


Resources */}
                </Modal.Body>
            </Modal>
        </div>
    )
}
