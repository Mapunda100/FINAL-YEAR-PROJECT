import axios from 'axios'
import React, { useState } from 'react'

export default function CreateUser() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ status: '', text: '' })

    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')

    function createUser(e) {
        e.preventDefault()
        setLoading(true)
        setMessage({ status: '', text: '' })

        axios.post('/register', { name: `${fname} ${lname}`, email, phone, role_id: role, password: lname.toUpperCase() })
            .then(response => {
                console.log(response)
                setMessage({ status: 'success', text: 'User created Successfully' })
            }).catch(error => {
                // console.log(error)
                console.log(error.response)
                if (error.message === 'Network Error') {
                    setMessage({ status: 'warning', text: error.message })
                }
                // setMessage({ status: 'warning', text: Array.from(error.response.data.errors).toString() })
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Register User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={createUser}>
                        <div class="modal-body">
                            <form>
                                <div class="form-group p-0 m-0">
                                    <label for="recipient-name" class="col-form-label p-0 m-0">Full Name:</label>
                                    <input type="text" class="form-control" value={fname} onChange={(e) => setFName(e.target.value)} required />
                                </div>
                                <div class="form-group p-0 m-0">
                                    <label for="recipient-name" class="col-form-label p-0 m-0">Full Name:</label>
                                    <input type="text" class="form-control" value={lname} onChange={(e) => setLName(e.target.value)} required />
                                </div>
                                <div class="form-group p-0 m-0">
                                    <label for="recipient-name" class="col-form-label p-0 m-0">Email:</label>
                                    <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div class="form-group p-0 m-0">
                                    <label for="recipient-name" class="col-form-label p-0 m-0">Phone:</label>
                                    <input type="number" class="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </div>
                                <div class="form-group p-0 m-0">
                                    <label for="recipient-name" class="col-form-label p-0 m-0">Role:</label>
                                    {/* <input type="text" class="form-control" value={role} onChange={(e) => setRole(e.target.value)} required /> */}
                                    <select class="custom-select" required onChange={(e) => setRole(e.target.value)}>
                                        <option >Select Role</option>
                                        <option value={1}>Requester</option>
                                        <option value={2}>Provider</option>
                                        <option value={3}>Admin</option>
                                    </select>
                                </div>
                                {message.text &&
                                    <div class={`alert alert-${message.status} mt-3`} role="alert">
                                        {message.text}
                                    </div>
                                }
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" disabled={loading} data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" disabled={loading}> {loading && <span className='spinner spinner-border spinner-border-sm'></span>} Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
