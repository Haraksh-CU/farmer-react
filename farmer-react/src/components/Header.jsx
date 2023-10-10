import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="main1">
                <div className="section1-container" id="home">
                    <div className="mobile"><img src="./images/header.png" alt="" className="mobile-header-img" /></div>
                    <div className="child1 header-title">
                        <div className="sub1"><img src="./images/header.png" alt="" className="header-img" /></div>
                        <div className="sub2">
                            <span className="green header-span">
                                SUPPORT LOCAL:
                            </span>
                            <h1 className="green header-text">From Our farms<br />to your kitchen.</h1>
                        </div>
                    </div>
                    <div className="child1 header-para">
                        <div className="sub1"></div>
                        <div className="sub2">
                            <p>Welcome to The Local Life, your source for locally grown, fresh farm products. We're a community of passionate farmers committed to bringing the best of our harvests to your table.</p>
                            <Link to="/shop"><button>SHOP NOW</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;