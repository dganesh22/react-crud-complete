import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-secondary">Register</h3>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-lg-6 offset-md-3 col-md-8 offset-md-2 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off">
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" name="mobile" id="mobile" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="pass" id="pass" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="Register" className="btn btn-outline-success" />
                                <div className="float-end d-flex align-items-center">
                                    <strong className="text-success">Already registered?</strong>
                                     <Link to={`/login`} className="btn btn-link">Login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
