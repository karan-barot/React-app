import React from 'react'
import { NavLink } from 'react-router-dom'
export default function About() {
    return (
        <div className="container-fluid about">
            <h1 className="mt-5">About the developers</h1>
            <div className="row mt-5">
                <div className="col-md-1"></div>

                <div className="col-md-4" data-aos="fade-zoom-in">
                    <div className="crd">
                        <h2>Adit Patel</h2>                       
                        <div className="info">
                            <div>
                                <p><b>Email : </b></p>
                                <p><b>Contact : </b></p>
                                <p><b>Address : </b></p>
                            </div>
                            <div>
                                <p>karanbarot33344@gmail.com</p>
                                <p>+1(437)-987-3077</p>
                                <p>Toronto</p>
                            </div>
                        </div>
                        <ul className="stay-connected">
                            <li><NavLink to="./"><i class="fab fa-facebook-f"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-google"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-instagram"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-twitter"></i></NavLink></li> 
                        </ul>
                    </div>
                </div>
                <div className="col-md"></div>
            </div>
            <div className="row">
                <div className="col-md"></div>
                <div className="col-md-4">
                    <div className="crd">
                        <h2>Heet Patel</h2>                       
                        <div className="info">
                            <div>
                                <p><b>Email : </b></p>
                                <p><b>Contact : </b></p>
                                <p><b>Address : </b></p>
                            </div>
                            <div>
                                <p>karanbarot33344@gmail.com</p>
                                <p>+1(437)-987-3077</p>
                                <p>Toronto</p>
                            </div>
                        </div>
                        <ul className="stay-connected">
                            <li><NavLink to="./"><i class="fab fa-facebook-f"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-google"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-instagram"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-twitter"></i></NavLink></li> 
                        </ul>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="crd">
                        <h2>Karan Barot</h2>                       
                        <div className="info">
                            <div>
                                <p><b>Email : </b></p>
                                <p><b>Contact : </b></p>
                                <p><b>Address : </b></p>
                            </div>
                            <div>
                                <p>karanbarot33344@gmail.com</p>
                                <p>+1(437)-987-3077</p>
                                <p>Toronto</p>
                            </div>
                        </div>
                        <ul className="stay-connected">
                            <li><NavLink to="./"><i class="fab fa-facebook-f"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-google"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-instagram"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-twitter"></i></NavLink></li> 
                        </ul>
                    </div>
                </div>
                <div className="col-md"></div>
            </div>
            <div className="row mb-5">
                <div className="col-md"></div>
                <div className="col-md-4">
                    <div className="crd">
                        <h2>Vijay Thakar</h2>                       
                        <div className="info">
                            <div>
                                <p><b>Email : </b></p>
                                <p><b>Contact : </b></p>
                                <p><b>Address : </b></p>
                            </div>
                            <div>
                                <p>karanbarot33344@gmail.com</p>
                                <p>+1(437)-987-3077</p>
                                <p>Toronto</p>
                            </div>
                        </div>
                        <ul className="stay-connected">
                            <li><NavLink to="./"><i class="fab fa-facebook-f"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-google"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-instagram"></i></NavLink></li>                 
                            <li><NavLink to="./"><i class="fab fa-twitter"></i></NavLink></li> 
                        </ul>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            
        </div>
    )
}
