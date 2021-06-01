import axios from 'axios'
import { Modal } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react'
import SubRegisterParent from './SubRegisterParent';
// import SubRegisterParent from './SubRegisterParent'

export default function ParentInformation({ setPersonalInformations, setFormNumber, personalInformations }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [parentToRegister, setParentToRegister] = useState('')

    // const [motherExists, setMotherExists] = useState(true)
    // const [fatherExists, setFatherExists] = useState(true)

    // const firstnameRef = useRef()
    // const middlenameRef = useRef()
    // const lastnameRef = useRef()

    const mfirstnameRef = useRef()
    const mmiddlenameRef = useRef()
    const mlastnameRef = useRef()


    const [fatherFname, setFatherFName] = useState('')
    const [fatherMname, setFatherMName] = useState('')
    const [fatherLname, setFatherLName] = useState('')


    // const [motherFname, setMotherFName] = useState('')
    // const [motherMname, setMotherMName] = useState('')
    // const [motherLname, setMotherLName] = useState('')


    function fetchFather(e) {
        e.preventDefault()
        const fatherinfo = {
            firstname: fatherFname,
            middlename: fatherMname,
            lastname: fatherLname
        }

        console.log(fatherinfo)
        axios.post('http://localhost:8200/person/parent', fatherinfo)
            .then(res => {
                console.log(res.data.data)
                if (res.data.data) {
                    personalInformations.fatherid = res.data.data._id
                    setPersonalInformations(personalInformations)
                    setFormNumber(3)
                } else {
                    setParentToRegister('FATHER')
                    handleShow()
                }

            }).catch(error => {
                console.log(error)
            })
    }


    function fetchMother(e) {
        e.preventDefault()
        const motherinfo = {
            firstname: mfirstnameRef.current.value,
            middlename: mmiddlenameRef.current.value,
            lastname: mlastnameRef.current.value
        }


        axios.post('http://localhost:8200/person/parent', motherinfo)
            .then(res => {
                console.log(res.data.data)
                if (res.data.data) {
                    personalInformations.motherid = res.data.data._id
                    setPersonalInformations(personalInformations)
                } else {
                    setParentToRegister('MOTHER')
                    handleShow()
                }
            })
    }


    return (
        <div>
            <div className="header bg-default pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--5">
                <div className="row">
                    <div className="col-9">
                        <div className="card">
                            <div className="card-header bg-default">
                                <h2 className='text-white'>Register person's Parents information here</h2>
                            </div>
                            <div className="card-body">
                                <div className=''>
                                    <form className='' onSubmit={fetchMother}>
                                        <h3>MOTHER's INFORMATION</h3>
                                        <div class="form-row">
                                            <div class="form-group col-md-3">
                                                <label for="inputEmail"> First Name:</label>
                                                <input ref={mfirstnameRef} type="text" class="form-control" />
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="inputPassword4">Middle Name:</label>
                                                <input ref={mmiddlenameRef} type="text" class="form-control" id="inputPassword4" />
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="inputPassword4">Last Name:</label>
                                                <input ref={mlastnameRef} class="form-control" id="inputPassword4" />
                                            </div>
                                            <div className="form-group col-3  mt-4">
                                                <button className='btn btn-default float-left form-control mt-2' type='submit' > Find mother</button>
                                            </div>
                                        </div>
                                    </form>

                                    <form onSubmit={fetchFather} className='' >
                                        <h3>FATHER's INFOMATION</h3>
                                        <div class="form-row">
                                            <div class="form-group col-md-3">
                                                <label for="inputEmail">First Name:</label>
                                                <input value={fatherFname} onChange={(e) => setFatherFName(e.target.value)} name='name' type="text" class="form-control" required />
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="inputPassword4">Middle Name:</label>
                                                <input value={fatherMname} onChange={(e) => setFatherMName(e.target.value)} name='name' type="text" class="form-control" id="inputPassword4" required />
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="inputPassword4">Last Name:</label>
                                                <input value={fatherLname} onChange={(e) => setFatherLName(e.target.value)} class="form-control" id="inputPassword4" required />
                                            </div>
                                            <div className="form-group col-3  mt-4">
                                                <button className='btn btn-default float-left form-control mt-2' type='submit' > Find Father</button>
                                            </div>
                                        </div>
                                    </form>

                                    <Modal size='xl' show={show} onHide={handleClose} >
                                        <Modal.Header closeButton className='bg-default'>
                                            <Modal.Title className='text-white'>REGISTER {parentToRegister}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <SubRegisterParent
                                                handleClose={handleClose}
                                                setPersonalInformations={setPersonalInformations}
                                                personalInformations={personalInformations}
                                                setFatherFName={setFatherFName}
                                                setFatherMName={setFatherMName}
                                                setFatherLName={setFatherLName} 
                                                parentToRegister={parentToRegister}/>
                                        </Modal.Body>
                                    </Modal>

                                    <button className='btn btn-primary float-right' type='button' onClick={() => { setFormNumber(3) }}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
