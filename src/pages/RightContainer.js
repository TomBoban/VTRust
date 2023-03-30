import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../axios";
import Button from "../components/button";
import { Api } from "../helpers/api";
import localStorageHelper from "../helpers/localstorage";

export function RightContainer(props) {
  // const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [user, setUser] = useState();

  // useEffect(() => {
  //   const loggedInUser = localStorageHelper.getData("username");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  const signIn = () => {
    setLoading(true);
    Api.post("user/login/", { username: username, userPassword: userPassword })
      .then((res) => {
        const status = res.data.result.loginStatus;
        if (status) {
          localStorageHelper.setData("auth", status);
          localStorageHelper.setData("username", username);
          setLoading(false);
          props.history.push("/");
        } else {
          toast.error("Failed to login");
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleLoggedInState = () => {
    setCheckboxValue(!checkboxValue);
    console.log(checkboxValue, "checkboxValue");
  };

  return (
    <div className="signin_tab">
      <div className="container p-0">
        <div className="row">
          <div className="col-8">
            <div style={{ fontSize: "2rem" }} className="vtr">
              {" "}
              Be a Vtrustian
            </div>
          </div>
          {/* <div className="col-4 donate_media">
            <img
              src={"/Images/donate.png"}
              className="donate_media_image"
              alt=""
            />
          </div> */}
        </div>

        <div style={{ fontSize: "21px", fontWeight: "900" }}>
          To develop our community
        </div>
      </div>
      {/* <form onSubmit={()=>signIn}> */}
      <div className="form-group" style={{ marginTop: "1rem" }}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setUsername(e.target.value)}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Username"
        />
      </div>
      <div className="form-group">
        <input
          onChange={(e) => setUserPassword(e.target.value)}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-check mb-4">
        <span>
          {/* <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          /> */}
          <input
            type="checkbox"
            name="save_login_state"
            label="Keep me signed in"
            checked={checkboxValue}
            onChange={handleLoggedInState}
          />
          <label className="form-check-label" for="exampleCheck1">
            Keep me signed in
          </label>
        </span>
        <span>Forgot password</span>
      </div>
      <Button
        style={{ background: "#FBB03B" }}
        // type="submit"
        onClick={() => signIn()}
        loading={loading}
      >
        Sign in
      </Button>
      <div className="p-2">
        <span>Not a member yet?</span>
        <button
          onClick={() => props.history.push("/mobile")}
          style={{ background: "white" }}
          className="btn sbmt_btn mt-2"
        >
          Sign up
        </button>
        <div className=" mb-2 download">
          <a
            href="/Images/Niyamavali.pdf"
            download="niyamavali"
            className="download"
          >
            <i class="fas fa-download text-danger"></i>
            <span style={{ fontSize: "1rem" }} className="ml-1">
              നിയമാവലി
            </span>
          </a>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}

export default withRouter(RightContainer);
