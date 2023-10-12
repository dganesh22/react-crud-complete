import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { readBooks, deleteBook } from '../../data/book'
import { toast } from 'react-toastify'

function Home() {
  const [books,setBooks] = useState([])

  useEffect(() => {
        let data = readBooks()
          setBooks(data)
  },[])

  const deleteHandler = (id) => {
      if(window.confirm(`Are you sure to delete book data = ${id} ?`)) {
          deleteBook(id)
      } else {
        toast.warning("Delete terminated")
      }
  }

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
                      <tbody>
                          {
                              books.length > 0 ? (
                                  <React.Fragment>
                                        {
                                            books && books.map((item,index) => {
                                              return (
                                                <tr className="text-center" key={index}>
                                                    <td> {item.title} </td>
                                                    <td> 
                                                        <img src={item.image ? item.image : ""} alt="" className="img-fluid rounded-circle" width={100} height={100} />
                                                      </td>
                                                    <td> { item.description } </td>
                                                    <td>  &#8377; { item.price } </td>
                                                    <td className='d-flex justify-content-evenly'>
                                                        <Link to={`/update/${item.id}`} className="btn btn-info">
                                                          <i className="bi bi-pencil"></i>
                                                        </Link>
                                                        <button onClick={() => deleteHandler(item.id)} className="btn btn-danger">
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                              )
                                            })
                                        }
                                  </React.Fragment>
                              ) : (
                                  <tr>
                                      <td colSpan={5}>
                                          <strong className="text-secondary">No books are available</strong>
                                      </td>
                                  </tr>
                              )
                          }
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home
