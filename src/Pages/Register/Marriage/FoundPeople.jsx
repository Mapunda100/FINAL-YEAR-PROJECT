import React, { useState, useContext } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';
import { Modal } from 'react-bootstrap';
import { RegisterMarriageContext } from '../../../Context/RegisterMarriageContext'
import { useHistory } from 'react-router-dom'

export default function FoundPeople({ show, handleClose, foundPeople, coupleType }) {
    // const { state, dispatch } = React.useContext(RegisterPersonContext)
    // let setPersonDetails = personDetails => dispatch({ type: 'personDetails', payload: personDetails })
    const hist = useHistory()

    const { state, dispatch } = useContext(RegisterMarriageContext)
    let setBrideDetails = brideDetails => dispatch({ type: 'brideDetails', payload: brideDetails })
    let setGroomDetails = groomDetails => dispatch({ type: 'groomDetails', payload: groomDetails })
    console.log(state)

    return (
        <Modal size='xl' backdrop="static" show={show} onHide={handleClose} >
            <Modal.Header closeButton className='bg-white border'>
                <Modal.Title className='text-whit'>FIND {coupleType} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="toolbar d-flex justify-content-end">
                    <div className="btn btn-default mb-2" onClick={() => hist.replace('/register/birth')}>Register New</div>
                </div>
                <MaterialTable
                    title={false}
                    columns={[
                        { title: 'User Id', field: '_id' },
                        {
                            title: 'Full Name', field: 'firstname', render: (person) => `${person.firstname} ${person.middlename} ${person.lastname}`
                        },
                        { title: 'Phone Number', field: 'phonenumber' },
                        { title: 'Gender', field: 'gender' },
                    ]}
                    actions={[
                        {
                            icon: 'done',
                            iconProps: { color: 'primary' },
                            tooltip: 'Confirm',
                            onClick: (event, rowData) => {
                                if (coupleType === 'GROOM') {
                                    setGroomDetails(rowData);
                                } else {
                                    setBrideDetails(rowData);
                                }
                                handleClose()
                            }
                        }
                    ]}
                    data={foundPeople}
                    options={{
                        search: false,
                        actionsColumnIndex: -1,
                        paging: false,
                        toolbar: false
                    }}
                />
            </Modal.Body>
        </Modal>
    )
}
