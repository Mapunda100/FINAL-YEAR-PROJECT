import React, { useRef, useState } from 'react'
import axios from 'axios'
import { RegisterPersonContext } from '../../../../Context/RegisterPersonContext'

export default function SubRegisterParent({ handleClose, setPersonalInformations, personalInformations, parentToRegister, setRegisterNewParent }) {
    const { state, dispatch } = React.useContext(RegisterPersonContext)
    let setPersonDetails = personDetails => dispatch({ type: 'personDetails', payload: personDetails })

    const [loading, setLoading] = useState(false)
    const [doneRegistering, setDoneRegistering] = useState(false)


    const firstnameRef = useRef()
    const middlenameRef = useRef()
    const lastnameRef = useRef()
    const genderRef = useRef()
    const phonenumberRef = useRef()
    const countryRef = useRef()
    const regionRef = useRef()
    const districtRef = useRef()
    const wardRef = useRef()
    const streetRef = useRef()
    const dateofbirthRef = useRef()

    function saveParentInformations(e) {
        e.preventDefault();
        setLoading(true)

        const parentInfo = {
            firstname: firstnameRef.current.value,
            middlename: middlenameRef.current.value,
            lastname: lastnameRef.current.value,
            gender: genderRef.current.value,
            phonenumber: phonenumberRef.current.value,
            country: countryRef.current.value,
            region: regionRef.current.value,
            district: districtRef.current.value,
            ward: wardRef.current.value,
            street: streetRef.current.value,
            dateofbirth: dateofbirthRef.current.value,
        }

        axios.post(`http://localhost:8200/person/registerParent`, {
            personinfo: parentInfo
        }).then(res => {
            if (parentToRegister === 'FATHER') {
                // personalInformations.fatherid = res.data._id
                setPersonDetails(
                    {
                        ...state.personDetails,
                        fatherid: res.data._id,
                        fatherInfo: {
                            fname: res.data.firstname,
                            mname: res.data.middlename,
                            lname: res.data.lastname
                        }
                    });
            } else {
                setPersonDetails(
                    {
                        ...state.personDetails,
                        motherid: res.data._id,
                        motherInfo: {
                            fname: res.data.firstname,
                            mname: res.data.middlename,
                            lname: res.data.lastname
                        }
                    });
                // personalInformations.motherid = res.data._id
            }
            setLoading(false)
            setDoneRegistering(true)
            // setPersonalInformations(personalInformations)
            // handleClose()
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }

    function closeModal() {
        setDoneRegistering(false)
        handleClose()
    }

    return (
        <div className=''>
            <form className=''>
                <h3>Personal Information</h3>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputEmail">First Name:</label>
                        <input ref={firstnameRef} type="text" class="form-control" required />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword4">Middle Name:</label>
                        <input ref={middlenameRef} type="text" class="form-control" id="inputPassword4" required />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword4">Last Name:</label>
                        <input ref={lastnameRef} class="form-control" id="inputPassword4" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputEmail">Gender/Sex:</label>
                        <select ref={genderRef} class="custom-select" id="inputPassword4" >
                            <option className='form-control' value='male'>Male</option>
                            <option className='form-control' value='female'>Female</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword4">Phone Number:</label>
                        <input ref={phonenumberRef} type="text" class="form-control" id="inputPassword4" required />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword4">Date of birth:</label>
                        <input ref={dateofbirthRef} type="date" class="form-control" id="inputPassword4" />
                    </div>
                </div>

                <h3>PLACE OF RESIDENCE</h3>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputEmail">Country:</label>
                        <input ref={countryRef} type="text" class="form-control" required />
                    </div>
                    <div class="form-group col-md-4">
                        <label >Region:</label>
                        <input ref={regionRef} type="text" class="form-control" id="inputPassword4" required />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword4">District:</label>
                        <input ref={districtRef} class="form-control" id="inputPassword4" required />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputEmail">Ward:</label>
                        <input ref={wardRef} type="text" class="form-control" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword4">Village/Street:</label>
                        <input ref={streetRef} type="text" class="form-control" id="inputPassword4" />
                    </div>
                </div>
                {doneRegistering &&
                    <div className="alert alert-info">Parent successfully registered <button className='btn btn-neutral btn-sm' onClick={closeModal}>Finish Registration</button></div>
                }
                <div className="modal-footer">
                    <button className='btn btn-neutral'
                        onClick={() => {
                            setRegisterNewParent(false)
                            closeModal()
                        }}
                    >CANCEL</button>
                    <button className='btn btn-default' disabled={loading} onClick={saveParentInformations}> {loading && <span className='spinner-border spinner-border-sm'></span>} SUBMIT</button>
                </div>
            </form>
        </div>
    )
}
