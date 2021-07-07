import React, { useEffect, useState } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';
import axios from 'axios';
import InfoCard from '../../components/Gadgets/InfoCard'
import SearchPerson from './searchPerson';
import { useHistory } from 'react-router';
import { Nav } from 'react-bootstrap'

export default function ViewDeaths() {
    const hist = useHistory()
    const [deaths, setDeaths] = useState({ loading: false, data: [] })

    // const [userCounts, setUserCounts] = useState({ loading: false, data: { men: 0, female: 0, total: 0 } })

    async function fetchDeaths() {
        setDeaths({ loading: true, data: [] })
        await axios.get('/death/all').then(response => {
            console.log(response)
            setDeaths({ loading: false, data: response.data })
        }).catch(error => {
            console.log(error)
            setDeaths({ loading: false, data: [] })
        })
    }

    useEffect(() => {
        fetchDeaths()
        return () => {
            setDeaths()
        }
    }, [])


    return (
        <div>
            <div className="header bg-gradient-succes pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5">
                            <InfoCard title='Deaths Registered' text={deaths.data.length} icon='delivery-fast' />
                            {/* <InfoCard title='Total Women' text={userCounts.data.female} icon='delivery-fast' /> */}
                            {/* <InfoCard title='Total Registered Users' text={userCounts.data.total} icon='users-83' color='green' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--5">
                {/* <SearchPerson /> */}
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body p-0">
                                <MaterialTable
                                    title="Registered"
                                    columns={[
                                        { title: 'User ID', field: 'personid._id' },
                                        { title: 'Full Name', field: 'personid', render: (data) => `${data.personid.firstname} ${data.personid.middlename} ${data.personid.lastname}` },
                                        { title: 'Gender', field: 'personid.gender' },
                                    ]}
                                    actions={[
                                        {
                                            icon: 'visibilityOutlined',
                                            iconProps: { color: 'primary' },
                                            tooltip: 'View Profile',
                                            onClick: (event, rowData) => hist.push(`/person/${rowData._id}`, rowData.personid)
                                        }
                                    ]}
                                    isLoading={deaths.loading}
                                    data={deaths.data}
                                    options={{
                                        search: true,
                                        actionsColumnIndex: -1
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
