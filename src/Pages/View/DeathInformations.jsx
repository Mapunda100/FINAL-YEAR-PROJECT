import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DeathInformations({ userId }) {
    const [deathInfo, setDeathInfo] = useState({ loading: false, data: null })

    async function fetchDeathInfo() {
        setDeathInfo({ loading: true, data: null })
        await axios.get(`/death/${userId}`)
            .then(response => {
                console.log(response)
                setDeathInfo({ loading: false, data: response.data })
            }).catch(error => {
                console.log(error)
                setDeathInfo({ loading: false, data: null })
            })
    }

    useEffect(() => {
        fetchDeathInfo()
        return () => {
            setDeathInfo()
        }
    }, [])
    return (
        deathInfo.loading ?
            <>
                <span className="spinner-border spinner-border-sm"></span>
            </>
            :
            deathInfo.data ?
                <>
                    {/* <div className='btn btn-info' onClick={fetchDeathInfo}>chec</div> */}
                    <p><span className='font-weight-bold'>Date of Death:</span> {`${deathInfo.data.dateofdeath} `}</p>
                    <p><span className='font-weight-bold'>Cause of Death:</span> {`${deathInfo.data.causeofdeath} `}</p>
                    <p><span className='font-weight-bold'>Place of Death:</span> {`${deathInfo.data.placeofdeath} `}</p>
                    <p><span className='font-weight-bold'>Type of Death:</span> {`${deathInfo.data.typeofdeath} `}</p>
                    <p><span className='font-weight-bold'>Death Location of Death:</span>
                        &nbsp; {`${deathInfo.data.location.country} | ${deathInfo.data.location.region} | ${deathInfo.data.location.district} | ${deathInfo.data.location.ward} | ${deathInfo.data.location.street}`}
                    </p>
                    {/* <p><span className='font-weight-bold'>Reason of Death:</span> {`${deathInfo.data.groomId.firstname} `}</p> */}
                </>
                :
                <>
                    Not Dead
                    <div className='btn btn-info' onClick={fetchDeathInfo}>chec</div>

                </>
    )
}
