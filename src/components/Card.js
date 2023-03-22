import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Card = (props) => {

    let { user } = useParams(); 
    
        return(
            
            <div 
            className = "ui raised very padded text container segment"
            style = {{marginTop: "80px"}}
            >
             <h3 className = "ui header">{user}</h3>
            </div>
        )
  
}

export default Card;