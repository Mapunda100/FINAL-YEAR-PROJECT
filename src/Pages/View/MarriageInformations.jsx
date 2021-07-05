import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MarriageCertificate from './MarriageCertificate'

export default function MarriageInformations({ user }) {
    const [marriageInfo, setMarriageInfo] = useState({ loading: false, data: null })
    const [show, setShow] = useState(false)


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
        <div className="card">
            {/* <div className="card-header h3">Marriage Information</div> */}
            <div className="card-header h3 d-flex justify-content-between">
                <span>Marriage Information</span>
                {marriageInfo.data &&
                    <div>
                        <button className="btn-success btn btn-sm" onClick={() => setShow(true)}>Marriage Certificate</button>
                        <MarriageCertificate setShow={setShow} show={show} user={{ ...user, marriageInfo: marriageInfo.data }} />
                    </div>
                }
            </div>
            <div className="card-body">
                {
                    marriageInfo.loading ?
                        <>
                            <span className="spinner-border spinner-border-sm"></span>
                        </>
                        :
                        marriageInfo.data ?
                            <>
                                {console.log(marriageInfo.data)}
                                <p><span className='font-weight-bold'>BrideGroom Name:</span> {`${marriageInfo.data.groomId.firstname} ${marriageInfo.data.groomId.middlename} ${marriageInfo.data.groomId.lastname} `}</p>
                                <p><span className='font-weight-bold'>Bride Name:</span> {`${marriageInfo.data.brideId.firstname} ${marriageInfo.data.brideId.middlename} ${marriageInfo.data.brideId.lastname}`}</p>
                                <p><span className='font-weight-bold'>Date of Marriage:</span> {marriageInfo.data.dateofmarriage}</p>
                                <p><span className='font-weight-bold'>Date of Marriage:</span> {marriageInfo.data.placeofmarriage}</p>
                                <p><span className='font-weight-bold'>Location of Marriage:</span> {`${marriageInfo.data.location.country} | ${marriageInfo.data.location.region} | ${marriageInfo.data.location.district} | ${marriageInfo.data.location.ward}`}</p>
                            </>
                            :
                            <>
                                Not Married
                            </>
                }
            </div>
        </div>
    )
}
