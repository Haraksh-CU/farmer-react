import React from 'react';

const Header = () => {
    return (
        <>
            <div class="main1">
                <div class="section1-container" id="home">
                    <div class="mobile"><img src="./images/header.png" alt="" class="mobile-header-img" /></div>
                    <div class="child1 header-title">
                        <div class="sub1"><img src="./images/header.png" alt="" class="header-img" /></div>
                        <div class="sub2">
                            <span class="green header-span">
                                SUPPORT LOCAL:
                            </span>
                            <h1 class="green header-text">From Our farms<br />to your kitchen.</h1>
                        </div>
                    </div>
                    <div class="child1 header-para">
                        <div class="sub1"></div>
                        <div class="sub2">
                            <p>Welcome to The Local Life, your source for locally grown, fresh farm products. We're a community of passionate farmers committed to bringing the best of our harvests to your table.</p>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;