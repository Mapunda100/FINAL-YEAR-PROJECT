import axios from 'axios'
import MaterialTable from 'material-table'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { Modal } from 'react-bootstrap'


export default function SearchPerson() {

    const [strictSearch, setStrictSearch] = useState(false)
    const [foundUsers, setFoundUsers] = useState({ loading: false, data: [] })

    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const hist = useHistory()

    const fnameRef = useRef()
    const mnameRef = useRef()
    const lnameRef = useRef()
    // const dobRef = useRef()

    async function searchUser(e) {
        e.preventDefault()
        setFoundUsers({ loading: true, data: [] })

        const mode = strictSearch ? 'strict' : 'soft'
        await axios.get(`/person/search/${mode}`, {
            params: {
                firstname: fnameRef.current.value,
                middlename: mnameRef.current.value,
                lastname: lnameRef.current.value,
                // dateofbirth: dobRef.current.value
            }
        }).then(response => {
            setFoundUsers({ loading: false, data: response.data })
        })
    }

    return (
        <div className="">
            <div className="btn btn-default mb-4" onClick={handleShow}>Search Registered Users</div>
            <Modal show={showModal} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <h5 class="modal-title" id="exampleModalLabel">Search Registered Person (MODE: {strictSearch ? 'STRICT SEARCH' : 'SOFT SEARCH'})</h5>
                </Modal.Header>
                <Modal.Body>
                    <div class="py-0">
                        <div className="heading d-flex justify-content-between">
                            <p>Enter Users Details</p>
                            <div className="choose-strict d-flex">
                                <p className='mt-n1'>Strict Search &nbsp;</p>
                                <input type="checkbox" checked={strictSearch} onChange={() => setStrictSearch(!strictSearch)} className='mt-1' name="" id="" />
                            </div>
                        </div>
                        {strictSearch &&
                            <div className="alert alert-default text-center py-2">
                                Strict search will search for "EXACT NAME MATCH". If you cant find the person you are looking for, try soft search
                            </div>
                        }
                        <form onSubmit={searchUser}>
                            <div className="form-row">
                                <div className="col-4">
                                    <input type="text" ref={fnameRef} className="form-control" placeholder='First Name' required />
                                </div>
                                <div className="col-4">
                                    <input type="text" ref={mnameRef} className="form-control" placeholder='Middle Name' required />
                                </div>
                                <div className="col-4">
                                    <input type="text" ref={lnameRef} className="form-control" placeholder='Last Name' required />
                                </div>
                            </div>
                            {/* <div className="form-row mt-2">
                                <div className="col-6">
                                    <input type="date" ref={dobRef} className="form-control" placeholder='Date of Birth' />
                                </div>
                            </div> */}
                            <Modal.Footer>
                                <button type="button" class="btn btn-secondary" onClick={handleClose}>Close</button>
                                <button type="submit" class="btn btn-primary" disabled={foundUsers.loading}>{foundUsers.loading && <span className='spinner-border spinner-border-sm'></span>} Search</button>
                            </Modal.Footer>
                        </form>
                        <div className="response">
                            {!foundUsers.loading && foundUsers.data.length === 0 ?
                                <></>
                                :
                                <MaterialTable
                                    isLoading={foundUsers.loading}
                                    title="Found People"
                                    columns={[
                                        { title: 'User Id', field: '_id' },
                                        {
                                            title: 'Full Name', field: 'firstname', render: (person) => `${person.firstname} ${person.middlename} ${person.lastname}`
                                        },
                                        // { title: 'First Name', field: 'firstname' },
                                        // { title: 'Middle Name', field: 'middlename' },
                                        // { title: 'Last Name', field: 'lastname' },
                                        { title: 'Gender', field: 'gender' },
                                    ]}
                                    actions={[
                                        {
                                            icon: 'visibilityOutlined',
                                            iconProps: { color: 'primary' },
                                            tooltip: 'View More',
                                            onClick: (event, rowData) => {
                                                handleClose()
                                                hist.push(`/person/${rowData._id}`, rowData)
                                            }
                                        }
                                    ]}
                                    data={foundUsers.data}
                                    options={{
                                        search: true,
                                        actionsColumnIndex: -1
                                    }}
                                />
                            }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
