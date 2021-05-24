import React, { useState } from 'react'
import BirthInformation from './BirthInformation'
import ParentInformation from './ParentInformation'
import PersonalInformation from './Personinfo'

export default function RegisterBirth() {
    const [formNumber, setFormNumber] = useState(1)
    const [personalInformations, setPersonalInformations] = useState({})


    return (
        <div>
            {formNumber === 1 &&
                <PersonalInformation setFormNumber={setFormNumber} setPersonalInformations={setPersonalInformations} />
            }
            {formNumber === 2 &&
                <ParentInformation setFormNumber={setFormNumber} personalInformations={personalInformations} setPersonalInformations={setPersonalInformations} />
            }

            {formNumber === 3 &&
                <BirthInformation personalInformations={personalInformations} setPersonalInformations={setPersonalInformations} />
            }
        </div>
    )
}
