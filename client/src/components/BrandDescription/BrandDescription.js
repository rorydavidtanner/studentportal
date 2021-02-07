import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BrandDescription() {
    return (
        <div className="p-0 m-0 container-fluid d-flex justify-content-center w-100 p-3">
            <div className="p-0 m-0 row fluid w-100 p-3">
                <div className="cardBackground card col-md-9 col-xs-12 fluid">
                    <div className="card-body fluid">
                        <h5 className="card-title">Student Forms</h5><br></br>
                        <p className="card-text">
                        <div class="text-center d-grid gap-2 fluid" id="">
                        <button class="btn" type="button" id="registerButton">Register Attendance</button>
                        <button class="btn" type="button" id="feedbackButton">Complete Feedback</button>
                        </div>
                        </p>
                    </div>
                    
                </div>

                <div className="text-center cardBackground card col-md-3 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">Follow Us!</h5><br></br>
                        <a href="https://www.facebook.com/HunterFirstAid/">
                            <span className="fa-stack facebookLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </span>
                        </a>
                    
                        <a href="https://www.instagram.com/hunterfirstaid/?hl=en">
                            <span className="fa-stack instagramLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default BrandDescription;
