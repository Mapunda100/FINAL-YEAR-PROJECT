import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function YoutVSElders() {
    const [youthVSElders, setYouthsVSElders] = useState({ loading: false, data: {} })

    const state = {
        series: [{
            name: 'Total Registered',
            data: [45, 55]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Male', 'Female'],
            },
            fill: {
                opacity: 0.8
            },
        },
    }

    async function fetchYouthsVSElders() {
        await axios.get('person/youthsvselders')
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchYouthsVSElders()
        return () => {
            setYouthsVSElders()
        }
    }, [])
    return (
        <div className='card'>
            <h4 className="card-header">Youths VS Elders</h4>
            <div className="card-body">
                {youthVSElders.loading ?
                    <div className='text-center'>
                        <span className='spinner-border spinner-border-sm'></span> Please wait...
                    </div>
                    :
                    <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
                }
            </div>
        </div>
    )
}
