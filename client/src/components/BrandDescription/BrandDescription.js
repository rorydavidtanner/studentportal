import React from 'react';

function BrandDescription() {
    return (
        <div className="p-0 m-0 container-fluid d-flex justify-content-center">
            <div className="p-0 m-0 row">
                <div className="cardBackground card col-md-9 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">Student Forms</h5>
                        <p className="card-text">
                        <button>Register Attendance</button><button>Complete Feedback</button>
                        </p>
                    </div>
                </div>

                <div className="text-center cardBackground card col-md-3 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">Follow Us!</h5>
                        <a href="/">
                            <span className="fa-stack facebookLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </span>
                        </a>
                    
                        <a href="/">
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
