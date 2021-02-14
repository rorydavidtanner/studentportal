import React from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { useAppContext } from '../../store';
import { useLoginCheck, logout } from '../../utils/setAuthToken';
import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardNewsCard() {
    return (
        <div className="dashboardCard card cardBackground col-md-6 col-xs-12">
            <div className="card-body">
                <h4 className="card-subtitle md">Welcome to your Dashboard!</h4>
                <br></br>
                <h5 className="card-text">Complete your forms online</h5>
                <br></br>
                {/* <button class="btn" type="button" id="registerButton">Register Attendance</button> */}
                    <Link className="mb-1 mr-5 btn btn-sm active" id = "formBtn" to="/Attendance">
                    Register Attendance
                    </Link>
                {/* <button class="btn" type="button" id="feedbackButton">Complete Feedback</button> */}
                    <Link className="mb-1 mr-1 btn btn-sm active" id = "formBtn" to="/Feedback">
                    Complete Feedback
                    </Link>
                <a href="http://hunterfirstaid.training/classes" className="card-link bottomLink mb-1 md">
                    Available Training Courses
                </a>
            </div>
        </div>
    );
}

export default DashboardNewsCard;
