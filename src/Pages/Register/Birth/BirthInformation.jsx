import axios from 'axios'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function BirthInformation({ personalInformations }) {
    console.log(personalInformations)

    // const personidRef = useRef()
    const dateofbirthRef = useRef()
    const typeofbirthRef = useRef()
    const placeofbirthRef = useRef()
    const countryRef = useRef()
    const regionRef = useRef()
    const districRef = useRef()
    const wardRef = useRef()
    const streetRef = useRef()

    function sendbirthinfo(e) {
        e.preventDefault();
        const birthinfo = {
            // personid: personidRef.current.value,
            dateofbirth: dateofbirthRef.current.value,
            typeofbirth: typeofbirthRef.current.value,
            placeofbirth: placeofbirthRef.current.value,
            country: countryRef.current.value,
            region: regionRef.current.value,
            distric: districRef.current.value,
            ward: wardRef.current.value,
            street: streetRef.current.value
        }

        console.log(personalInformations)
        axios.post('http://localhost:3002/register', { personalInformations, birthinfo })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='ml-2 mr-3'>
            <h2 className='mt-4 text-center'>Register person's Birth information here</h2>
            <div className='jumbotron pt-1 mt-1 mr-5 text-white bg-success'>
                <form onSubmit={sendbirthinfo} className='pt-4 pl-5'>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputEmail">Date of birth:</label>
                            <input ref={dateofbirthRef} type="date" class="form-control" />
                        </div>
                    </div>

                    <div class="form-row ">

                        <div class="form-group col-md-3">
                            <label for="inputEmail">Type of birth:</label>
                            <input ref={typeofbirthRef} type="text" class="form-control" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputEmail">Place of Birth</label>
                            <input ref={placeofbirthRef} type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputEmail">PLACE OF RESIDENCE::: Country:</label>
                            <input ref={countryRef} type="dropdown" class="form-control" />
                        </div>
                        <div class="form-group col-md-3">
                            <label >Region:</label>
                            <input ref={regionRef} type="text" class="form-control" id="inputPassword4" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputPassword4">District:</label>
                            <input ref={districRef} class="form-control" id="inputPassword4" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputEmail">Ward:</label>
                            <input ref={wardRef} type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputEmail">Village/street:</label>
                            <input ref={streetRef} type="text" class="form-control" />
                        </div>
                    </div>

                    <button className=' float-right btn btn-danger ' type="submit" >SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
