import React from 'react';
import './style.css';
import LandingJumbo from '../../LandingJumbo/LandingJumbo';
import BrandDescription from '../../BrandDescription/BrandDescription';
import 'bootstrap/dist/css/bootstrap.min.css';

function Landing() {
    return (
        <div className="container-fluid p-0 m-0 md">
            <div className="d-flex justify-content-center backgroundImg">
                <LandingJumbo />
            </div>
            <BrandDescription />
        </div>
    );
}

export default Landing;
