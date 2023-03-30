import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import localStorageHelper from "../helpers/localstorage";
import { Api } from "../helpers/api";
import { Spinner, Alert, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const history = useHistory();
  const [loading, seLoading] = useState(true);
  useEffect(() => {
    Api.post("user/fetchUser", {
      username: localStorageHelper.getData("username"),
    })
      .then((res) => {
        seLoading(false);
        setData(res.data.result);
        if (!res.data.result.userVerified) {
          history.push("/unverified");
        }
      })
      .catch((e) => {
        seLoading(false);
        toast.error("Server error");
      });
  }, [history]);

  if (loading) {
    return (
      <div
        className="p-5 container d-flex justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <div className="p-5">
      {/* <div class="alert alert-success" role="alert">
        Your account is successfully activated
      </div> */}
      <Alert show={show} variant="success">
        <Alert.Heading style={{ fontFamily: "poppins" }}>
          Activated!!
        </Alert.Heading>
        <p style={{ fontFamily: "poppins" }}>
          Your account is successfully verified.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
      <div>
        <form>
          <div class="form-row " style={{ marginTop: "7rem" }}>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Username</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="username"
                disabled
                value={data.username}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">First Name</label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="first name"
                disabled
                value={data.first_name}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Last Name"
                disabled
                value={data.first_name}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Nominee</label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="Nominee"
                disabled
                value={data.nominee}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Address Line 1</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Address Line"
                disabled
                value={data.address ? data.address.street_addresss : ""}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Address Line 2</label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="Address Line"
                disabled
                value={data.address ? data.address.street_addresslin2 : ""}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                disabled
                value={data.address ? data.address.city : ""}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">State</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                disabled
                value={data.address ? data.address.region : ""}
              />
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip Code</label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                disabled
                value={data.address ? data.address.zip_code : ""}
              />
            </div>
          </div>
          <div class="form-group"></div>
        </form>
      </div>
    </div>
  );
};
export default UserProfile;
