import { useNavigate } from "react-router";
import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Modal from './Modal'


const Contact = () => {
    /*const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
          navigate('/about')
        }, 2000)
      }, [])*/
   
    
    return(
        
        <div>
                 <h3 style={{textAlign:"center"}}>This React app uses URL route parameters to show data of any user. Replace URL with /card/(any user). Ex: /card/joseph</h3>

            <div 
            className = "ui raised very padded text container segment"
            style = {{marginTop: "80px"}}
        >
            <Link to = "/card/johnny/" className = "ui header">Johnny</Link>
            <p>Contact Us here!</p>
            </div>
            <div 
            className = "ui raised very padded text container segment"
            style = {{marginTop: "80px"}}
        >
            <Link to = "/card/jake/" className = "ui header">Jake</Link>
            <p>Contact Us here!</p>
            </div>
        </div>
    )

}
export default Contact;