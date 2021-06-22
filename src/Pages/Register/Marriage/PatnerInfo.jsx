import React, { useContext, useRef } from 'react'
import { RegisterMarriageContext } from '../../../Context/RegisterMarriageContext'
import moment from 'moment'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function PatnerInfo() {
    const hist = useHistory()

    const { state } = useContext(RegisterMarriageContext)


    const brideReligionRef = useRef()
    const groomReligionRef = useRef()

    const placeofmarriageRef = useRef()
    const dateofmarriageRef = useRef()

    const countryRef = useRef()
    const regionRef = useRef()
    const districtRef = useRef()
    const wardRef = useRef()

    const brideJobRef = useRef()
    const groomJobRef = useRef()

    async function registerMarriage(e) {
        e.preventDefault()
        const groomDetails = { groomId: state.groomDetails._id, job: groomJobRef.current.value, religion: groomReligionRef.current.value }
        const brideDetails = { brideId: state.brideDetails._id, job: brideJobRef.current.value, religion: brideReligionRef.current.value }

        console.log(groomDetails)
        const marriageInfo = {
            location: {
                country: countryRef.current.value,
                region: regionRef.current.value,
                district: districtRef.current.value,
                ward: wardRef.current.value,
            },
            brideId: state.brideDetails._id,
            groomId: state.groomDetails._id,
            dateofmarriage: dateofmarriageRef.current.value,
            placeofmarriage: placeofmarriageRef.current.value
        }
        console.log(marriageInfo)
        await axios.post('/marriage/register', { marriageInfo, groomDetails, brideDetails })
            .then(response => {
                console.log(response)
                hist.replace('/register')
            }).catch(error => {
                console.log(error)
            })
        // console.log(brideDetails)

    }

    console.log(state)
    return (
        <form onSubmit={registerMarriage}>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Groom</div>
                        <div className="card-body">
                            {state.groomDetails.firstname ?
                                <>
                                    <p><span className='font-weight-bold'>Full Name:</span> {`${state.groomDetails.firstname} ${state.groomDetails.middlename} ${state.groomDetails.lastname}`}</p>
                                    {state.groomDetails.birthInfo &&
                                        <>
                                            <p><span className='font-weight-bold'>Birth Date:</span>{state.groomDetails.birthInfo.dateofbirth} </p>
                                            <p><span className='font-weight-bold'>Age:</span> {moment(Date.now()).diff(state.groomDetails.birthInfo.dateofbirth, 'years')}</p>
                                            <p><span className='font-weight-bold'>Father Name:</span> {`${state.groomDetails.fatherid.firstname} ${state.groomDetails.fatherid.middlename} ${state.groomDetails.fatherid.lastname}`}</p>
                                            <p><span className='font-weight-bold'>Mother Name:</span>  {`${state.groomDetails.motherid.firstname} ${state.groomDetails.motherid.middlename} ${state.groomDetails.motherid.lastname}`}</p>
                                            <p>
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                                                        <span className='font-weight-bold'>Job:</span>
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" placeholder='Enter Grooms current job' ref={groomJobRef} required />
                                                    </div>
                                                </div>
                                            </p>
                                            <p>
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                                                        <span className='font-weight-bold'>Religion:</span>
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" placeholder='Enter Grooms current job' ref={groomReligionRef} required />
                                                    </div>
                                                </div>
                                            </p>
                                        </>
                                    }
                                </>
                                :
                                <>

                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Bride</div>
                        <div className="card-body">
                            {state.brideDetails.firstname ?
                                <>
                                    <p><span className='font-weight-bold'>Full Name:</span> {`${state.brideDetails.firstname} ${state.brideDetails.middlename} ${state.brideDetails.lastname}`}</p>
                                    {state.brideDetails.birthInfo &&
                                        <>
                                            <p><span className='font-weight-bold'>Birth Date:</span>{state.brideDetails.birthInfo.dateofbirth} </p>
                                            <p><span className='font-weight-bold'>Age:</span> {moment(Date.now()).diff(state.brideDetails.birthInfo.dateofbirth, 'years')}</p>
                                            <p><span className='font-weight-bold'>Father Name:</span> {`${state.brideDetails.fatherid.firstname} ${state.brideDetails.fatherid.middlename} ${state.brideDetails.fatherid.lastname}`}</p>
                                            <p><span className='font-weight-bold'>Mother Name:</span>  {`${state.brideDetails.motherid.firstname} ${state.brideDetails.motherid.middlename} ${state.brideDetails.motherid.lastname}`}</p>
                                            <p>
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                                                        <span className='font-weight-bold'>Job:</span>
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" placeholder="Enter bride's current job" ref={brideJobRef} />
                                                    </div>
                                                </div>
                                            </p>
                                            <p>
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                                                        <span className='font-weight-bold'>Religion:</span>
                                                    </label>
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" placeholder="Enter bride's Religion" ref={brideReligionRef} />
                                                    </div>
                                                </div>
                                            </p>
                                        </>
                                    }
                                </>
                                :
                                <>

                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-9">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4>Location of Marriage</h4>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label>Country:</label>
                                    <input
                                        type='text'
                                        ref={countryRef}
                                        class="form-control"
                                        required />
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Region:</label>
                                    <input
                                        type='text'
                                        ref={regionRef}
                                        class="form-control"
                                        required />
                                </div>
                                <div class="form-group col-md-4">
                                    <label>District:</label>
                                    <input
                                        type='text'
                                        ref={districtRef}
                                        class="form-control"
                                        required />
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Ward:</label>
                                    <input
                                        type='text'
                                        ref={wardRef}
                                        class="form-control"
                                        required />
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Place of marriage:</label>
                                    <input
                                        type='text'
                                        ref={placeofmarriageRef}
                                        class="form-control"
                                        required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div class="form-group col-md-4">
                                    <label>Marriage Date:</label>
                                    <input
                                        type='date'
                                        ref={dateofmarriageRef}
                                        class="form-control"
                                        required />
                                </div>
                                <button className="btn btn-info btn-block" type='submit'>Confirm Marriage</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
