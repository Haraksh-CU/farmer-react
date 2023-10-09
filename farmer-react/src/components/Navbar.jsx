import React, { useEffect, useState } from 'react';
import Links from './Links';
import { cart } from './cart';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <>
            <div class="navbar-container">
                <div class="main-1">
                    <div class="logo-menu">
                        <div class="logo">
                            <img id="logo-img" src="./images/logo.png" alt="" />
                        </div>
                        <div class="menu" id="menu-container">
                            {screenSize.width < 796 ? "" : <Links setToggle={setToggle} toggle={toggle} />}
                        </div>
                    </div>
                    <div class="nav-icons" id="icon-container">
                        <div id='icon-container-2'>{screenSize.width < 796 ? toggle ? <i class="fa-solid fa-xmark fa-5x" style={{ color: "#237262" }} onClick={() => setToggle(!toggle)}></i> : <i class="fa-solid fa-bars fa-5x" style={{ color: "#237262" }} onClick={() => setToggle(!toggle)}></i> : ""}</div>
                        <i class="fa-solid fa-magnifying-glass fa-3x i" style={{ color: "#237262" }}></i>
                        <Link to="/cart"><div className="cart"><i class="fa-solid fa-cart-shopping fa-3x i" style={{ color: "#237262" }}></i><div className="cart-dot">{cart.length}</div></div></Link>
                    </div>
                </div>
            </div>
            <div id="mobile-view" style={toggle ? { opacity: 1 } : { opacity: 0 }}>
                {screenSize.width < 796 && toggle ? <Links setToggle={setToggle} toggle={toggle} /> : ""}
            </div>
        </>
    );
};

export default Navbar;
