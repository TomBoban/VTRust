import { clearStorage } from "../utilities";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Api } from "../helpers/api";
import { NavLink, useHistory } from "react-router-dom";
import localStorageHelper from "../helpers/localstorage";
import UserProfile from "./UserProfile";

const UserDashboard = () => {
  const [data, setData] = useState({});

  const handleLogOut = () => {
    localStorageHelper.clear("auth");
    window.location.href = "/";
  };
  const history = useHistory();
  useEffect(() => {
    Api.post("user/fetchUser", {
      username: localStorageHelper.getData("username"),
    }).then((res) => {
      setData(res.data.result);
      if (
        res.data.result.userVerified !== "true" ||
        !res.data.result.userVerified
      ) {
        history.push("/unverified");
      }
    });
  }, [history]);
  return (
    <div>
      <div class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
          <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                >
                  <i class="fas fa-bars"></i>
                </a>
              </li>
              {/* <li class="nav-item d-none d-sm-inline-block">
                <a href="index3.html" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link">
                  Contact
                </a>
              </li> */}
            </ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-widget="navbar-search"
                  href="#"
                  role="button"
                ></a>
                <div class="navbar-search-block"></div>
              </li>

              <li class="nav-item dropdown">
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <div class="media">
                      <img
                        src="dist/img/user8-128x128.jpg"
                        alt="User Avatar"
                        class="img-size-50 img-circle mr-3"
                      />
                      <div class="media-body">
                        <h3 class="dropdown-item-title">
                          {data.username}
                          <span class="float-right text-sm text-muted">
                            <i class="fas fa-star"></i>
                          </span>
                        </h3>
                        <p class="text-sm">I got your message bro</p>
                        <p class="text-sm text-muted">
                          <i class="far fa-clock mr-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <div class="media">
                      <img
                        src="dist/img/user3-128x128.jpg"
                        alt="User Avatar"
                        class="img-size-50 img-circle mr-3"
                      />
                      <div class="media-body">
                        <h3 class="dropdown-item-title">
                          <span class="float-right text-sm text-warning">
                            <i class="fas fa-star"></i>
                          </span>
                        </h3>
                        <p class="text-sm">The subject goes here</p>
                        <p class="text-sm text-muted">
                          <i class="far fa-clock mr-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item dropdown-footer">
                    See All Messages
                  </a>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  data-toggle="dropdown"
                  href="#"
                  onClick={() => clearStorage()}
                >
                  <i class="fas fa-sign-out-alt"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <span class="dropdown-item dropdown-header">Logout</span>
                </div>
              </li>
            </ul>
          </nav>

          <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" class="brand-link">
              <img
                src="dist/img/AdminLTELogo.png"
                alt=""
                class="brand-image img-circle elevation-3"
                style={{ opacity: "0.8" }}
              />
              <span
                class="brand-text font-weight-light"
                style={{ fontFamily: "poppins" }}
              >
                <b>Vtrusts dashboard</b>
              </span>
            </a>

            <div class="sidebar">
              <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    class="img-circle elevation-2"
                    alt="User Image"
                  />
                </div>
                <div
                  class="info"
                  style={{ fontFamily: "poppins", color: "white" }}
                >
                  {data.username}
                </div>
              </div>

              <nav class="mt-2">
                <ul
                  class="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  {/* <li class="nav-item menu-open">
                    <a href="#" class="nav-link active">
                      <i class="nav-icon fas fa-tachometer-alt"></i>
                      <p>Dashboard</p>
                    </a>
                  </li> */}

                  <li class="nav-item">
                    <NavLink to="/" class="nav-link active">
                      <i class="nav-icon fas fa-user"></i>
                      <p style={{ fontFamily: "poppins" }}>User Profile</p>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon fas fa-book"></i>
                      <p style={{ fontFamily: "poppins" }}>Documentation</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link" onClick={() => clearStorage()}>
                      <i class="nav-icon fas fa-sign-out-alt"></i>
                      <p style={{ fontFamily: "poppins" }}>Logout</p>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          <div class="content-wrapper">
            <div class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-12">
                    <UserProfile />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="main-footer">
            <strong>
              Copyright &copy; 2021
              <a href="www.vtrusts.com">Vtrusts</a>.
            </strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
              <b>Version</b> 3.1.0-rc
            </div>
          </footer>

          <aside class="control-sidebar control-sidebar-dark"></aside>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
