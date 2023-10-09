import React from 'react';

const Shop = () => {
    return (
        <>
            <div class="section4">
                <div class="sec4-child">
                    <div class="sec4-child1"><img src="./images/sec4-1.png" class="sec4-img" alt="" /></div>
                    <div class="sec4-child2 content">
                        <div class="sec4-main">
                            <h1 class="sec4-heading">Newly<br />Harvest</h1>
                            <p class="sec4-para">Explore the freshness of our newly harvested products. From crisp veggies to succulent meats, each item is handpicked and bursting with flavor. Enjoy the aroma, taste, and health benefits of our nutrient-rich, organic selections. By choosing our farm-to-table treasures, you support local farmers and savor pure, seasonal goodness on your plate.</p>
                            <button class="sec4-btn">OUR PRODUCTS</button>
                        </div>
                    </div>
                </div>
                <div class="sec4-child" id="shop">
                    <div class="sec4-child1 content">
                        <div class="sec4-main">
                            <h1 class="sec4-heading">Fresh Daily<br />Products</h1>
                            <p class="sec4-para">Experience the delight of daily freshness with our products. From farm to your table, we deliver a daily dose of vibrant flavors and wholesome goodness. Savor the taste of each day's harvest, and elevate your meals with the finest, freshest ingredients available.</p>
                            <button class="sec4-btn">SHOP TODAY</button>
                        </div>
                    </div>
                    <div class="sec4-child2"><img src="./images/sec4-2.png" class="sec4-img" alt="" /></div>
                </div>
            </div>
        </>
    );
};

export default Shop;