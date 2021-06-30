import React, { useState } from 'react'
import moment from 'moment'
import MarriageInformations from './MarriageInformations'
import DeathInformations from './DeathInformations'
import BirthCertificate from './BirthCertificate'

export default function PersonProfile(props) {
    const [person] = useState(props.location.state)


    return (
        <div className="container-fluid mt-3">
            <div className="card">
                <div className="card-body d-flex">
                    {person.finishedRegistration &&
                        <BirthCertificate user={person} />
                    }
                    <button className="btn btn-danger btn-sm">Delete User</button>
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
                    <div className="card">
                        <div className="card-header h3">Marriage Information</div>
                        <div className="card-body">
                            <MarriageInformations user={person} />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-header h3">Death Information</div>
                        <div className="card-body">
                            <DeathInformations userId={person._id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
