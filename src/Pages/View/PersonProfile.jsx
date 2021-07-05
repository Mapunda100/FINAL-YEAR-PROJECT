import React, { useState } from 'react'
import moment from 'moment'
import MarriageInformations from './MarriageInformations'
import DeathInformations from './DeathInformations'
import BirthCertificate from './BirthCertificate'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import ShowForRole from '../../components/ShowForRole'

export default function PersonProfile(props) {
    const hist = useHistory()
    const [person] = useState(props.location.state)

    function deleteuser(e) {
        e.preventDefault()

        axios.delete(`person/${person._id}`)
            .then(res => {
                console.log('User successfully deleted')
                hist.goBack()
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="container-fluid mt-3">
            <div className="card">
                <div className="card-body d-flex">
                    {person.finishedRegistration &&
                        <BirthCertificate user={person} />
                    }
                    <ShowForRole allowedRoles={['3', '2']} >
                        <button className="btn btn-danger btn-sm ml-2" onClick={deleteuser}>Delete User</button>
                    </ShowForRole>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header h3">Person Informations</div>
                        <div className="card-body">
                            <p><span className='font-weight-bold'>Full Name:</span> {`${person.firstname} ${person.middlename} ${person.lastname}`}</p>
                            <p><span className='font-weight-bold'>Person ID: </span> {person._id}</p>

                            {/* <p><span className='font-weight-bold'>First Name:</span> {person.firstname}</p>
                            <p><span className='font-weight-bold'>Middle Name:</span> {person.middlename}</p>
                            <p><span className='font-weight-bold'>Last Name:</span> {person.lastname}</p> */}

                            <p><span className='font-weight-bold'>Date of Birth:</span> {person.birthInfo.dateofbirth}</p>
                            <p><span className='font-weight-bold'>Age: </span> {moment(Date.now()).diff(person.birthInfo.dateofbirth, 'years')} Years</p>
                            <p><span className='font-weight-bold'>Job: </span> {person.job}</p>


                            <p><span className='font-weight-bold'>Gender: </span>{person.gender}</p>
                            <p><span className='font-weight-bold'>Phone Number: </span>{person.phonenumber}</p>
                            <p><span className='font-weight-bold'>Place of Residence: </span>{`${person.country} | ${person.region} | ${person.district} | ${person.ward} | ${person.street}`}</p>
                            <hr />

                            <p><span className='font-weight-bold'>Place of Birth: </span>{`${person.birthInfo.country} | ${person.birthInfo.region} | ${person.birthInfo.district} | ${person.birthInfo.ward} | ${person.birthInfo.street}`}</p>
                            <p><span className='font-weight-bold'>Type of Birth:</span> {person.birthInfo.typeofbirth}</p>

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <MarriageInformations user={person} />
                </div>
                <div className="col-4">
                    <DeathInformations user={person} userId={person._id} />
                </div>
            </div>
        </div>
    )
}
