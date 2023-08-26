import React from "react";
import Navbar from "./navbar";
import TopNavbar from "./topNavbar";
import MidNavbar from "./midNavbar";
import Product from "./product";
import Footer from "./footer";
import Contact from "./contact_us";
import "./style.css";

const Home = () => {

    return (
        <>
            <TopNavbar />

            <div className="home-container">
                <MidNavbar />
                <Navbar />
                <div>
                    <div className="container">
                        <div className="colored-area"></div>
                        <div className="text-div">
                            <h1 className="text">Fresh</h1>
                            <h1 className="text year hollow ">2022</h1>
                            <h1 className="text look">Look</h1>
                            <hr className="line" />
                            <p className="see-more">See more <i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                        <img className="home-img" src="../images/jessica-radanavong-IchPBHFD0pw-unsplash.png" alt="" />
                        <div className="product-div">
                            <p className="product-name">OREGON JACKET</p>
                            <p className="product-name">$124</p>
                        </div>
                    </div>

                </div>
            </div >
            <Product />
            <Contact />
            <Footer />

        </>
    );
};

export default Home;
