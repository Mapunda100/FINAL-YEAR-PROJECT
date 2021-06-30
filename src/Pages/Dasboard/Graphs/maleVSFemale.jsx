import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function MaleVSFemale({ userCounts }) {
    const [maleVSFemales, setMaleVSFemales] = useState({ loading: false, data: {} })
    const state = {
        series: [{
            name: 'Total Registered',
            data: [userCounts.data.men, userCounts.data.female]
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

    async function fetchMaleVSFemales() {
        await axios.get('person/malevsfemale')
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchMaleVSFemales()
        return () => {
            setMaleVSFemales()
        }
    }, [])
    return (
        <div className='card'>
            <h4 className="card-header">Male VS Females</h4>
            <div className="card-body">
                {userCounts.loading ?
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
