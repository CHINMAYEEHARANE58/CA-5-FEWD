import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import axios from 'axios'
import './Mainpage.css'

const Home = () => {

    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://reactnd-books-api.udacity.com/books', 
                {headers: { 'Authorization': 'whatever-you-want' }})

                setBooks(result.data.books)
                setFilteredBooks(result.data.books)
                console.log(result.data.books)
            } 
            catch (error) {
                console.log("Status Code : ", error.response.status)
                console.log("Website not found")
            }
        }

        fetchData()
    }, [])

    const handleSearch = (searchTerm) => {
        const filtered = books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredBooks(filtered)
    }

  return (
    <>
        <div className='mainpage'>
            <Navbar onSearch={handleSearch}/>
            <div className="booksContainer">
                {filteredBooks.map((book, index) => (
                    <div key={index} className="book">
                        <img className="bookCover" src={book.imageLinks.smallThumbnail} alt={book.title}/>
                        <h2 className="title">{book.title}</h2>
                        <h3 className='ratings'>Ratings: {book.averageRating} Free</h3>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Home

