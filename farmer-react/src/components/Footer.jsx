import React from 'react';

const Footer = () => {
    return (
        <>
            <div class="footer" id="contact">
                <div class="main-footer">
                    <div class="footer-child-container">
                        <div class="footer-child">
                            <h1 class="footer-logo">LOCAL<br />LIFE</h1>
                            <div class="icons">
                                <i class="fa-brands fa-square-facebook fa-4x icon" style={{ color: "#f5d1d0" }}></i>
                                <i class="fa-brands fa-instagram fa-4x" style={{ color: "#f5d1d0" }}></i>
                                <i class="fa-brands fa-square-twitter fa-4x icon" style={{ color: "#f5d1d0" }}></i>
                            </div>
                        </div>
                        <div class="footer-child">
                            <h1 class="links-header">OUR SERVICES</h1><span class="links">What's New</span><span
                                class="links">How
                                to Order</span><span class="links">Payment Method</span><span class="links">Order
                                    Status</span><span class="links">Subscription</span>
                        </div>
                        <div class="footer-child">
                            <h1 class="links-header">OUR TEAM</h1><span class="links">Our Local Farms</span><span
                                class="links">Craftsmanhip</span><span class="links">Our Sources</span><span
                                    class="links">Sustainability</span>
                        </div>
                        <div class="footer-child">
                            <h1 class="links-header">LEGAL</h1><span class="links">Privacy Policy</span><span class="links">Our
                                Promise</span><span class="links">More Information</span>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>Copyright 2023 Haraksh Singh. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;