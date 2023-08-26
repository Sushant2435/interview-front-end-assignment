import React from 'react'
import { Navbar_array } from './array.js'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">ABOUT</a></li>
                        <li className="services">
                            <a href="/">OUT PRODUCTS</a>
                            <ul className="dropdown">
                                <li><a href="/">Product 1 </a></li>
                                <li><a href="/">Product 2</a></li>
                                <li><a href="/">Product 3</a></li>
                                <li><a href="/">Product 4</a></li>
                            </ul>
                        </li>
                        <li><a href="/">CONTACT US</a></li>
                    </div>
                </ul>
            </nav>

        </>
    )
}

export default Navbar
