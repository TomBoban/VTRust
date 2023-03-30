import React, { useState } from "react";
import { withRouter } from "react-router-dom";
// import Button from "../components/button";

import { Api } from "../helpers/api";
import localStorageHelper from "../helpers/localstorage";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const mainStyle = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",

  height: "calc(100vh - 100px)",
  flexDirection: "column",
};
function AuthMobile(props) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const initialValues = {
    username: "",
    password: "",
    comfirmPassword: "",
  };
  const Input = ({ helperText, ...other }) => {
    console.log("other", helperText, other);
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

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter a valid username"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    comfirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const userPassword = data.get("password");
    if (username) {
      setLoading(true);
      Api.post("user/CheckUserName/", { username })
        .then((res) => {
          const { availability } = res.data.result;
          if (availability) {
            if (userPassword && userPassword === data.get("comfirmPassword")) {
              setLoading(false);
              localStorageHelper.setData("user", { username, userPassword });
              localStorageHelper.setData("username", username);
              props.history.push("/otp");
            }
            // else {
            //   setLoading(false);
            //   toast.error("Password mismatch");
            //   setMessage("Password mismatch");
            // }
          } else {
            setLoading(false);
            toast.error("Username not available");
          }
        })
        .catch((e) => {
          if (e?.result) {
            setMessage(e.result.availabilityStatusMesg);
          } else {
            setMessage("Something wrong happend");
          }
          setLoading(false);
        });
    }
    // for (let [key, value] of data.entries()) {
    //   console.log(key, value);
    // }
    // props.history.push("/otp")
  };

  return (
    <div className="main_container" style={mainStyle}>
      <div className="top_header">
        <div className="tp-1 text-uppercase">
          Create an account and discover the benifits
        </div>
        <div className="tp-2"></div>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form className="text-center form_field" onSubmit={onSubmit}>
            <Field
              as={Input}
              label="Username"
              name="username"
              placeholder="Enter username"
              fullWidth
              required
              // helperText={<ErrorMessage name="username" />}
              helperText={() => <ErrorMessage name="username" />}
            />
            <br />
            {/* <div className="form-group">
              <div className="label_name">Username</div>

              <input
                type="text"
                name="username"
                className="form-control "
                placeholder="Please enter Username"
              />
              <p>{<ErrorMessage name="username" />}</p>
            </div> */}
            <Field
              as={Input}
              label="Password"
              name="password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              helperText={() => <ErrorMessage name="password" />}
            />
            <br />
            {/* <div className="form-group">
              <div className="label_name">Password</div>
              <input
                type="password"
                name="userPassword"
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Password"
              />
              <p>{<ErrorMessage name="password" />}</p>
            
            </div> */}
            <Field
              as={Input}
              label="ComfirmPassword"
              name="comfirmPassword"
              placeholder="Comfirm your password"
              type="password"
              fullWidth
              required
              helperText={() => <ErrorMessage name="comfirmPassword" />}
            />
            <br />
            {/* <div className="form-group">
              <div className="label_name">Confirm Password</div>
              <input
                type="password"
                name="confirmPassword"
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Confirm Password"
              />
              <p>{<ErrorMessage name="comformPassword" />}</p>
              
            </div> */}
            <button className="nextSubmit" type="submit" loading={loading}>
              Next
            </button>
            <div className="message" onClick={() => props.history.push("/")}>
              Are you already a member?
            </div>
            {/* <button
          style={{ background: "#FBB03B", width: "36%" }}
          type="submit"
          className="btn sbmt_btn"
          disabled={true}
        >
          Next
        </button> */}
            <p>{message}</p>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default withRouter(AuthMobile);
