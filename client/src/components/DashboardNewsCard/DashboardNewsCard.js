import React from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { useAppContext } from '../../store';
import { useLoginCheck, logout } from '../../utils/setAuthToken';

function DashboardNewsCard() {
    return (
        <div className="dashboardCard card cardBackground">
            <div className="card-body">
                <h4 className="card-subtitle">Welcome to your Dashboard!</h4>
                <br></br>
                <p className="card-text">This is where you can complete your forms online</p>
                <br></br>
                {/* <button class="btn" type="button" id="registerButton">Register Attendance</button> */}
                    <Link className="mb-1 mr-1 btn btn-sm active" to="/Attendance">
                    Register Attendance
                    </Link>
                {/* <button class="btn" type="button" id="feedbackButton">Complete Feedback</button> */}
                    <Link className="mb-1 mr-1 btn btn-sm active" to="/Feedback">
                    Complete Feedback
                    </Link>
                <a href="http://hunterfirstaid.training/classes" className="card-link bottomLink">
                    Available Training Courses
                </a>
            </div>
        </div>
    );
}

export default DashboardNewsCard;
