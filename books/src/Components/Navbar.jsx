// importing modules and components
import {useState} from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'

const Navbar = ({onSearch}) => {
    // State to manage the searched value
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <div className='navbar'>
                {/* linking all the pages */}
                <Link to={"/"}><h1 className='logo'>Kalvium Books</h1></Link> 
                <input className='searchbox' type="text" placeholder="Search Books" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && onSearch(searchTerm)}/>
                <Link to={"/register"}><button className='register'>Register</button></Link>
            </div>
        </>
    )
}

export default Navbar