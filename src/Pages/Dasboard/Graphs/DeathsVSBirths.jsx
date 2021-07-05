import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function DeathsVSBirths() {
    const [youthVSElders, setYouthsVSElders] = useState({ loading: false, data: {} })

    const state = {
        series: Object.values(youthVSElders.data),
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: Object.keys(youthVSElders.data),
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    }

    async function fetchYouthsVSElders() {
        setYouthsVSElders({ loading: true, data: {} })
        await axios.get('person/birthsvsdeaths')
            .then(response => {
                console.log(response)
                setYouthsVSElders({ loading: false, data: response.data })
            }).catch(error => {
                console.log(error)
                setYouthsVSElders({ loading: false, data: {} })
            })
    }

    useEffect(() => {
        fetchYouthsVSElders()
        return () => {
            // setYouthsVSElders()
        }
    }, [])
    return (
        <div className='card'>
            {/* <button className="btn btn-block" onClick={fetchYouthsVSElders}>Refresh</button> */}
            <h4 className="card-header">Deaths VS Births</h4>
            <div className="card-body">
                {youthVSElders.loading ?
                    <div className='text-center'>
                        <span className='spinner-border spinner-border-sm'></span> Please wait...
                    </div>
                    :
                    <ReactApexChart options={state.options} series={state.series} type="pie" height={350} />
                }
            </div>
        </div>
    )
}
