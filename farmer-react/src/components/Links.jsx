import React from 'react';
import { Link } from 'react-router-dom';

const Links = (props) => {
    return (
        <>
            <div class="menu-item"><Link to="/" onClick={() => props.setToggle(!props.toggle)}>Home</Link></div>
            <div class="menu-item"><Link to="/about" onClick={() => props.setToggle(!props.toggle)}>About</Link></div>
            <div class="menu-item"><Link to="/shop" onClick={() => props.setToggle(!props.toggle)}>Shop</Link></div>
            <div class="menu-item"><Link to="/contactus" onClick={() => props.setToggle(!props.toggle)}>Contact Us</Link></div>
        </>
    );
};

export default Links;