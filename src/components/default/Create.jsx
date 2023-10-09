import React, { useState } from 'react'

function Create() {
  const [book,setBook] = useState({
    title: "",
    image: "",
    description: "",
    price: 0
  })


  return (
    <div className='container'>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Create New</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
              <form autoComplete="off">
                  <div className="form-group mt-2"></div>
                  <div className="form-group mt-2"></div>
                  <div className="form-group mt-2"></div>
                  <div className="form-group mt-2"></div>
                  <div className="form-group mt-2"></div>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Create
