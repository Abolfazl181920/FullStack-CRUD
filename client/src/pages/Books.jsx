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
            <h4> {book.title} </h4>
            <p className='book__desc'> {book.descr} </p>
            <span> {book.price}$ </span>
          </section>
        ))
      }
    </div>
  )
}

export default Books