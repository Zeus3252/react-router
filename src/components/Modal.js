import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    
    return ReactDOM.createPortal(
        <div className='ui dimmer show modals visible active'>
            <div className='ui raised raid very padded text container segment'>
                <h1>This is a modal created with a React portal.</h1>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;