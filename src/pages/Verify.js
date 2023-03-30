import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/button";
import { Link } from "react-router-dom";

const mainStyle = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  height: "calc(100vh - 100px)",
};
const Verify = ({ code, onError, history }) => {
  const [otp, setOtp] = useState("");
  const [counter, setCounter] = useState(120);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const initialValues = {
    mobileNumber: "",
    email: "",
  };
  const onVerify = () => {
    if (otp == code) {
      history.push("/sign-up");
    } else {
      onError();
    }
  };
  return (
    <div className="main_container flex-column" style={mainStyle}>
      <form className="text-center" style={{ width: "70%" }}>
        <div className="form-group">
          <input
            type="text"
            onChange={(e) => setOtp(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your OTP"
          />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <Button style={{ width: "30%" }} onClick={() => onError()}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 5, width: "30%" }}
          type="submit"
          onClick={onVerify}
        >
          Verify & Next
        </Button>
      </form>
      <div className="otpTimer">
        <div>
          <div fontWeight={500} align="center" color="textSecondary">
            Resend OTP in{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              {" "}
              00:{counter}
            </span>{" "}
          </div>
        </div>
        <div align="center">
          <Link to="/otp">
            <button disabled={!(counter === 0)} style={{ marginLeft: "5px" }}>
              {" "}
              Resend OTP{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Verify);
