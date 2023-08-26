import React, { useState, useEffect } from 'react'


const Card = () => {
    const [scrollImages, setScrollImages] = useState(null);
    const [leftButton, setLeftButton] = useState(null);
    const [rightButton, setRightButton] = useState(null);
    const [scrollLength, setScrollLength] = useState(0);

    useEffect(() => {
        setScrollImages(document.querySelector('.scroll-images'));
        setLeftButton(document.querySelector('.left'));
        setRightButton(document.querySelector('.right'));
    }, []);

    useEffect(() => {
        if (scrollImages) {
            setScrollLength(scrollImages.scrollWidth - scrollImages.clientWidth);
            checkScroll();
            scrollImages.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            return () => {
                scrollImages.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, [scrollImages]);

    const checkScroll = () => {
        const currentScroll = scrollImages.scrollLeft;
        if (currentScroll === 0) {
            leftButton.setAttribute('disabled', 'true');
            rightButton.removeAttribute('disabled');
        } else if (currentScroll === scrollLength) {
            rightButton.setAttribute('disabled', 'true');
            leftButton.removeAttribute('disabled');
        } else {
            leftButton.removeAttribute('disabled');
            rightButton.removeAttribute('disabled');
        }
    };

    const leftScroll = () => {
        scrollImages.scrollBy({
            left: -270,
            behavior: 'smooth',
        });
    };

    const rightScroll = () => {
        scrollImages.scrollBy({
            left: 270,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="cover">
                <button className="left" onClick={leftScroll}>
                    <i className="fas fa-angle-double-left"></i>
                </button>
                <div className="scroll-images">
                    <div className="child">
                        <div className="card">
                            <div className="card_image">
                                <img src="../images/philipp-arlt-8EyB_RvaWtY-unsplash.png" alt='' />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">FLORIDA JACKET</h2>
                                <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis maiores molestiae sapiente repellat quam delectus laboriosam libero saepe sint, aspernatur reprehenderit, iste, porro amet vitae hic soluta alias velit veritatis!.</p>
                                <h3>$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <div className="card">
                            <div className="card_image">
                                <img src="../images/malicki-m-beser-PKMvkg7vnUo-unsplash.png" alt='' />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio suscipit, quasi sequi magnam recusandae ducimus? Autem laudantium, voluptatem quod  incidunt praesentium!</p>
                                <h3>$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <div className="card">
                            <div className="card_image">
                                <img src="../images/zam-nungaray-acw3b7q6Ys0-unsplash.png" alt='' />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Lorem ipsum dolor sit amet  asperiores, ipsa iure, quaerat quod repudiandae natus, debitis dolorem velit. Ipsa molestias rerum doloremque, totam voluptatum est perferendis id.</p>
                                <h3>$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <div className="card">
                            <div className="card_image">
                                <img src="../images/zam-nungaray-acw3b7q6Ys0-unsplash.png" alt='' />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Lorem ipsum dolor sit amet  asperiores, ipsa iure, quaerat quod repudiandae natus, debitis dolorem velit. Ipsa molestias rerum doloremque, totam voluptatum est perferendis id.</p>
                                <h3>$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <div className="card">
                            <div className="card_image">
                                <img src="../images/zam-nungaray-acw3b7q6Ys0-unsplash.png" alt='' />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Lorem ipsum dolor sit amet  asperiores, ipsa iure, quaerat quod repudiandae natus, debitis dolorem velit. Ipsa molestias rerum doloremque, totam voluptatum est perferendis id.</p>
                                <h3>$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <div className="card">
                            <div className="card_image">
                                <img src="../images/zam-nungaray-acw3b7q6Ys0-unsplash.png" alt='' />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Lorem ipsum dolor sit amet  asperiores, ipsa iure, quaerat quod repudiandae natus, debitis dolorem velit. Ipsa molestias rerum doloremque, totam voluptatum est perferendis id.</p>
                                <h3>$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <div className="card">
                            <div className="card_image">
                                <img src="../images/zam-nungaray-acw3b7q6Ys0-unsplash.png" alt='' />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Lorem ipsum dolor sit amet  asperiores, ipsa iure, quaerat quod repudiandae natus, debitis dolorem velit. Ipsa molestias rerum doloremque, totam voluptatum est perferendis id.</p>
                                <h3>$100</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="right" onClick={rightScroll}>
                    <i className="fas fa-angle-double-right"></i>
                </button>
            </div>

        </>
    )
}

export default Card
