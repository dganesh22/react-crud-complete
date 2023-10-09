import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header(props) {
    let loginStatus = localStorage.getItem("loginStatus") || false

    const logout = () => {
        if(window.confirm(`Are you sure to logout?`)) {
            toast.success("Logout successful")
            localStorage.removeItem('loginStatus')
            window.location.reload();
        } else {
            return null;
        }
    }


    return (
        <header>
             <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                <div className="container">
                    <Link to={`/`} className="navbar-brand">CMS</Link>

                    <button className="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={ loginStatus ? "collapse navbar-collapse justify-content-between" : "collapse navbar-collapse justify-content-end"} id="menu">
                        {
                            loginStatus ? (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={`/`} className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/about`} className="nav-link">About</Link>
                                    </li>
                                </ul>
                            ) : null 
                        }

                        {
                            loginStatus ? (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={`/`} onClick={logout} className="nav-link btn btn-danger">Logout</Link>
                                    </li>
                                </ul>
                            ): (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={`/login`} className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/register`} className="nav-link">Register</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </div> {/* collapse end */}

                </div> {/* container end */}
             </nav>
        </header>
    )
}

export default Header