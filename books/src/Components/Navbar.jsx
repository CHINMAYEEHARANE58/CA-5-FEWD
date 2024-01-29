import {useState} from 'react'
import {Link} from "react-router-dom"

const Navbar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div style={{border: '1px solid red'}}>
            <h1><Link to={"/"}>Kalvium Books</Link></h1> 
            <input type="text" placeholder="Search Books" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && onSearch(searchTerm)}/>
            <button><Link to={"/register"}>Register</Link></button>
        </div>
    )
}

export default Navbar