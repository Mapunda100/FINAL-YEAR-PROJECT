import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='text-center' style={{ marginTop: '35vh', fontSize: 'xx-large', textDecoration: 'underline' }}>
            <p style={{ fontSize: 'xx-large', textDecoration: 'underline' }}>Error 404 | Not Found</p>
            <Link to='/' className="btn btn-info">Go Home</Link>
        </div>
    )
}
