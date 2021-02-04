import React from 'react';

function LandingJumbo() {
    return (
        <div className="mt-5 jumbotron landingJumbo">
            <div className="mx-auto col-sm-8 jumboText">
                <h1 className="d-flex justify-content-center companyName">
                    <div className="mr-2 sidebar-brand-icon rotate-n-15">
                        <i className="far fa-user-circle" />
                    </div>
                    <div>Welcome to Hunter First Aid's Student Portal</div>
                </h1>
                <h2 className="text-center companySlogan">Access to online forms, at your finger tips.</h2>
            </div>
        </div>
    );
}

export default LandingJumbo;
