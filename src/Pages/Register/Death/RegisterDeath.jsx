import React, { useRef, useState } from 'react'
import axios from 'axios'

export default function RegisterDeath({ deceasedInfos }) {
    console.log(deceasedInfos)
    const jobRef = useRef()
    const [job, setJob] = useState(deceasedInfos.job)
    const ageRef = useRef()
    const placeofdeathRef = useRef()
    const typeofdeathRef = useRef()
    const dateofdeathRef = useRef()
    const causeofdeathRef = useRef()
    const countryRef = useRef()
    const regionRef = useRef()
    const districtRef = useRef()
    const wardRef = useRef()
    const streetRef = useRef()

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ status: '', data: '' })



    function sendpersoninfo(e) {
        e.preventDefault();
        setLoading(true)
        setMessage({ data: '', status: '' })

        const personinfo = {
            job: jobRef.current.value,
            // age: ageRef.current.value,
            placeofdeath: placeofdeathRef.current.value,
            typeofdeath: typeofdeathRef.current.value,
            dateofdeath: dateofdeathRef.current.value,
            causeofdeath: causeofdeathRef.current.value,
            location: {
                country: countryRef.current.value,
                region: regionRef.current.value,
                district: districtRef.current.value,
                ward: wardRef.current.value,
                street: streetRef.current.value,
            },
            personid: deceasedInfos._id
        }
        // console.log(personinfo)
        axios.post('http://localhost:8200/death/register/', { personinfo })
            .then(data => {
                console.log(data)
                // setLoading(false)
                setMessage({ status: 'success', data: 'Death saved successfully' })
            })
            .catch(err => {
                console.log(err)
                // setLoading(false)
                console.log(err.response)
                setMessage({ status: 'danger', data: err.response.data })
            }).finally(() => {
                setLoading(false)
            })
    }
    return (
        <div>
            <div className=''>
                <form onSubmit={sendpersoninfo} className=''>
                    <h4 className='text-uppercase'>Personal Information</h4>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">First Name:</label>
                            <input value={deceasedInfos.firstname} type="text" className="form-control" disabled />
                        </div>

                        <div class="form-group col-md-4">
                            <label for="inputPassword4">Middle Name of Deceased:</label>
                            <input value={deceasedInfos.middlename} type="text" className="form-control" disabled />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">Last Name of Deceased:</label>
                            <input value={deceasedInfos.lastname} type="text" className="form-control" disabled />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">Job of Decease:</label>
                            <input ref={jobRef} value={job} type="text" class="form-control" id="inputPassword4" onChange={(e) => setJob(e.target.value)} />
                        </div>
                        {/* <div class="form-group col-md-4">
                            <label for="inputPassword4">Date of Death:</label>
                            <input ref={phonenumberRef} type="Date" class="form-control" id="inputPassword4" />
                        </div> */}
                        {/* <div class="form-group col-md-4">
                            <label for="inputPassword4">Age:</label>
                            <input ref={ageRef} type="text" class="form-control" id="inputPassword4" />
                        </div> */}
                    </div>
                    <h4 className='text-uppercase'>Death Information</h4>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">Place of Death:</label>
                            <select ref={placeofdeathRef} class="custom-select" id="inputPassword4" required >
                                <option className='form-control' value='hospital'>Hospital</option>
                                <option className='form-control' value='home'>Home</option>
                                <option className='form-control' value='elsewhere'>Elsewhere</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">Type of Death:</label>
                            <select ref={typeofdeathRef} class="custom-select" id="inputPassword4" required >
                                <option className='form-control' value='nature'>Nature</option>
                                <option className='form-control' value='not nature'>Not Nature</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">Date of Death:</label>
                            <input ref={dateofdeathRef} type="date" class="form-control" id="inputPassword4" required />
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputPassword4">Cause of Death:</label>
                            <textarea ref={causeofdeathRef} type="text" class="form-control" id="inputPassword4" required />
                        </div>
                    </div>

                    <h4 className=''>PLACE OF DEATH</h4>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputEmail"> Country:</label>
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


                    <button className=' float-left btn btn-default' type="submit">
                        {loading &&
                            <div className="spinner-border spinner-border-sm"></div>
                        }
                        &nbsp; Submit
                    </button>
                </form>
            </div>
            {message.status &&
                <div className={`alert alert-${message.status} mt-5`}>{message.data}</div>
            }
        </div>
    )
}
