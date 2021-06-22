import axios from 'axios'
import { Modal } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react'
import SubRegisterParent from './SubRegisterParent';
import { RegisterPersonContext } from '../../../Context/RegisterPersonContext';
import FoundParentDetails from './FoundParentDetails';
// import SubRegisterParent from './SubRegisterParent'

export default function ParentInformation({ setPersonalInformations, setFormNumber, personalInformations }) {
    const { state, dispatch } = React.useContext(RegisterPersonContext)
    let setPersonDetails = personDetails => dispatch({ type: 'personDetails', payload: personDetails })

    // console.log(state)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SEARCHED PARENTS MODAL CONTROLLERS
    const [showParentsModal, setShowParentsModal] = useState(false);
    const handleCloseParentsModal = () => setShowParentsModal(false);
    const handleShowParentsModal = () => setShowParentsModal(true);
    const [parentsList, setParentsList] = useState([])

    const [parentToRegister, setParentToRegister] = useState('')

    // const [motherExists, setMotherExists] = useState(true)
    // const [fatherExists, setFatherExists] = useState(true)

    const mfirstnameRef = useRef()
    const mmiddlenameRef = useRef()
    const mlastnameRef = useRef()


    const [fatherFname, setFatherFName] = useState(state.personDetails.fatherInfo && state.personDetails.fatherInfo.fname)
    const [fatherMname, setFatherMName] = useState(state.personDetails.fatherInfo && state.personDetails.fatherInfo.mname)
    const [fatherLname, setFatherLName] = useState(state.personDetails.fatherInfo && state.personDetails.fatherInfo.lname)

    const [motherFname, setMotherFName] = useState(state.personDetails.motherInfo && state.personDetails.motherInfo.fname)
    const [motherMname, setMotherMName] = useState(state.personDetails.motherInfo && state.personDetails.motherInfo.mname)
    const [motherLname, setMotherLName] = useState(state.personDetails.motherInfo && state.personDetails.motherInfo.lname)


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
        axios.get('http://localhost:8200/person/parent/father', { params: fatherinfo })
            .then(res => {
                console.log(res.data)
                setParentToRegister('FATHER')
                setParentsList(res.data)
                handleShowParentsModal()
            }).catch(error => {
                console.log(error)
            })
    }


    function fetchMother(e) {
        e.preventDefault()
        // const motherinfo = {
        //     firstname: mfirstnameRef.current.value,
        //     middlename: mmiddlenameRef.current.value,
        //     lastname: mlastnameRef.current.value
        // }
        const motherinfo = {
            firstname: motherFname,
            middlename: motherMname,
            lastname: motherLname
        }

        console.log(motherinfo)


        axios.get('http://localhost:8200/person/parent/mother', { params: motherinfo })
            .then(res => {
                console.log(res.data.data)
                console.log(res.data)
                setParentToRegister('MOTHER')
                setParentsList(res.data)
                handleShowParentsModal()

                // if (res.data.data) {
                //     personalInformations.motherid = res.data.data._id
                //     setPersonalInformations(personalInformations)
                // } else {
                //     setParentToRegister('MOTHER')
                //     handleShow()
                // }
            }).catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            {/* <div className="header bg-default pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5"></div>
                    </div>
                </div>
            </div> */}
            <div className="container-fluid mt-5">
                {/* <div className="row">
                    <div className="col"> */}
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
                                        <input
                                            // ref={mfirstnameRef}
                                            value={state.personDetails.motherInfo && state.personDetails.motherInfo.fname || motherFname}
                                            onChange={(e) => setMotherFName(e.target.value)}
                                            type="text"
                                            class="form-control" />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="inputPassword4">Middle Name:</label>
                                        <input
                                            // ref={mmiddlenameRef}
                                            value={state.personDetails.motherInfo && state.personDetails.motherInfo.mname || motherMname}
                                            onChange={(e) => setMotherMName(e.target.value)}
                                            type="text"
                                            class="form-control"
                                            id="inputPassword4" />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="inputPassword4">Last Name:</label>
                                        <input
                                            // ref={mlastnameRef}
                                            value={state.personDetails.motherInfo && state.personDetails.motherInfo.lname || motherLname}
                                            onChange={(e) => setMotherLName(e.target.value)}
                                            class="form-control"
                                            id="inputPassword4" />
                                    </div>
                                    <div className="form-group col-3  mt-4">
                                        {state.personDetails.motherid ?
                                            <button className='btn btn-success float-left form-control mt-2' type='submit' disabled > Find Mother <span className='ni ni-check-bold'></span></button>
                                            :
                                            <button className='btn btn-default float-left form-control mt-2' type='submit' > Find Mother</button>
                                        }
                                    </div>
                                </div>
                            </form>

                            <form onSubmit={fetchFather} className='' >
                                <h3>FATHER's INFOMATION</h3>
                                <div class="form-row">
                                    <div class="form-group col-md-3">
                                        <label for="inputEmail">First Name:</label>
                                        <input
                                            value={state.personDetails.fatherInfo && state.personDetails.fatherInfo.fname || fatherFname}
                                            onChange={(e) => setFatherFName(e.target.value)}
                                            name='name' type="text"
                                            class="form-control"
                                            required />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="inputPassword4">Middle Name:</label>
                                        <input
                                            value={state.personDetails.fatherInfo && state.personDetails.fatherInfo.mname || fatherMname}
                                            onChange={(e) => setFatherMName(e.target.value)}
                                            name='name' type="text"
                                            class="form-control"
                                            id="inputPassword4"
                                            required />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="inputPassword4">Last Name:</label>
                                        <input
                                            value={state.personDetails.fatherInfo && state.personDetails.fatherInfo.lname || fatherLname}
                                            onChange={(e) => setFatherLName(e.target.value)}
                                            class="form-control"
                                            id="inputPassword4"
                                            required />
                                    </div>
                                    <div className="form-group col-3  mt-4">
                                        {state.personDetails.fatherid ?
                                            <button className='btn btn-success float-left form-control mt-2' type='submit' disabled> Find Father <span className='ni ni-check-bold'></span></button>
                                            :
                                            <button className='btn btn-default float-left form-control mt-2' type='submit' > Find Father</button>
                                        }
                                    </div>
                                </div>
                            </form>

                            <FoundParentDetails show={showParentsModal} handleClose={handleCloseParentsModal} parents={parentsList} parentToRegister={parentToRegister} />

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
                                        parentToRegister={parentToRegister} />
                                </Modal.Body>
                            </Modal>
                            <div>
                                <button className='btn btn-neutral ' type='button' onClick={() => { setFormNumber(1) }}>
                                    Previous
                                </button>
                                {console.log(state.personDetails)}
                                <button className='btn btn-default float-right' type='button' disabled={!state.personDetails.fatherid || !state.personDetails.motherid} onClick={() => { setFormNumber(3) }}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //     </div>
        // </div>
    )
}
