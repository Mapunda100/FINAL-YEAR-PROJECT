import React, { useEffect, useState } from 'react'
import InfoCard from '../../components/Gadgets/InfoCard'
import { useHistory } from 'react-router';
import axios from 'axios';
import MaleVSFemale from './Graphs/maleVSFemale'
import YouthVSElders from './Graphs/YouthVSElders'
import DeathsVSBirths from './Graphs/DeathsVSBirths'

export default function Dashboard() {
    const hist = useHistory()
    const [userCounts, setUserCounts] = useState({ loading: true, data: { men: 0, female: 0, total: 0 } })

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
        fetchUserCounts()
    }, [])

    return (
        <>
            <div className="header pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5">
                            <InfoCard title='Total Men' text={userCounts.data.men} icon='delivery-fast' />
                            <InfoCard title='Total Women' text={userCounts.data.female} icon='delivery-fast' />
                            <InfoCard title='Total Registered Users' text={userCounts.data.total} icon='users-83' color='green' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--5">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            {/* <div className="card-header bg-default">
                                <div className="row align-items-cente">
                                    <div className="col">
                                        <h5 className="h3 text-white mb-0 text-truncate">Card header</h5>
                                    </div>
                                </div>
                            </div> */}
                            <div className="card-body">
                                <h3>CIVIL REGISTRATION AND VITAL STATISTIC SYSTEM (CVRS) Is the system that used in civil registration
                                    including registration of vital STATISTIC
                                </h3>

                                <h3>Registration in this system includes BIRTH REGISTRATION, DEATH REGISTRATION, AND MARRIAGE REGISTRATION</h3>


                                {/* card body edit here */}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">

                        </div>
                    </div>
                </div>
                {/* more cards */}
                <div className="row">
                    <div className="col-4">
                        <MaleVSFemale userCounts={userCounts} />
                    </div>
                    <div className="col-4">
                        <YouthVSElders userCounts={userCounts} />
                    </div>
                    <div className="col-4">
                        <DeathsVSBirths userCounts={userCounts} />
                    </div>
                </div>
            </div>
        </>
    )
}
