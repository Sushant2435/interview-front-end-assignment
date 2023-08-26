import React from 'react'

const MidNavbar = () => {
    return (
        <>
            <nav className="mid-navbar">
                <ul className="mid-nav-links">
                    <div className="mid-menu-logo">
                        <li><a href="/">ShopKart</a></li>
                    </div>
                </ul>
                <ul className="mid-nav-links">
                    <div className="mid-menu">
                        <li><a href="/">WISHLIST(0)</a></li>
                        <li><a href="/">BAGLIST(0)</a></li>

                    </div>
                </ul>
            </nav>
            <hr style={{ margin: "0px 150px" }} />


        </>
    )
}

export default MidNavbar
