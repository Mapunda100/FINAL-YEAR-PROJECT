import axios from 'axios'
import { Modal } from 'react-bootstrap';
import React, { useRef, useState } from 'react'
import SubRegisterParent from './SubRegisterParent';
// import SubRegisterParent from './SubRegisterParent'

export default function ParentInformation({ setPersonalInformations, setFormNumber, personalInformations }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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


    const [motherFname, setMotherFName] = useState('')
    const [motherMname, setMotherMName] = useState('')
    const [motherLname, setMotherLName] = useState('')


    function fetchFather(e) {
        e.preventDefault()
        const fatherinfo = {
            firstname: fatherFname,
            middlename: fatherMname,
            lastname: fatherLname
        }
        axios.post('http://localhost:3002/fatherinfo', {
            fatherinfo
        }).then(res => {
            console.log(res.data.data)
            if (res.data.data) {
                personalInformations.fatherid = res.data.data._id
                setPersonalInformations(personalInformations)
                setFormNumber(3)
            } else {
                console.log('Father does not exist')
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


        axios.post('http://localhost:3002/motherinfo', {
            motherinfo
        })
            .then(res => {
                console.log(res.data.data)
                if (res.data.data !== null) {
                    console.log('Mother exist in the system')
                } else {
                    console.log('Father does not exist')
                    handleShow()
                    // personalInformations.motherid = res.data.data._id
                    // setPersonalInformations(personalInformations)
                }

            })
    }


    return (
        <div>
            <h2 className='mt-4'>Register person's Parents information here</h2>
            <div className='jumbotron pt-1 mt-2 ml-2 mr-5 text-white bg-success'>
                <form className='pt-4 pl-5'>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputEmail">MOTHER INFORMATION::: First Name:</label>
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
                    </div>
                    <button className='btn btn-warning float-left' onClick={fetchMother} >Search</button>
                </form>

                <form onSubmit={fetchFather} className='pt-5 pl-5' >
                <label for="inputEmail">FATHER INFOMATION:</label>
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
                    </div>
                    <button className='btn btn-warning float-left' type='submit' >Find Father</button>
                </form>

                <Modal size='xl' show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading: Register parent information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SubRegisterParent
                            handleClose={handleClose}
                            setPersonalInformations={setPersonalInformations}
                            personalInformations={personalInformations}
                            setFatherFName={setFatherFName}
                            setFatherMName={setFatherMName}
                            setFatherLName={setFatherLName} />
                    </Modal.Body>
                </Modal>

                <button className='btn btn-primary float-right' type='button' onClick={() => { setFormNumber(3) }}>
                    Next
                </button>
                {/* </form> */}
            </div>
        </div>
    )
}
