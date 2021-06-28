// import axios from 'axios'
import React, { useContext, useState } from 'react'
import { RegisterPersonContext } from '../../../Context/RegisterPersonContext'

export default function PersonalInformation({ setFormNumber, setPersonalInformations }) {
    const { state, dispatch } = useContext(RegisterPersonContext)
    let setPersonDetails = personDetails => dispatch({ type: 'personDetails', payload: personDetails })

    console.log(state)

    // const firstnameRef = useRef()
    // const middlenameRef = useRef()
    // const lastnameRef = useRef()
    // const genderRef = useRef()
    // const phonenumberRef = useRef()
    // const countryRef = useRef()
    // const regionRef = useRef()
    // const districtRef = useRef()
    // const wardRef = useRef()
    // const streetRef = useRef()

    const [fname, setFname] = useState(state.personDetails.firstname)
    const [mname, setMname] = useState(state.personDetails.middlename)
    const [lname, setLname] = useState(state.personDetails.lastname)
    const [gender, setGender] = useState(state.personDetails.gender)
    const [phonenumber, setPhoneNumber] = useState(state.personDetails.phonenumber)
    const [country, setCountry] = useState(state.personDetails.country)
    const [region, setRegion] = useState(state.personDetails.region)
    const [district, setDistrict] = useState(state.personDetails.district)
    const [ward, setWard] = useState(state.personDetails.ward)
    const [street, setStreet] = useState(state.personDetails.street)

    function sendpersoninfo(e) {
        e.preventDefault();

        const personinfo = {
            firstname: fname,
            middlename: mname,
            lastname: lname,
            gender: gender,
            phonenumber: phonenumber,
            country: country,
            region: region,
            district: district,
            ward: ward,
            street: street
        }
        console.log(personinfo)

        setPersonDetails(personinfo)
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
                                            <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Middle Name:</label>
                                            <input value={mname} onChange={(e) => setMname(e.target.value)} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Last Name:</label>
                                            <input value={lname} onChange={(e) => setLname(e.target.value)} class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Gender/Sex:</label>
                                            <select value={gender} onChange={(e) => setGender(e.target.value)} class="custom-select" id="inputPassword4" >
                                                <option className='form-control' value=''>Select gender</option>
                                                <option className='form-control' value='male'>Male</option>
                                                <option className='form-control' value='female'>Female</option>

                                            </select>
                                            {/* <input ref={genderRef} type="text" class="form-control" /> */}
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Phone Number:</label>
                                            <input value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                    </div>

                                    <h3 className='text-uppercase'>Residence</h3>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Country:</label>
                                            <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label >Region:</label>
                                            <input value={region} onChange={(e) => setRegion(e.target.value)} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">District:</label>
                                            <input value={district} onChange={(e) => setDistrict(e.target.value)} class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Ward:</label>
                                            <input value={ward} onChange={(e) => setWard(e.target.value)} type="text" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Village/Street:</label>
                                            <input value={street} onChange={(e) => setStreet(e.target.value)} type="text" class="form-control" id="inputPassword4" />
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
