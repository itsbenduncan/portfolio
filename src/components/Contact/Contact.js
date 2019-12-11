import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className='cTitle'>
                contact
            </div>
            <div className="contact-info">
                <h1 className="contact-message">
                    I would love to hear from you! <br />
                </h1>
                <div className="contact-details">
                    email: itsbenduncan@gmail.com <br />
                    phone: (808)-384-1245
                </div>
            </div>
        </div>
    )
}

export default Contact;