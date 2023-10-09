import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-secondary">Home</h3>
            </div>
        </div>

        <div className="row">
          <div className="col-md-12">
              <div className="table-responsive">
                  <table className="table table-bordered table-striped table-hovered text-center">
                      <thead>
                        <tr>
                          <th colSpan={5}>
                              <Link to={`/create`} className="btn btn-success float-end">Create New</Link>
                          </th>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                      </thead>
                  </table>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home
