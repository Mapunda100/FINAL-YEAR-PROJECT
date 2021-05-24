import React, { useRef } from 'react'
import axios from 'axios'

export default function SubRegisterParent({ handleClose, setPersonalInformations, personalInformations, setFatherFName, setFatherMName, setFatherLName }) {
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
    const dobRef = useRef()
    const dateofbirthRef= useRef()

    function saveParentInformations(e) {
        e.preventDefault();

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
            dateofbirth:dateofbirthRef.current.value,
        }
        // // console.log(personinfo)

        axios.post('http://localhost:3002/registerParent', {
            personinfo: parentInfo
        }).then(res => {
            console.log(res.data)
            setFatherFName(res.data.firstname)
            setFatherMName(res.data.middletname)
            setFatherLName(res.data.lastname)
            personalInformations.fatherid = res.data._id
            setPersonalInformations(personalInformations)
            handleClose()

        }).catch(err => {
            console.log(err)
        })
    }


    return (

        <div className='jumbotron pt-1 mt-2 text-white bg-success'>
            <form className='pt-4 pl-5'>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="inputEmail">First Name:</label>
                        <input ref={firstnameRef} type="text" class="form-control" required />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">Middle Name:</label>
                        <input ref={middlenameRef} type="text" class="form-control" id="inputPassword4" required />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">Last Name:</label>
                        <input ref={lastnameRef} class="form-control" id="inputPassword4" required />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="inputEmail">Gender/Sex:</label>
                        <input ref={genderRef} type="text" class="form-control" required />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">Phone Number:</label>
                        <input ref={phonenumberRef} type="text" class="form-control" id="inputPassword4" required />
                    </div>


                    <div class="form-group col-md-3">
                            <label for="inputPassword4">Date of birth:</label>
                            <input ref={dateofbirthRef} type="date" class="form-control" id="inputPassword4" />
                        </div>

                </div>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="inputEmail">PLACE OF RESIDENCE::: Country:</label>
                        <input ref={countryRef} type="text" class="form-control" required />
                    </div>
                    <div class="form-group col-md-3">
                        <label >Region:</label>
                        <input ref={regionRef} type="text" class="form-control" id="inputPassword4" required />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">District:</label>
                        <input ref={districtRef} class="form-control" id="inputPassword4" required />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="inputEmail">Ward:</label>
                        <input ref={wardRef} type="text" class="form-control" />
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputPassword4">Village/Street:</label>
                        <input ref={streetRef} type="text" class="form-control" id="inputPassword4" />
                    </div>
                </div>

                <button className=' float-left btn btn-danger' onClick={saveParentInformations}>SUBMIT</button>
            </form>
        </div>
    )
}
