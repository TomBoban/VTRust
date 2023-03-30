import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/button";
import { Api } from "../helpers/api";
import localStorageHelper from "../helpers/localstorage";
import Verify from "./Verify";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const mainStyle = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  height: "calc(100vh - 100px)",
};
const AuthOtp = (props) => {
  const userData = localStorageHelper.getData("user");
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // const [resendButton,setResendButton]=useState(false)

  const initialValues = {
    mobileNumber: "",
    email: "",
  };

  // const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email ID is required")
      .email("Enter valid email id"),
    mobileNumber: Yup.string().required("Enter your mobile number"),
  });

  const Input = ({ helperText, ...other }) => {
    return (
      <div>
        <input
          {...other}
          // onChange={(e) => {
          //   setValue(e.target.value);
          //   onChange(e);
          // }}
          className="InputText"
        />
        <div className="errorMessage">{helperText && helperText()}</div>
      </div>
    );
  };

  useEffect(() => {
    if (!userData) {
      props.history.push("/mobile");
    }
  }, [props.history, userData]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const number = phoneNumber;
    console.log(phoneNumber, "phoneNumber2");

    console.log(number, "number");

    const email = data.get("email");

    console.log(number, "num");
    setLoading(true);
    const otp = Math.floor(Math.random() * 90000) + 10000;
    if (email) {
      Api.post("user/SendMail/", { message: `${otp}`, email })
        .then((res) => {
          setLoading(false);
          setVerify(otp);
        })
        .catch((e) => {
          setLoading(false);
        });
    }
    if (number) {
      Api.post("user/SendSMS/", { message: `${otp}`, number: `${number}` })
        .then((res) => {
          setLoading(false);
          setVerify(otp);
        })
        .catch((e) => {
          setLoading(false);
        });
    }
    localStorageHelper.setData("user", { ...userData, number, email });
  };

  if (verify) {
    return <Verify code={verify} onError={() => setVerify(null)} />;
  }
  return (
    <div className="main_container flex-column" style={mainStyle}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form
            className="text-center"
            style={{ width: "70%" }}
            onSubmit={onSubmit}
          >
            <h5 style={{ fontSize: "12px" }} className="text-danger mb-2">
              If you are outside india ,you can get your otp through email
              account.so you must be type your email id unless you will not get
              otp
            </h5>
            <div
              className="form-group d-flex flex-column phone_style"
              style={{ marginTop: "1rem" }}
            >
              <div
                style={{ fontSize: "18px" }}
                className="d-flex mt-4 mb-3  font-weight-bolder"
              >
                Mobile Number
              </div>
              {/* <Field
              as={TextField}
              label="Mobile Number"
              name="mobileNumber"
              placeholder="Enter Your Mobile Number"
              fullWidth
              required
              helperText={<ErrorMessage name="mobileNumber" />}
              className="Input_field"
              inputProps={{ maxLength: 10 }}
            /> */}
              <PhoneInput
                placeholder="Enter Your Mobile Number"
                country={"in"}
                onlyCountries={["in"]}
                name="mobileNumber"
                inputProps={{
                  name: "mobileNumber",
                  required: true,
                  autoFocus: true,
                }}
                disableCountryCode={true}
                inputClass="phoneInput"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e);
                }}
              />
              {/* {mobileError && (
                <div className="errorMessage">
                  Please enter the mobile number
                </div>
              )} */}
              <br />
            </div>
            <div className="form-group">
              <div
                style={{ fontSize: "18px" }}
                className="d-flex  mb-3  font-weight-bolder"
              >
                Email Id
              </div>
              <Field
                as={Input}
                label="Email Id"
                name="email"
                placeholder="Enter Your Email Id"
                fullWidth
                helperText={() => <ErrorMessage name="email" />}
                className="Input_field"
              />
              {/* <input
            type="text"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email id"
          /> */}
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <button loading={loading} type="submit" className="optButton">
              Get Otp
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default withRouter(AuthOtp);
