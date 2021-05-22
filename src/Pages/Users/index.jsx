import axios from 'axios'
import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router'
import ShowForPermission from '../../components/ShowForRole'
import CreateUser from './createUser'

export default function Users() {
    const [users, setUsers] = useState({ loading: true, data: [] })

    // const hist = useHistory()
    // const users = [
    //     { name: 'emily in paris', email: 'emily@gmail.com', phone: '0652112252', role_id: 1, location_id: '54' },
    //     { name: 'emily in paris', email: 'emily@gmail.com', phone: '0652112252', role_id: 2, location_id: '54' },
    //     { name: 'emily in paris', email: 'emily@gmail.com', phone: '0652112252', role_id: 3, location_id: '54' },
    //     { name: 'emily in paris', email: 'emily@gmail.com', phone: '0652112252', role_id: 1, location_id: '54' },
    //     { name: 'emily in paris', email: 'emily@gmail.com', phone: '0652112252', role_id: 2, location_id: '54' },
    // ]
    async function fetchUsers() {
        await axios.get('/list_of_all_users')
            .then(res => {
                console.log(res)
                setUsers({ loading: false, data: res.data })
            }).catch(error => {
                console.log(error.response)
                setUsers({ loading: false, data: [] })
            })
    }

    useEffect(() => {
        fetchUsers()

        return () => {
            setUsers([])
        }
    }, [])

    return (
        <div>
            <div className="header bg-default pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5">
                            {/* <InfoCard title='Inbox' text='No New Message' icon='email-83' color='red' anchor='inbox' /> */}
                            {/* <InfoCard title='Licence' text='70.68%' icon='key-25' footerVal='3.48%' footerText='Since last month' progress='70' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--5">
                <div className="row">
                    <div className="col-7">
                        <div className="card">
                            <div className="card-header bg-default">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="h3 text-white mb-0 text-truncate">Users</h5>
                                    </div>
                                    <ShowForPermission allowedRoles={[3]}>
                                        <button type="button" className="btn btn-primary btn-sm mr-3" data-toggle="modal" data-target="#staticBackdrop">
                                            Create New User
                                        </button>
                                        <CreateUser />
                                    </ShowForPermission>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <MaterialTable
                                    title="Registered Users"
                                    columns={[
                                        { title: 'Name', field: 'name' },
                                        { title: 'Email', field: 'email' },
                                        { title: 'Phone Number', field: 'phone', },
                                        {
                                            title: 'Role', field: 'role_id',
                                            lookup: {
                                                1: <div className='badge badge-primary'>Requester</div>,
                                                2: <div className='badge badge-primary'>Provider</div>,
                                                3: <div className='badge badge-primary'>Admin</div>,
                                            },
                                        },
                                    ]}

                                    data={users.data}
                                    isLoading={users.loading}
                                    options={{
                                        search: true,
                                        selection: true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
