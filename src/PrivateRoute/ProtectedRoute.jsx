import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute(props) {

        let loginStatus = localStorage.getItem("loginStatus") || false

    return (
        <React.Fragment>
                {
                    loginStatus ? <Outlet/> : <Navigate to={`/login`} />
                }
        </React.Fragment>
    )
}

export default ProtectedRoute