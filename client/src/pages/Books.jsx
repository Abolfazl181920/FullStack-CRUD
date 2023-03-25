import { useState, useEffect } from 'react'
import axios from 'axios'

const Books = () => {

  const [ booksList, setBooksList ] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/books`).then(res => {
      setBooksList(res.data)
    })
  }, [ booksList ])
  
  return (
    <div className='flex__container'>
      {
        booksList.map(book => (
          <section className='book__list' key={book.id}>
            <h3> {book.title} </h3>
            <p> {book.descr} </p>
            <span> {book.price}$ </span>
            <button>Delete Book</button>
          </section>
        ))
      }
    </div>
  )
}

export default Books