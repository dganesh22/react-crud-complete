import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { regiserUser } from '../../data/user'

function Register(props) {
    const [user,setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    })

    const [err,setError] = useState(false)
    const [errmsg,setErrMsg] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    })

    const readValue = (event) => {
        // console.log('data =', event.target)
        const { name, value } = event.target
        // console.log('name =', name, ", value =", value);
        if(name === "name") {
            validateName(value)
        } else if (name === "email") {
            validateEmail(value)
        } else if (name === "mobile") {
            validateMobile(value)
        } else if (name === "password") {
            validatePassword(value)
        } else {
            setError(false)
        }
        setUser({ ...user, [name]:value })
    }


    const submitHandler = async (e) => {
        e.preventDefault();
            if(err) {
                toast.error('Check the errors')
            } else {
                console.log('data =', user)
                regiserUser(user)
            }
    }

    /* validation for name */
    const validateName = (name) => {
        if(name === "") {
            setError(true)
            setErrMsg({...errmsg, ['name']: "Name field should not be empty" })
        } else if(name.length <= 2) {
            setError(true)
            setErrMsg({...errmsg, ['name']: "Name length can't be less than 2 characters" })
        } else {
            let regex = /^[a-zA-Z\s]+$/;
            if(regex.test(name) === false) {
                setError(true)
                setErrMsg({...errmsg, ['name']: "Invalid Name format" })
            } else {
                setError(true)
                setErrMsg({...errmsg, ['name']: "" })
            }
        }
    }


    //validate email
    const validateEmail = (email) => {
        if(email === "") {
            setError(true)
            setErrMsg({...errmsg, ['email']: "Email field should not be empty" })
        } else {
            let regex = /^\S+@\S+\.\S+$/;
            if(regex.test(email) === false) {
                setError(true)
            setErrMsg({...errmsg, ['email']: "Invalid email format" })
            } else {
                setError(false)
            setErrMsg({...errmsg, ['email']: "" })
            }
        }
    }


    // validate mobile 
    const validateMobile = (mobile) => {
        if(mobile === "") {
            setError(true)
            setErrMsg({...errmsg, ['mobile']: "Mobile field should not be empty" })
        } else {
            let regex = /^[6-9]\d{9}$/;
            if(regex.test(mobile) === false) {
                setError(true)
                setErrMsg({...errmsg, ['mobile']: "Invalid mobile number (starts only from 6,7,8,9) & (10 digits)" })
            } else {
                setError(false)
                setErrMsg({...errmsg, ['mobile']: "" })
            }
        }
    }

    // validate password
    const validatePassword = (password) => {
        if(password === "") {
            setError(true)
            setErrMsg({...errmsg, ['password']: "Password field should not be empty" })
        } else {
            let regex = /^[a-zA-Z0-9\s]+$/;
            if(regex.test(password) === false) {
                setError(true)
                 setErrMsg({...errmsg, ['password']: "Invalid Password format(a-z A-Z 0-9)" })
            } else {
                setError(false)
                setErrMsg({...errmsg, ['password']: "" })
            }
        }
    }

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-secondary">Register</h3>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" value={user.name} onChange={readValue} id="name" className="form-control" required />
                                <div>
                                    {   
                                        err && errmsg.name ? <strong className="text-danger"> { errmsg.name } </strong> : null
                                    }
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" value={user.email} onChange={readValue} id="email" className="form-control" required />
                                <div>
                                    {   
                                        err && errmsg.email ? <strong className="text-danger"> { errmsg.email } </strong> : null
                                    }
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" name="mobile" value={user.mobile} onChange={readValue} id="mobile" className="form-control" required />
                                <div>
                                    {   
                                        err && errmsg.mobile ? <strong className="text-danger"> { errmsg.mobile } </strong> : null
                                    }
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={user.password} onChange={readValue} id="password" className="form-control" required />
                                <div>
                                    {   
                                        err && errmsg.password ? <strong className="text-danger"> { errmsg.password } </strong> : null
                                    }
                                </div>
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
