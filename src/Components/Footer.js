import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="p-0 m-0">
            <div class="container-fluid">
            <h1 className="f-brand">Shoppy</h1>
            <div className="row">
                <div className="col-md-3">
                    <h3 className="mt-4">Important</h3>
                    <ul className='mt-2'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>About</NavLink></li>
                        <li><NavLink to='/'>Contact</NavLink></li>
                        <li><NavLink to='/'>Donate</NavLink></li>
                        <li><NavLink to='/'>Signin</NavLink></li>
                        <li><NavLink to='/'>Signup</NavLink></li>                            
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="mt-4">Categories</h3>
                    <ul className='mt-2'>
                        <li><NavLink to='/'>Men</NavLink></li>
                        <li><NavLink to='/'>Women</NavLink></li>
                        <li><NavLink to='/'>Kids</NavLink></li>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>Electronics</NavLink></li>
                        <li><NavLink to='/'>Signup</NavLink></li>                            
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="mt-4">Help</h3>
                    <ul className='mt-2'>
                        <li><NavLink to='/'>Payements</NavLink></li>
                        <li><NavLink to='/'>Shipping</NavLink></li>                         
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="mt-4">Stay Connected</h3>
                    <ul className='mt-2 stay-connected'>
                        <li><NavLink to="./"><i class="fab fa-facebook-f"></i></NavLink></li>                 
                        <li><NavLink to="./"><i class="fab fa-google"></i></NavLink></li>                 
                        <li><NavLink to="./"><i class="fab fa-instagram"></i></NavLink></li>                 
                        <li><NavLink to="./"><i class="fab fa-twitter"></i></NavLink></li>                 
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
        <div className="copy-right m-0"> 
            <p class="text-center">&#169;2021 BIPOC Futures Ltd.</p>
        </div>
    </footer>
    )
}
