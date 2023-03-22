import React from 'react';
import './Modal.css'
import Modal from './Modal'

const ComingSoon = () => {
    return(
        
        <div>
            <Modal />
        <div 
            className = "ui raised very padded text container segment"
            style = {{marginTop: "80px"}}
        >
            <h3 className = "ui header">In Construction</h3>
            <p>Come back later</p>

        </div>
    </div>
    )
}

export default ComingSoon;