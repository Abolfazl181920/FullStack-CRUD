import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Books = () => {

  const [ booksList, setBooksList ] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/books`).then(res => {
      setBooksList(res.data)
    })
  }, [ booksList ])

  const deleteBook = (id) => {
    try {
      axios.delete(`http://localhost:3001/books/${id}`)
    } catch {
      console.error(`Failed to delete a book with this id: ${id}`)
    }
  }
  
  return (
    <div className='flex__container'>
      {
        booksList.map(book => (
          <section className='book__list' key={book.id}>
            <h3> {book.title} </h3>
            <p> {book.descr} </p>
            <span> {book.price}$ </span>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
            <button> <Link to={`/update/${book.id}`}>Update</Link> </button>
          </section>
        ))
      }
    </div>
  )
}

export default Books