import axios from 'axios'
import React, { useRef, useState } from 'react'
import RegisterDeath from './RegisterDeath'

export default function Death() {
    const deceasedFName = useRef()
    const deceasedMName = useRef()
    const deceasedLName = useRef()

    const [deceasedInfos, setDeceasedInfos] = useState()

    async function getDeceasedInfo(e) {
        e.preventDefault()
        console.log('form submitting')
        const userInfo = {
            firstname: deceasedFName.current.value,
            middlename: deceasedMName.current.value,
            lastname: deceasedLName.current.value,
        }

        await axios.get('person/findByNames', { params: userInfo })
            .then(res => {
                console.log(res)
                setDeceasedInfos(res.data[0])
            })
            .catch(error => {
                console.log(error.response)
            })
    }


    return (
        <>
            <div className="header bg-default pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5">
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--5">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header bg-default">
                                <div className="row align-items-cente">
                                    <div className="col">
                                        <h5 className="h3 text-white mb-0 text-truncate">Find Deceased Information</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={getDeceasedInfo} className=''>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">First Name:</label>
                                            <input ref={deceasedFName} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Middle Name of Deceased:</label>
                                            <input ref={deceasedMName} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Last Name of Deceased:</label>
                                            <input ref={deceasedLName} type="text" class="form-control" id="inputPassword4" />
                                        </div>
                                    </div>
                                    <button className="btn btn-info bgn-sm">Find</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {deceasedInfos &&
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header bg-default">
                                    <div className="row align-items-cente">
                                        <div className="col">
                                            <h5 className="h3 text-white mb-0 text-truncate">Register Death</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <RegisterDeath deceasedInfos={deceasedInfos} />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
