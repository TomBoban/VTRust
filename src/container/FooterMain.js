import React from "react";
import { Link } from "react-router-dom";
import "./FooterMain.css";
const FooterMain = () => {
  return (
    <div>
      <footer class="footer-area footer--light">
        <div class="footer-big">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-12">
                <div class="footer-widget">
                  <div class="widget-about" style={{ marginTop: "-2rem" }}>
                    <img
                      src="/Images/VtrustLogo.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu footer-menu--1">
                    <h4 class="footer-widget-title">UsefulLinks</h4>
                    <ul>
                      <li>
                        <Link to="/privacypolicy">Privacy Policy</Link>
                      </li>
                      <li>
                        <a href="#">Donate</a>
                      </li>
                      <li>
                        <Link to="/refundpolicy">Refund Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms&condition">
                          Terms &amp; Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu">
                    <h4 class="footer-widget-title">Latest News</h4>
                    <ul>
                      <li>
                        <a href="#">Donation</a>
                        <br />
                        <span style={{ fontSize: "10px" }}>25 July 2021</span>
                      </li>
                      <li>
                        <a href="#">Provided study assistance</a>
                        <br></br>
                        <span style={{ fontSize: "10px" }}>31 August 2021</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu no-padding">
                    <h4 class="footer-widget-title">Get Connected</h4>
                    <ul>
                      <li>info.vtrusts@gmail.com</li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="footer_social">
              <a href="https://www.facebook.com/groups/633446384290652/?ref=share">
                <i
                  class="fab fa-facebook-square"
                  style={{ marginRight: "6px" }}
                ></i>
              </a>

              <i
                class="fab fa-instagram-square"
                style={{ marginRight: "6px" }}
              ></i>

              <i
                class="fab fa-twitter-square"
                style={{ marginRight: "6px" }}
              ></i>
              <i
                class="fab fa-youtube-square"
                style={{ marginRight: "6px" }}
              ></i>
            </div> */}
          </div>
        </div>

        <div class="mini-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="copyright-text">
                  <p>
                    © 2021
                    <a href="#">Vtrusts.com</a>. All rights reserved. Created by
                    <a href="#">Vtrusts.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default FooterMain;
