import React, { useState } from 'react'
import MaterialTable from 'material-table';
import { Modal } from 'react-bootstrap';
import { RegisterPersonContext } from '../../../Context/RegisterPersonContext';
import SubRegisterParent from './SubRegisterParent';

export default function FoundParentDetails({ show, handleClose, parents, parentToRegister }) {
    const { state, dispatch } = React.useContext(RegisterPersonContext)
    let setPersonDetails = personDetails => dispatch({ type: 'personDetails', payload: personDetails })

    const [registerNewParent, setRegisterNewParent] = useState(false)

    // console.log(parents)
    return (
        <Modal size='xl' backdrop="static" show={show} onHide={handleClose} >
            <Modal.Header closeButton className='bg-default'>
                <Modal.Title className='text-white'>REGISTER {parentToRegister} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {registerNewParent ?
                    <SubRegisterParent
                        handleClose={handleClose}
                        setRegisterNewParent={setRegisterNewParent}
                        // setPersonalInformations={setPersonalInformations}
                        // personalInformations={personalInformations}
                        // setFatherFName={setFatherFName}
                        // setFatherMName={setFatherMName}
                        // setFatherLName={setFatherLName}
                        parentToRegister={parentToRegister}
                    />
                    :
                    <>
                        <div className="toolbar d-flex justify-content-end">
                            <div className="btn btn-default mb-2" onClick={() => setRegisterNewParent(true)}>Register New</div>
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
                                        // console.log(rowData)
                                        console.log(parentToRegister)

                                        if (parentToRegister === 'FATHER') {
                                            // console.log({ ...state.personDetails, })
                                            setPersonDetails(
                                                {
                                                    ...state.personDetails,
                                                    fatherid: rowData._id,
                                                    fatherInfo: {
                                                        fname: rowData.firstname,
                                                        mname: rowData.middlename,
                                                        lname: rowData.lastname
                                                    }
                                                });
                                        } else {
                                            // console.log({ ...state.personDetails, })
                                            setPersonDetails(
                                                {
                                                    ...state.personDetails,
                                                    motherid: rowData._id,
                                                    motherInfo: {
                                                        fname: rowData.firstname,
                                                        mname: rowData.middlename,
                                                        lname: rowData.lastname
                                                    }
                                                });
                                        }
                                        handleClose()
                                    }
                                }
                            ]}
                            data={parents}
                            options={{
                                search: false,
                                actionsColumnIndex: -1,
                                paging: false,
                                toolbar: false
                            }}
                        />
                    </>
                }
            </Modal.Body>
        </Modal>
    )
}
