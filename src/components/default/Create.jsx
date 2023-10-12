import React, { useState } from 'react'
import { addBook } from '../../data/book'

function Create() {
  const [book,setBook] = useState({
    title: "",
    image: "",
    description: "",
    price: 0
  })

  const readValue = (e) => {
      const { name, value } = e.target
      setBook({ ...book, [name]:value })
  }

  const getRandom = () => {
      return Math.floor(Math.random() * 10000)
  }

  const submitHandler = async (e) => {
      e.preventDefault();
      let data = {
          id : getRandom(),
          ...book
      };
      console.log('book =', data)
      addBook(data)
  }


  return (
    <div className='container'>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Create New</h3>
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
                          <input type="submit" value="Create" className="btn btn-outline-success" />
                      </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Create
