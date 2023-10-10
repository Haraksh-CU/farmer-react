import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./contact.css";

const Sign = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
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
            alert("PLEASE ENTER YOUR USER NAME");
        }
        if (inputs.email === '') {
            alert("PLEASE ENTER YOUR EMAIL");
        }
        if (inputs.password === '') {
            alert("PLEASE ENTER YOUR PASSWORD");
        }
        if (inputs.name !== '' && inputs.password !== '' && inputs.email !== '') {
            navigate("/");
            window.scrollTo(0, 0);
        }
    }
    return (
        <div className='contact-form login-form'>
            <h1 className='login-logo'>The Local Life</h1>
            <div className="form-login">
                <form className='w-80' style={{ border: "3px solid white" }}>
                    <h1 className='login-txt'>Signup</h1>
                    <div className="login-info">
                        <div className="login-name">
                            <label htmlFor="name">USER NAME</label>
                            <input type="text" placeholder='Name' id="name" name="name" value={inputs.name} onChange={handleChange} />
                        </div>
                        <div className="Email">
                            <label htmlFor="mail">EMAIL ADDRESS</label>
                            <input type="email" placeholder='Email' id="mail" name="email" value={inputs.email} onChange={handleChange} />
                        </div>
                        <div className="login-password">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" placeholder='Password' id="password" name="password" value={inputs.password} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="login-btn">
                        <button type="submit" class="btn btn-light" style={{ padding: "10px", fontSize: "2rem" }} onClick={handleSubmit}>Signup</button><h1 style={{ color: "white", marginTop: "10px" }}>Already have an account?<Link to="/login" style={{ color: "white" }}><h2>Login</h2></Link><Link to="/" style={{ color: "white" }}><h2>Home</h2></Link></h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sign;