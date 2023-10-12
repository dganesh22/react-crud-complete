import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../../data/user'

function Login() {
    const [user,setUser] = useState({
        email: "",
        password: ""
    })

    const [err,setError] = useState(false)
    const [errmsg,setErrMsg] = useState({
        email: "",
        password: ""
    })

    const readValue = (event) => {
        // console.log('data =', event.target)
        const { name, value } = event.target
        // console.log('name =', name, ", value =", value);
         if (name === "email") {
            validateEmail(value)
        }else if (name === "password") {
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
                loginUser(user)
            }
    }

    
    //validate email
    const validateEmail = (email) => {
        if(email === "") {
            setErrMsg({...errmsg, ['email']: "Email field should not be empty" })
            setError(true)
        } else {
            let regex = /^\S+@\S+\.\S+$/;
            if(regex.test(email) === false) {
            setErrMsg({...errmsg, ['email']: "Invalid email format" })
            setError(true)
            } else {
            setErrMsg({...errmsg, ['email']: "" })
            setError(false)
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
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-secondary">Login</h3>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={submitHandler}>

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
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={user.password} onChange={readValue} id="password" className="form-control" required />
                                <div>
                                    {   
                                        err && errmsg.password ? <strong className="text-danger"> { errmsg.password } </strong> : null
                                    }
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="Login" className="btn btn-outline-success" />
                                <div className="float-end d-flex align-items-center">
                                    <strong className="text-success">Are You New User?</strong>
                                     <Link to={`/register`} className="btn btn-link">Register</Link>
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

export default Login
