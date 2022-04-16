
import { Link } from "react-router-dom";
import React, { useState } from "react";
function AppSideber() {
  const tokenData = JSON.parse(sessionStorage.getItem("token"));
  if (!tokenData) {
    sessionStorage.removeItem("token");
    window.location.reload();
  }
  const [role, setRole] = useState(tokenData.user.role_id);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src="logo.jpeg"
          alt="Rummy"
          className="brand-image img-circle elevation-3"
        />
        <span className="brand-text font-weight-light">Admin</span>
      </a>
      <div className="sidebar"> 

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <Link to="/" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-header">Users Management</li>

            <li className="nav-item">
              <Link to="/PlayersList" className="nav-link">
                <i className="fa-solid fa-users nav-icon" />
                <p> View Players</p>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/AddNewDistributor" className="nav-link">
                <i className="fa-solid fa-user-plus nav-icon" />
                <p>Blocked Players</p>
              </Link>
            </li> */}

            <li className="nav-header">Game Settings</li>
            <li className="nav-item">
              <Link to="/cards" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>Context Tables</p>
              </Link>
            </li>
            <li className="nav-header">Payments & History</li>

            <li className="nav-item">
              <Link to="/userWithdrawRequest" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Withdraw Request</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Transactions" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Transactions Records</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/ReferralBonus" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Referral Bonus</p>
              </Link>
            </li>

            <li className="nav-header">Users </li>
            <li className="nav-item">
              <Link to="/UsersList" className="nav-link">
                <i class="fa-solid fa-list nav-icon"></i>
                <p>Users History</p>
              </Link>
            </li>
            
            <li className="nav-header">User Settings</li>
            <li className="nav-item">
              <Link to="/changepassword" className="nav-link">
                <i className="fa-solid fa-key nav-icon"></i>
                <p>Change Password</p>
              </Link>
            </li> 
          </ul>
        </nav>
      </div>
    </aside>
  );
}
export default AppSideber;
