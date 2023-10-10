import React from 'react';

const Latest = () => {
    return (
        <>
            <div className="section2">
                <div className="title">
                    <div className="sec2-text1-c"><span className="sec2-text1">READY FOR</span></div>
                    <h1 className="sec2-text2">WHATS NEW?</h1>
                </div>
                <div className="section2-img-container">
                    <div className="images2"><img src="./images/sec2-1.png" className="sec2-img" alt="" />
                        <p>GREEN VEGETABLES PACK<br />
                            $12.99</p>
                    </div>
                    <div className="images2"><img src="./images/sec2-2.png" className="sec2-img" alt="" />
                        <p>FRUIT CART PACKS<br />
                            $12.99</p>
                    </div>
                    <div className="images2"><img src="./images/sec2-3.png" className="sec2-img" alt="" />
                        <p>LEMONS {"&"} ORANGE PACKS <br />
                            $12.99</p>
                    </div>
                </div>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot non-active"></div>
                    <div className="dot non-active"></div>
                    <div className="dot non-active"></div>
                </div>
            </div>
        </>
    );
};

export default Latest;