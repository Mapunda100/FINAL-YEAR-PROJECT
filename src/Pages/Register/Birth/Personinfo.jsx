import axios from 'axios'
import React, { useRef, useState } from 'react'

export default function PersonalInformation({ setFormNumber, setPersonalInformations }) {
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

    function sendpersoninfo(e) {
        e.preventDefault();

        const personinfo = {
            firstname: firstnameRef.current.value,
            middlename: middlenameRef.current.value,
            lastname: lastnameRef.current.value,
            gender: genderRef.current.value,
            phonenumber: phonenumberRef.current.value,
            country: countryRef.current.value,
            region: regionRef.current.value,
            district: districtRef.current.value,
            ward: wardRef.current.value,
            street: streetRef.current.value

        }
        setPersonalInformations(personinfo)
        //form number for shifting the form pages
        setFormNumber(2)
    }


    return (
        <div>
            <div className="container-fluid mt-5">

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-default">
                                <h2 className='text-center text-white '>Register person's information here</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={sendpersoninfo} className=''>
                                    <h3 className='text-uppercase'>Personal Informations</h3>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">First Name:</label>
                                            <input ref={firstnameRef} type="text" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Middle Name:</label>
                                            <input ref={middlenameRef} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Last Name:</label>
                                            <input ref={lastnameRef} class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Gender/Sex:</label>
                                            <input ref={genderRef} type="text" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Phone Number:</label>
                                            <input ref={phonenumberRef} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                    </div>

                                    <h3 className='text-uppercase'>Residence</h3>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Country:</label>
                                            <input ref={countryRef} type="text" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label >Region:</label>
                                            <input ref={regionRef} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">District:</label>
                                            <input ref={districtRef} class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Ward:</label>
                                            <input ref={wardRef} type="text" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Village/Street:</label>
                                            <input ref={streetRef} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                    </div>
                                    <button className='float-right btn btn-default px-5' type="submit">Next</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
