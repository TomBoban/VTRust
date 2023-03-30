import React from "react";
import "./priceCard.css";
const PriceCard = () => {
  return (
    <div>
      <div class="pricing-area">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single-price">
                <div class="price-header">
                  <h3 class="title">Professional</h3>
                </div>
                <div class="price-value">
                  <div class="value">
                    <span class="currency">$</span>{" "}
                    <span class="amount">
                      19.<span>99</span>
                    </span>{" "}
                    <span class="month">/month</span>
                  </div>
                </div>
                <ul class="deals">
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                </ul>
                <a href="#">Get Started</a>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="single-price">
                <div class="price-header">
                  <h3 class="title">Corporate</h3>
                </div>
                <div class="price-value">
                  <div class="value">
                    <span class="currency">$</span>{" "}
                    <span class="amount">
                      39.<span>99</span>
                    </span>{" "}
                    <span class="month">/month</span>
                  </div>
                </div>
                <ul class="deals">
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                </ul>
                <a href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceCard;
