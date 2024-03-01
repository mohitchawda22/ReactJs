import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
    return (
        <>
        <div>User:{uerid}</div>
        </>
    )
}

export default User

