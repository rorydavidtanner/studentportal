import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './style.css';

function Sidebar() {
    return (
        <aside>
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="far fa-user-circle" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Student Portal</div>
                </Link>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Nav Item - Dashboard */}
                <Item class = "sidebarItems"
                    active={''}
                    href={'/dashboard'}
                    icon={<i className="fas fa-folder-minus" />}
                    text={<span>Dashboard</span>}
                />

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* Nav Item - Profile */}
                <Item
                    active={''}
                    href={'/profile'}
                    icon={<i className="fas fa-user-alt" />}
                    text={<span>Profile</span>}
                />

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* Nav Item - Regsiter Attendance  */}
                <Item
                    active={''}
                    href={'/Attendance'}
                    icon={<i className="fas fa-calendar-week" />}
                    text={<span>Register Attendance</span>}
                />

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                 {/* Nav Item - Complete Feedback  */}
                 <Item
                    active={''}
                    href={'/Feedback'}
                    icon={<i className="fas fa-calendar-week" />}
                    text={<span>Complete Feedback</span>}
                />

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </aside>
    );
}
export default Sidebar;
