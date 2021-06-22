import React, { useContext, useRef, useState } from 'react'
import FoundPeople from './FoundPeople'
import axios from 'axios'
// import { RegisterMarriageContext } from '../../../Context/RegisterMarriageContext'

export default function SearchPatners() {
    const brideFNameRef = useRef(null)
    const brideMNameRef = useRef(null)
    const brideLNameRef = useRef(null)

    const groomFNameRef = useRef(null)
    const groomMNameRef = useRef(null)
    const groomLNameRef = useRef(null)

    const [brideSearchLoading, setBrideSearchLoading] = useState(false)
    const [groomSearchLoading, setGroomSearchLoading] = useState(false)

    const [foundPeople, setFoundPeople] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [coupleType, setCoupleType] = useState('')

    // const { state, dispatch } = useContext(RegisterMarriageContext)
    // let setBrideDetails = brideDetails => dispatch({ type: 'brideDetails', payload: brideDetails })
    // let setGroomDetails = bridegroomDetails => dispatch({ type: 'brideDetails', payload: bridegroomDetails })

    async function fetchBride(e) {
        e.preventDefault()
        setBrideSearchLoading(true)
        await axios.get(`/person/search/soft`, {
            params: {
                firstname: brideFNameRef.current.value,
                middlename: brideMNameRef.current.value,
                lastname: brideLNameRef.current.value,
            }
        }).then(response => {
            setCoupleType('BRIDE')
            console.log(response.data)
            setFoundPeople(response.data)
            handleShow(true)
            setBrideSearchLoading(false)
        }).catch(error => {
            console.log(error)
            console.log(error.response)
            setBrideSearchLoading(false)
        })
    }

    async function fetchGroom(e) {
        e.preventDefault()
        setGroomSearchLoading(true)
        await axios.get(`/person/search/soft`, {
            params: {
                firstname: groomFNameRef.current.value,
                middlename: groomMNameRef.current.value,
                lastname: groomLNameRef.current.value,
            }
        }).then(response => {
            setCoupleType('GROOM')
            console.log(response.data)
            setFoundPeople(response.data)
            handleShow(true)
            setGroomSearchLoading(false)
        }).catch(error => {
            console.log(error)
            console.log(error.response)
            setGroomSearchLoading(false)
        })
    }
    return (
        <div className="row">
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <form className='' onSubmit={fetchGroom}>
                            <h3>GROOM'S INFORMATION (MAN)</h3>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="inputEmail"> First Name:</label>
                                    <input
                                        ref={groomFNameRef}
                                        // onChange={(e) => setMotherFName(e.target.value)}
                                        type="text"
                                        class="form-control"
                                        required />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputPassword4">Middle Name:</label>
                                    <input
                                        ref={groomMNameRef}
                                        // onChange={(e) => setMotherMName(e.target.value)}
                                        type="text"
                                        class="form-control"
                                        id="inputPassword4"
                                        required />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputPassword4">Last Name:</label>
                                    <input
                                        ref={groomLNameRef}
                                        // onChange={(e) => setMotherLName(e.target.value)}
                                        class="form-control"
                                        id="inputPassword4"
                                        required />
                                </div>
                                <button className='btn btn-default float-left form-control mt-2' type='submit' disabled={groomSearchLoading}> {groomSearchLoading && <span className="spinner-border spinner-border-sm"></span>} Find Groom</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center my-2"><i className="ni ni-bold-down"></i></div>
            </div>
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <form className='' onSubmit={fetchBride}>
                            <h3>BRIDE'S INFORMATION (WOMAN)</h3>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="inputEmail"> First Name:</label>
                                    <input
                                        ref={brideFNameRef}
                                        // onChange={(e) => setMotherFName(e.target.value)}
                                        type="text"
                                        class="form-control"
                                        required />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputPassword4">Middle Name:</label>
                                    <input
                                        ref={brideMNameRef}
                                        // onChange={(e) => setMotherMName(e.target.value)}
                                        type="text"
                                        class="form-control"
                                        id="inputPassword4"
                                        required />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputPassword4">Last Name:</label>
                                    <input
                                        ref={brideLNameRef}
                                        // onChange={(e) => setMotherLName(e.target.value)}
                                        class="form-control"
                                        id="inputPassword4"
                                        required />
                                </div>
                                <button className='btn btn-default float-left form-control mt-2' type='submit' disabled={brideSearchLoading}> {brideSearchLoading && <span className="spinner-border spinner-border-sm"></span>} Find Bride</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center my-2"><i className="ni ni-bold-down"></i></div>
                <FoundPeople show={show} handleClose={handleClose} foundPeople={foundPeople} coupleType={coupleType} />
            </div>
        </div>
    )
}


// {/* 
//    find the person
//    register marriage
//    daniel ernest marries agness williams
//    bride                    groom
//    search                    search
//    found                     found
//                 marry
// */}