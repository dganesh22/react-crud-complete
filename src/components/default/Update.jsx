import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { readSingle, updateBook } from '../../data/book'

function Update() {
  const [book,setBook] = useState({
    title: "",
    image: "",
    description: "",
    price: 0
  })

  // instance of useParams
  const params = useParams()

  useEffect(() => {
        // console.log('params =', params)
        let single = readSingle(Number(params.bookId))
          // console.log('single =', single)
          setBook(single)
  },[])

  const readValue = (e) => {
      const { name, value } = e.target
      setBook({ ...book, [name]:value })
  }


  const submitHandler = async (e) => {
      e.preventDefault();
      console.log('book =', book)
      updateBook(book)
  }


  return (
    <div className='container'>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Update</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-body">
                    <form autoComplete="off" onSubmit={submitHandler}>
                      <div className="form-group mt-2">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={book.title} onChange={readValue} className="form-control"  required/>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="image">Image</label>
                        <input type="url" name="image" id="image" value={book.image} onChange={readValue}  className="form-control"  required/>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="6" value={book.description} onChange={readValue} className="form-control" required></textarea>
                      </div>
                      <div className="form-group mt-2">
                          <label htmlFor="price">Price</label>
                          <input type="number" name="price" id="price" value={book.price} onChange={readValue} className="form-control" required />
                      </div>
                      <div className="form-group mt-2">
                          <input type="submit" value="Update" className="btn btn-outline-success" />
                      </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Update
