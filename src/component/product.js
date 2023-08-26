import React from 'react'
import Card from './card'

const Product = () => {
    return (
        <>
            <div className='product-container'>
                <div className='product-header'>
                    <h3 className='product-heading'>New products</h3>
                    <span className="line-horizontal arrow-left"></span>
                    <span className="line-horizontal arrow-right"></span>
                </div>
                <hr style={{ width: "45%" }} />
                <nav>
                    <ul className='list-item'>
                        <li>Apparel</li>
                        <li>Accessories</li>
                        <li>Best sellers</li>
                        <li>50% off</li>
                    </ul>
                </nav>
                <div>
                    <Card />
                </div>
            </div >

        </>
    )
}

export default Product
