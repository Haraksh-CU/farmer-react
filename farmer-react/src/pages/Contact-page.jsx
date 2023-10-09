import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./contact.css";
const Contact = () => {

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });


    const navigate = useNavigate();

    function handleChange(event) {
        // console.log(event.target.name + " " + event.target.value)
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (inputs.name === '') {
            alert("PLEASE ENTER YOUR FULL NAME");
        }
        if (inputs.email === '') {
            alert("PLEASE ENTER YOUR EMAIL");
        }
        if (inputs.subject === '') {
            alert("PLEASE ENTER THE SUBJECT YOU WANT TO TALK ABOUT");
        }
        if (inputs.message === '') {
            alert("PLEASE ENTER YOUR MESSAGE");
        }
        if (inputs.name !== '' && inputs.message !== '' && inputs.subject !== '' && inputs.email !== '') {
            alert("YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY!!");
            navigate("/");
            window.scrollTo(0, 0);
        }
    }
    return (
        <div className='contact-form'>
            <div className="contact-container">
                <div className="contact-details">
                    <div className="details-container">
                        <h1>Let's get in touch</h1>
                        <p>We're open for any suggestion or just to have a chat</p>
                        <div className="contact-info-container">
                            <div className="contact-info"><div className="contact-icon"><i class="fa-solid fa-location-dot fa-3x" style={{ color: "rgb(76 167 125);" }}></i></div><div className="contact-content">Address: 198 West 21th Street, Suite 721 New York NY 10016</div></div>
                            <div className="contact-info"><div className="contact-icon"><i class="fa-solid fa-phone fa-3x" style={{ color: "rgb(76 167 125);" }}></i></div><div className="contact-content">Phone: + 1235 2355 98</div></div>
                            <div className="contact-info"><div className="contact-icon"><i class="fa-regular fa-envelope fa-3x" style={{ color: "rgb(76 167 125);" }}></i></div><div className="contact-content">Email: info@yoursite.com</div></div>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <form className='w-80'>
                        <h1>Get in touch</h1>
                        <div className="user-info">
                            <div className="name">
                                <label htmlFor="name">FULL NAME</label>
                                <input type="text" placeholder='Name' id="name" name="name" value={inputs.name} onChange={handleChange} />
                            </div>
                            <div className="mail">
                                <label htmlFor="mail">EMAIL ADDRESS</label>
                                <input type="email" placeholder='Email' id="mail" name="email" value={inputs.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="subject">
                            <label htmlFor="subject">SUBJECT</label>
                            <input type="text" placeholder='Subject' id="subject" name="subject" value={inputs.subject} onChange={handleChange} />
                        </div>
                        <div className="message">
                            <label htmlFor="message">MESSAGE</label>
                            <input type="text" placeholder='Message' id="message" name="message" value={inputs.message} onChange={handleChange} />
                        </div>
                        <button type="submit" class="btn btn-success" style={{ padding: "10px", fontSize: "2rem" }} onClick={handleSubmit}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;