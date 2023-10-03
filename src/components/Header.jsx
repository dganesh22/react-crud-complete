import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <header>
             <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                <div className="container">
                    <Link to={`/`} className="navbar-brand">CMS</Link>

                    <button className="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`/`} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/about`} className="nav-link">About</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`/login`} className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/register`} className="nav-link">Register</Link>
                            </li>
                        </ul>
                    </div> {/* collapse end */}

                </div> {/* container end */}
             </nav>
        </header>
    )
}

export default Header