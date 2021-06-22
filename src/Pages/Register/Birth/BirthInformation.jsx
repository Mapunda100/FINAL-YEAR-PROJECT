import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { RegisterPersonContext } from '../../../Context/RegisterPersonContext';

export default function BirthInformation() {
    const hist = useHistory()
    const { state, dispatch } = React.useContext(RegisterPersonContext)
    let setPersonDetails = personDetails => dispatch({ type: 'personDetails', payload: personDetails })
    const [message, setMessage] = useState({ status: '', body: '' })

    const [loading, setLoading] = useState(false)

    // const personidRef = useRef()
    const dateofbirthRef = useRef()
    const typeofbirthRef = useRef()
    const placeofbirthRef = useRef()
    const countryRef = useRef()
    const regionRef = useRef()
    const districRef = useRef()
    const wardRef = useRef()
    const streetRef = useRef()

    function sendbirthinfo(e) {
        e.preventDefault();
        setLoading(true)
        setMessage({ status: '', body: '' })
        const birthinfo = {
            // personid: personidRef.current.value,
            dateofbirth: dateofbirthRef.current.value,
            typeofbirth: typeofbirthRef.current.value,
            placeofbirth: placeofbirthRef.current.value,
            country: countryRef.current.value,
            region: regionRef.current.value,
            distric: districRef.current.value,
            ward: wardRef.current.value,
            street: streetRef.current.value
        }

        // console.log(personalInformations)
        const payload = { personalInformations: state.personDetails, birthinfo }
        console.log(payload)
        axios.post('http://localhost:8200/person/register', payload)
            .then(data => {
                console.log(data)
                setLoading(false)
                setMessage({ status: 'success', body: 'User Successfully Created' })

                setTimeout(() => {
                    hist.push('/register/birth')
                }, 2000);
            })
            .catch(err => {
                setTimeout(() => {
                    hist.push('/register/birth')
                    console.log('object')
                }, 2000);
                setLoading(false)
                setMessage({ status: 'danger', body: err.message })
                console.log(err)
            })
    }

    return (
        <div className=''>
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
                            <div className="card-header bg-default text-white h3">Register person's Birth information here</div>
                            <div className="card-body">
                                <form onSubmit={sendbirthinfo} className=''>
                                    <h3 className='text-uppercase'>Birth Information</h3>
                                    <div class="form-row ">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Type of birth:</label>
                                            <select ref={typeofbirthRef} class="custom-select" id="inputPassword4" >
                                                <option className='form-control'>Mmoja</option>
                                                <option className='form-control'>wawili</option>
                                                <option className='form-control'>watatu</option>
                                            </select>
                                            {/* <input ref={typeofbirthRef} type="text" class="form-control" /> */}
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Date of birth:</label>
                                            <input ref={dateofbirthRef} type="date" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Place of Birth</label>
                                            <select ref={placeofbirthRef} class="custom-select" id="inputPassword4" >
                                                <option className='form-control'>Home</option>
                                                <option className='form-control'>Hospitali</option>
                                                <option className='form-control'>Sehemu nyingine</option>
                                            </select>
                                            {/* <input ref={placeofbirthRef} type="text" class="form-control" /> */}
                                        </div>
                                    </div>
                                    <h3 className='text-uppercase'>PLACE OF BIRTH</h3>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Country:</label>
                                            <input ref={countryRef} type="dropdown" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label >Region:</label>
                                            <input ref={regionRef} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">District:</label>
                                            <input ref={districRef} class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Ward:</label>
                                            <input ref={wardRef} type="text" class="form-control" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Village/street:</label>
                                            <input ref={streetRef} type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <button className='float-right btn btn-default' type="submit" disabled={loading}> {loading && <span className="spinner-border spinner-border-sm"></span>} SUBMIT</button>
                                </form>
                            </div>
                            {message.status &&
                                <div className={`alert alert-${message.status} m-2`}>
                                    {message.body}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
