import React, { useState } from 'react'
import BirthInformation from './BirthInformation'
import ParentInformation from './ParentInformation'
import PersonalInformation from './Personinfo'
import { RegisterPersonContextProvider } from '../../../Context/RegisterPersonContext'

export default function RegisterBirth() {
    const [formNumber, setFormNumber] = useState(1)
    const [personalInformations, setPersonalInformations] = useState({})
    const [activeKey, setActiveKey] = useState('link-1')

    return (
        <RegisterPersonContextProvider>
            <div>
                {/* <div className="card">
                <div className="card-body">
                    <Nav fill variant="tabs" defaultActiveKey="/home" activeKe={activeKey}>
                        <Nav.Item>
                            <Nav.Link href="#home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </div>
            </div> */}
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
        </RegisterPersonContextProvider>
    )
}
