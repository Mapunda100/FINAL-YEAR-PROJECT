import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MarriageInformations({ user }) {
    const [marriageInfo, setMarriageInfo] = useState({ loading: false, data: null })

    async function fetchMarriageInfo() {
        setMarriageInfo({ loading: true, data: null })
        await axios.get('/marriage', {
            params: {
                userId: user._id,
                coupleType: user.gender === 'male' ? 'groom' : 'bride'
            }
        })
            .then(response => {
                console.log(response)
                setMarriageInfo({ loading: false, data: response.data })
            }).catch(error => {
                console.log(error)
                setMarriageInfo({ loading: false, data: null })
            })
    }

    useEffect(() => {
        fetchMarriageInfo()
        return () => {
            setMarriageInfo()
        }
    }, [])

    return (
        marriageInfo.loading ?
            <>
                <span className="spinner-border spinner-border-sm"></span>
            </>
            :
            marriageInfo.data ?
                <>
                    {console.log(marriageInfo.data)}
                    <p><span className='font-weight-bold'>Groom Name:</span> {`${marriageInfo.data.groomId.firstname} `}</p>
                    <p><span className='font-weight-bold'>Bride Name:</span> {`${marriageInfo.data.brideId.firstname} ${marriageInfo.data.brideId.middlename} ${marriageInfo.data.brideId.lastname}`}</p>
                    <p><span className='font-weight-bold'>Bride Name:</span> {`${marriageInfo.data.brideId.firstname} ${marriageInfo.data.brideId.middlename} ${marriageInfo.data.brideId.lastname}`}</p>
                    <p><span className='font-weight-bold'>Date of Marriage:</span> {marriageInfo.data.dateofmarriage}</p>
                    <p><span className='font-weight-bold'>Date of Marriage:</span> {marriageInfo.data.placeofmarriage}</p>
                    <p><span className='font-weight-bold'>Location of Marriage:</span> {`${marriageInfo.data.location.country} | ${marriageInfo.data.location.region} | ${marriageInfo.data.location.district} | ${marriageInfo.data.location.ward}`}</p>
                </>
                :
                <>
                    Not Married
                </>
    )
}
