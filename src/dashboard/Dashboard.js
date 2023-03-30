import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Api } from "../helpers/api";
import { useHistory } from "react-router-dom";
import localStorageHelper from "../helpers/localstorage";

const Dashboard = () => {

  const [data, setData] = useState({});

  const handleLogOut = () => {
    localStorageHelper.clear("auth");
    window.location.href = "/"
  };
  const history = useHistory();

  useEffect(() => {
    Api.post("user/fetchUser", {
      username: localStorageHelper.getData("username"),
    }).then((res) => {
      setData(res.data.result);
      if (!res.data.result.UserVerified) {
        history.push("/unverified");
      }
    });
  }, [history]);
  return (
    <div>
      <div class="page-wrapper chiller-theme toggled">
        <nav id="sidebar" class="sidebar-wrapper">
          <div class="sidebar-content">
            <div class="sidebar-header">
              <div class="user-pic">
                <img
                  class="img-responsive img-rounded"
                  src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                  alt="User picture"
                />
              </div>
              <div class="user-info">
                <span class="user-name">
                  {data.first_name}
                  <strong>{data.last_name}</strong>
                </span>
                <span class="user-role">Administrator</span>
                <span class="user-status">
                  <i class="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>

            <div class="sidebar-menu">
              <ul>
                <li class="header-menu">
                  <span>General</span>
                </li>
                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="fa fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="fa fa-shopping-cart"></i>
                    <span>User Profile</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="fa fa-book"></i>
                    <span>Documentation</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sidebar-footer">
            <a href="#">
              <i class="fa fa-bell"></i>
              <span class="badge badge-pill badge-warning notification">3</span>
            </a>
            <a href="#">
              <i class="fa fa-envelope"></i>
              <span class="badge badge-pill badge-success notification">7</span>
            </a>
            <a href="#">
              <i class="fa fa-cog"></i>
              <span class="badge-sonar"></span>
            </a>
            <a href="#" onClick={handleLogOut}>
              <i class="fa fa-power-off"></i>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Dashboard;
