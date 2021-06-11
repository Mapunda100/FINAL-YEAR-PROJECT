import React, { useEffect, useState } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';
import axios from 'axios';
import InfoCard from '../../components/Gadgets/InfoCard'






export default function View() {

    const [persons, setPersons] = useState({ loading: false, data: [] })

    const [userCounts, setUserCounts] = useState({ loading: false, data: { men: 0, female: 0, total: 0 } })

    async function fetchPersons() {
        setPersons({ loading: true, data: [] })
        await axios.get('/person').then(response => {
            console.log(response)
            setPersons({ loading: false, data: response.data })
        }).catch(error => {
            console.log(error)
            setPersons({ loading: false, data: [] })
        })
    }

    async function fetchMenOnly() {
        setPersons({ loading: true, data: [] })
        await axios.get('/person/withgender/male').then(response => {
            console.log(response)
            setPersons({ loading: false, data: response.data })
        }).catch(error => {
            console.log(error)
            setPersons({ loading: false, data: [] })
        })
    }

    async function fetchWomenOnly() {
        setPersons({ loading: true, data: [] })
        await axios.get('/person/withgender/female').then(response => {
            console.log(response)
            setPersons({ loading: false, data: response.data })
        }).catch(error => {
            console.log(error)
            setPersons({ loading: false, data: [] })
        })
    }

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
        fetchPersons()
        fetchUserCounts()
        return () => {
            setPersons()
        }
    }, [])


    return (
        <div>
            <div className="header bg-gradient-succes pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5">
                            <InfoCard title='Total Men' text={userCounts.data.men} icon='delivery-fast' />
                            <InfoCard title='Total Women' text={userCounts.data.female} icon='delivery-fast' />
                            <InfoCard title='Total Registered Users' text={userCounts.data.total} icon='users-83' color='green' anchor='inbox' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <MaterialTable
                                    components={{
                                        Toolbar: props => (
                                            <div className=''>
                                                <MTableToolbar {...props} />
                                                <div className="btn btn-default btn-sm ml-3" onClick={fetchMenOnly}>Get Men Only</div>
                                                <div className="btn btn-default btn-sm" onClick={fetchWomenOnly}>Get Women Only</div>
                                            </div>
                                        )
                                    }}
                                    title="Registered"
                                    columns={[
                                        { title: 'User Id', field: '_id' },
                                        { title: 'First Name', field: 'firstname' },
                                        { title: 'Middle Name', field: 'middlename' },
                                        { title: 'Last Name', field: 'lastname' },
                                        { title: 'Gender', field: 'gender' },
                                        { title: 'Date of Birth', field: 'birthInfo.dateofbirth' },
                                        {
                                            title: 'Profile', field: 'finishedRegistration',
                                            lookup: {
                                                'true': 'Completed',
                                                'false': 'Not Completed'
                                            }
                                        }
                                        // {
                                        //     title: 'Birth Place',
                                        //     field: 'birthCity',
                                        //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                                        // },
                                    ]}
                                    data={persons.data}
                                    options={{
                                        search: true
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

{/* <div className="container-fluid mt--5">
    <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Registered People</a>
                            <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Registered Deaths</a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                        </div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}

// export default View
