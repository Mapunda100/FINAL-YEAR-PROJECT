import React, { useEffect, useState } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';
import axios from 'axios';
import InfoCard from '../../components/Gadgets/InfoCard'
import SearchPerson from './searchPerson';
import { useHistory } from 'react-router';
import { Nav } from 'react-bootstrap'
import moment from 'moment';

export default function ViewMarried() {
    const hist = useHistory()
    const [married, setMarried] = useState({ loading: false, data: [] })

    const [userCounts, setUserCounts] = useState({ loading: false, data: { men: 0, female: 0, total: 0 } })

    async function fetchMarried() {
        setMarried({ loading: true, data: [] })
        await axios.get('/marriage/all').then(response => {
            console.log(response)
            setMarried({ loading: false, data: response.data })
        }).catch(error => {
            console.log(error)
            setMarried({ loading: false, data: [] })
        })
    }

    // async function fetchMenOnly() {
    //     setMarried({ loading: true, data: [] })
    //     await axios.get('/person/withgender/male').then(response => {
    //         console.log(response)
    //         setMarried({ loading: false, data: response.data })
    //     }).catch(error => {
    //         console.log(error)
    //         setMarried({ loading: false, data: [] })
    //     })
    // }

    // async function fetchWomenOnly() {
    //     setMarried({ loading: true, data: [] })
    //     await axios.get('/person/withgender/female').then(response => {
    //         console.log(response)
    //         setMarried({ loading: false, data: response.data })
    //     }).catch(error => {
    //         console.log(error)
    //         setMarried({ loading: false, data: [] })
    //     })
    // }

    async function fetchUserCounts() {
        await axios.get('/person/countUsers')
            .then(response => {
                console.log(response.data)
                setUserCounts({ loading: false, data: response.data })
            }).catch(error => {
                console.log(error)
            })
    }



    useEffect(() => {
        fetchMarried()
        fetchUserCounts()
        return () => {
            setMarried()
        }
    }, [])


    return (
        <div>
            <div className="header bg-gradient-succes pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5">
                            <InfoCard title='Couples Registered' text={married.data.length} icon='delivery-fast' />
                            {/* <InfoCard title='Total Women' text={userCounts.data.female} icon='delivery-fast' /> */}
                            {/* <InfoCard title='Total Registered Users' text={userCounts.data.total} icon='users-83' color='green' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--5">
                {/* <SearchPerson /> */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <MaterialTable
                                    title="Registered"
                                    columns={[
                                        { title: 'Bride Name', field: 'brideId', render: (data) => `${data.brideId.firstname} ${data.brideId.middlename} ${data.brideId.lastname}` },
                                        { title: 'Groom Name', field: 'groomId', render: (data) => `${data.groomId.firstname} ${data.groomId.middlename} ${data.groomId.lastname}` },
                                        { title: 'Date of Marriage', field: 'dateofmarriage', render: (data) => moment(data).format('DD MMM YYYY') },
                                        { title: 'Bride Religion', field: 'brideId.region' },
                                        { title: 'Grooms Religion', field: 'groomId.region' },
                                    ]}
                                    // actions={[
                                    //     {
                                    //         icon: 'visibilityOutlined',
                                    //         iconProps: { color: 'primary' },
                                    //         tooltip: 'View Profile',
                                    //         onClick: (event, rowData) => hist.push(`/person/${rowData._id}`, rowData)
                                    //     }
                                    // ]}
                                    isLoading={married.loading}
                                    data={married.data}
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
