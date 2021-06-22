import React from 'react'
import FindPatner from './FindPatner'
import { RegisterMarriageContextProvider } from '../../../Context/RegisterMarriageContext'
import PatnerInfo from './PatnerInfo'

export default function RegisterMarriage() {
    return (
        <RegisterMarriageContextProvider>
            <div className='container-fluid mt-5'>
                <FindPatner />
                <PatnerInfo />
            </div>
        </RegisterMarriageContextProvider>
    )
}


// {/* 
//    find the person
//    register marriage
//    daniel ernest marries agness williams
//    bride                    groom
//    search                    search
//    found                     found
//                 marry
// */}