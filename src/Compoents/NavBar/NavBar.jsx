import {React, useState} from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom';
function NavBar(props) {
    const [searchedText, setSearchedText] = useState("");

    const searchHandler = (e) =>{
        // console.log(e.target.value)
        // setSearchedText(e.target.value);

        props.setSearchItem(e.target.value);
    }
  return (
    <div className='NavBar__container'>
      <NavLink to="/" className="NavBar__logo"><h2>Books</h2>  </NavLink>
      <input type="text" placeholder='Search ' onChange={searchHandler} />
    </div>
  )
}

export default NavBar