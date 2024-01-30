// importing modules and components
import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import axios from 'axios'
import './Mainpage.css'

const Mainpage = () => {

    // State to manage the list of books and the filtered books
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])

    // Fetching book data from the API 
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

    // Function to handle book search based on searched value
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
                {/* Mapping filteredBooks to display each book */}
                {filteredBooks.map((book, index) => (
                    <div key={index} className="book">
                        <img className="bookCover" src={book.imageLinks.smallThumbnail} alt={book.title}/>
                        <h2 className="title">{book.title}</h2>
                        <h3 className='ratings'>Ratings: {book.averageRating} ⭐ Free</h3>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Mainpage

