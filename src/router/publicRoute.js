import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Logo from "../pages/Logo";
import SignUp from "../pages/SignUp";
import Header from "../pages/Header";
import AuthMobile from "../pages/AuthMobile";
import AuthOtp from "../pages/AuthOtp";
import Verify from "../pages/Verify";
import Plans from "../pages/Plans";
import Contact from "../container/Contact";
import About from "../pages/About";
import PriceCard from "../container/PriceCard";
import Home from "../pages/Home";
import FooterMain from "../container/FooterMain";

export default function PublicRoute() {
  const [loading, setLoading] = useState(
    window.location.pathname === "/" ? true : false
  );
  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 18000);
  }, []);
  return (
    <>
      {loading ? null : <Header />}
      <Switch>
        <Route path="/Logo">
          <Logo />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/mobile">
          <AuthMobile />
        </Route>
        <Route path="/otp">
          <AuthOtp />
        </Route>
        <Route path="/verify">
          <Verify />
        </Route>
        <Route path="/select-plans">
          <Plans />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/price">
          <PriceCard />
        </Route>
        <Route
          path="/"
          render={() =>
            loading ? <Route component={Logo} /> : <Route component={Home} />
          }
        />
      </Switch>
      {loading ? null : <FooterMain />}
    </>
  );
}
