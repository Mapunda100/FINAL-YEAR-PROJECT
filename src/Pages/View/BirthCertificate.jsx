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
                                    <th><span>No. of Entry</span></th>
                                    <th><span>Where Born</span></th>
                                    <th><span>Name of nini</span></th>
                                    <th><span>Gender</span></th>
                                    <th><span>Fathers occupation</span></th>
                                    <th><span>Safari</span></th>
                                    <th><span>Android Webview</span></th>
                                    <th><span>Chrome for Android</span></th>
                                    <th><span>Edge Mobile</span></th>
                                    <th><span>Firefox for Android</span></th>
                                    <th><span>Opera for Android</span></th>
                                    <th><span>Safari on IOS</span></th>
                                    <th><span>Samsung Internet</span></th>
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
