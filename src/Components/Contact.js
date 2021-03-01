import React from 'react'
import AOS from 'aos'
import MSG from '../Images/message.svg'
export default function Contact() {
    AOS.init();
    return (        
        <div className="container-fluid contact">
            <form className="mt-3">
                <div className="form-left">
                    <img src={MSG} className="img-fluid"/>
                    <div className="overlay"></div>
                </div>
                <div className="form-right">
                    <h3 className="mb-3">Contact us</h3>
                    <input type="text" placeholder="First Name"/><br/>
                    <input type="text" placeholder="Last Name"/><br/>
                    <input type="text" placeholder="Email"/><br/>
                    <textarea type="text" placeholder="Explain in detail"></textarea><br/>
                    <button>Send</button>
                </div>
            </form>
        
        </div>
    )
}
