import React from 'react';

const Latest = () => {
    return (
        <>
            <div class="section2">
                <div class="title">
                    <div class="sec2-text1-c"><span class="sec2-text1">READY FOR</span></div>
                    <h1 class="sec2-text2">WHATS NEW?</h1>
                </div>
                <div class="section2-img-container">
                    <div class="images2"><img src="./images/sec2-1.png" class="sec2-img" alt="" />
                        <p>GREEN VEGETABLES PACK<br />
                            $12.99</p>
                    </div>
                    <div class="images2"><img src="./images/sec2-2.png" class="sec2-img" alt="" />
                        <p>FRUIT CART PACKS<br />
                            $12.99</p>
                    </div>
                    <div class="images2"><img src="./images/sec2-3.png" class="sec2-img" alt="" />
                        <p>LEMONS {"&"} ORANGE PACKS <br />
                            $12.99</p>
                    </div>
                </div>
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot non-active"></div>
                    <div class="dot non-active"></div>
                    <div class="dot non-active"></div>
                </div>
            </div>
        </>
    );
};

export default Latest;