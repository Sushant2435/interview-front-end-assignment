import React from 'react'


const Contact = () => {
    function myFunction() {
        const inpObj = document.getElementById("id1");
        if (!inpObj.checkValidity()) {
            document.getElementById("demo").innerHTML = inpObj.validationMessage;
        } else {
            document.getElementById("demo").innerHTML = "Input OK";
        }
    }
    return (
        <>
            <div className='contact-container'>
                <div className='contact-area'>
                    <div className='contact-feilds'>
                        <div className='title'>
                            <div className='contact-text-feild'>
                                <h6 className='newsleter'>Newsleter</h6>
                                <p className='newsleter-p'>Get news about articles and updates in your inbox.</p>
                            </div>
                            <h1 className='get-touch'>GET<br />
                                IN TOUCH</h1>
                        </div>
                        <div className='form'>
                            <form>
                                <input type="text" id="fname" name="fname" placeholder='NAME' required />
                                <input type="email" id="lname" name="lname" placeholder='EMAIL' required />
                                <input type="text" id="lname" name="lname" placeholder='MESSAGE' required />
                                <button type="submit" className='submit-btn'>SEND</button>

                            </form>
                        </div>
                    </div>

                </div>


            </div >

        </>
    )
}

export default Contact
