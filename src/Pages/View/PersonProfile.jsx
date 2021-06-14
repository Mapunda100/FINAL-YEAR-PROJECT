import React, { useState } from 'react'

export default function PersonProfile(props) {
    const [person, setPerson] = useState(props.location.state)

    console.log(person)
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <p><span className='font-weight-bold'>Name:</span> {`${person.firstname} ${person.middlename} ${person.lastname}`}</p>
                            <p><span className='font-weight-bold'>Date of Birth:</span> {person.dateofbirth}</p>
                            <p><span className='font-weight-bold'>Phone Number</span>{person.phonenumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
