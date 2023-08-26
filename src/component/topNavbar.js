import React from 'react'

const TopNavbar = () => {
    return (
        <>
            <nav className="top-navbar">
                <ul className="top-nav-links">
                    <div className="top-menu">
                        <li><a href="/"><i className="delivery fa-solid fa-truck"></i>Free Delivery</a></li>
                        <li className='vl'></li>
                        <li><a href="/">Return Policy</a></li>
                    </div>
                </ul>
                <ul className="top-nav-links">
                    <div className="top-menu">
                        <li><a href="/">Login</a></li>
                        <li className='follow-us'><a href="/">Follow US</a></li>
                        <li><a href="/"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default TopNavbar
