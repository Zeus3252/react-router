import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router";

const Navbar = () => {
    /*const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
          navigate('/about')
        }, 2000)
      }, [])*/
    return(
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment'>Gloria</a>
            <div className='ui right floated header'>
                <button className='ui button'><Link to ='/'>Home</Link></button>
                <button className='ui button'><Link to ='/about'>About</Link></button>
                <button className='ui button'><Link to ='/contact'>Contact</Link></button>
                <button className='ui button'><Link to ='/comingsoon'>Coming Soon</Link></button>
            </div>
        </nav>
    )
}

export default Navbar;