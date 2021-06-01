import React from 'react'
import InfoCard from '../../components/Gadgets/InfoCard'
import { Line } from 'react-chartjs-2'
import { useHistory } from 'react-router';
export default function Dashboard() {
    const hist = useHistory()
    const requests = [
        { amount: 100000, currency: 'TSH', location: 'Ubungo | Dar Es Salaam | Tanzania', id: 0 },
        { amount: 200000, currency: 'TSH', location: 'Kimara | Dar Es Salaam | Tanzania', id: 1 },
        { amount: 300000, currency: 'TSH', location: 'Temboni | Dar Es Salaam | Tanzania', id: 2 },
        { amount: 100000, currency: 'TSH', location: 'Mikocheni | Dar Es Salaam | Tanzania', id: 3 },
        { amount: 100000, currency: 'TSH', location: 'Mikocheni | Dar Es Salaam | Tanzania', id: 3 },
        { amount: 100000, currency: 'TSH', location: 'Mikocheni | Dar Es Salaam | Tanzania', id: 3 },
        { amount: 100000, currency: 'TSH', location: 'Mikocheni | Dar Es Salaam | Tanzania', id: 3 },
        { amount: 100000, currency: 'TSH', location: 'Mikocheni | Dar Es Salaam | Tanzania', id: 3 },
        { amount: 50000, currency: 'TSH', location: 'Buguruni | Dar Es Salaam | Tanzania', id: 4 },
        { amount: 50000, currency: 'TSH', location: 'Buguruni | Dar Es Salaam | Tanzania', id: 4 },
    ]
    const invoices = [
        { amount: 100000, currency: 'TSH', issuer: 'Derick Mwami', id: 0 },
        { amount: 200000, currency: 'TSH', issuer: 'Denver Mroki', id: 1 },
        { amount: 300000, currency: 'TSH', issuer: 'Denver Mroki', id: 2 },
        { amount: 100000, currency: 'TSH', issuer: 'Denver Mroki', id: 3 },
        { amount: 100000, currency: 'TSH', issuer: 'Denver Mroki', id: 3 },
        { amount: 100000, currency: 'TSH', issuer: 'Denver Mroki', id: 3 },
        { amount: 100000, currency: 'TSH', issuer: 'Denver Mroki', id: 3 },
        { amount: 100000, currency: 'TSH', issuer: 'Denver Mroki', id: 3 },
    ]
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Requests',
                data: [12, 19, 3, 5, 2, 3, 7],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <>
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row pt-5">
                            <InfoCard title='Registered Uses' text='100' icon='email-83' color='green' anchor='inbox' />
                            <InfoCard title='Requests served' text='5' icon='delivery-fast' footerVal='3.48%' footerText='Since last month' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--5">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-header bg-default">
                                <div className="row align-items-cente">
                                    <div className="col">
                                        <h5 className="h3 text-white mb-0 text-truncate">Card header</h5>
                                    </div>
                                </div>
                            </div>
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
            </div>
        </>
    )
}
