import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { Api } from "../helpers/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import localStorageHelper from "../helpers/localstorage";
import Header from "./Header";
import FooterMain from "../container/FooterMain";
import { clearStorage } from "../utilities";

const Unverfied = () => {
  const [transactionId, setTransactionId] = useState("");
  let userName = localStorageHelper.getData("username");
  const userId = localStorageHelper.getData("userId");

  const history = useHistory();
  React.useEffect(() => {
    clearStorage();
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post("user/CustomerPay", {
        TransactionIdCustomer: transactionId,
        userId: `${userId}`,
        Amount: "500",
      });
      if (res.data.result.Status) {
        history.push("/");
      } else {
        toast.error("Oops, something went wrong!!");
      }
    } catch (e) {}
  };

  const toSelectedPlans = () => {
    history.push("/select-plans");
  };
  return (
    <>
      <Header />
      <div className="container unver_cont">
        <div className="row">
          <div className="col-5">
            <div>
              <img src="/Images/ver2.jpeg" alt="" />
            </div>
          </div>
          <div className="col-7">
            <div className="verified_message">
              Your account is not verified. Please wait for verification
              Message.If you have any problem again provide Transaction Id Below
            </div>
            <div className="form_container">
              <Form onSubmit={submitHandler}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label className="form_label2" column sm="3">
                    Transaction ID
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="name"
                      value={transactionId}
                      placeholder="Enter Transaction Id"
                      onChange={(e) => setTransactionId(e.target.value)}
                    />
                  </Col>
                  <Form.Text className="text-muted mute_text">
                    * After entering the Transaction Id, please click on Submit
                  </Form.Text>
                </Form.Group>
                <Button className="ver_button" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div className="bottom_container">
              <div className="verified_message">
                Not yet selected a plan yet ? Go check out!!
              </div>
              <Button onClick={toSelectedPlans} className="ver_button_plan">
                Go To Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FooterMain></FooterMain>
    </>
  );
};

export default Unverfied;
