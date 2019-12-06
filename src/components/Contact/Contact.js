import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className='cTitle'>
                contact
            </div>
            {/* <div className="contact-form">
                <fieldset className="contacting">
                    <div class="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="name" placeholder="Human Being" />
                    </div>
                    <div class="input-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="email" placeholder="name@example.com" />
                    </div>
                    <div class="input-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="subject" placeholder="Great Portfolio!" />
                    </div>
                    <div class="input-group">
                        <label htmlFor="message">Message</label>
                        <input type="text" className="message" placeholder="I would love for you to do some work for us..." />
                    </div>
                </fieldset>
            </div> */}
            <div className="contact-info">
                I would love to hear from you! <br /><br />
                email: itsbenduncan@gmail.com <br />
                phone: (808)-384-1245
            </div>
        </div>
    )
}

export default Contact;