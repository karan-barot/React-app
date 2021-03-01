import React from 'react'

export default function Signup() {
    return (
        <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="mt-5 login-form-container">
                    <form className="login-form pt-5"> 
                        <div class="custom-shape-divider-bottom-1613595519">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                            </svg>
                        </div>                       
                        <h1 className="mt-5">Signup</h1>
                        <div className="form-group d-flex  mt-3 input">
                            <i className="fas fa-user-circle"></i>
                            <input type="text" className="form-control" placeholder="User Name"/>
                        </div>
                        <div className="form-group d-flex  mt-3 input">
                            <i className="fas fa-key"></i>
                            <input type="text" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="form-group d-flex  mt-3 input">
                            <i className="fas fa-key"></i>
                            <input type="text" className="form-control" placeholder="Confirm Password"/>
                        </div>
                        <div className="form-group d-flex justify-content-center mt-3">
                            <button className="mt-3">Submit</button>
                        </div>
                        <p className="text-center mt-3">Or</p>
                        <div className="d-flex justify-content-center login-social">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-google"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
