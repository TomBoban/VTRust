import React, { useEffect, useState } from "react";
// import Gpay from "../components/payment/gpay";
import { Button, Modal, Form, Row, Col, Image } from "react-bootstrap";
import localStorageHelper from "../helpers/localstorage";
import { Api } from "../helpers/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function Plans() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);

  const userName = localStorageHelper.getData("username");
  const userId = localStorageHelper.getData("userId");

  useEffect(() => {
    if (!userName) {
      history.push("/");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await Api.post("user/CustomerPay", {
        TransactionIdCustomer: transactionId,
        userId: `${userId}`,
        Amount: "500",
      });
      console.log(res, "res1");
      setShow(false);
      if (res.data.result.status) {
        toast.success("Thank you, your account will be soon verified");
      } else {
        toast.error("Oops, something went wrong!!");
      }
      history.push("/");
      setLoading(false);
    } catch (e) {
      history.push("/");
      setLoading(false);
    }
  };

  return (
    <div className="plan_page">
      <div className="plan_container">
        <div className="plan_head">plans</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            className="plans"
            style={{ width: "200px", height: "100%" }}
            src={"/images/sub1.png"}
            alt=""
            onClick={() => setShow(true)}
          />
          {/* <Gpay/> */}
          <img
            className="plans"
            style={{ width: "250px" }}
            src={"/images/sub2.png"}
            alt=""
            onClick={() => setShow(true)}
          />
        </div>
      </div>
      {show && (
        <>
          <Modal size="lg" show={show} onHide={() => setShow(false)}>
            <Modal.Header className="modal_header" closeButton>
              <Modal.Title className="modal_title">Payment Process</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal_body">
              <Form onSubmit={submitHandler}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label column sm="3" style={{ color: "black" }}>
                    Account Number
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="74910200001131"
                      className="form_control"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label style={{ color: "black" }} column sm="3">
                    IFSC CODE
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="BARB0VJCHRI"
                      className="form_control"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label style={{ color: "black" }} column sm="3">
                    Account Name
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="VIRADVISWAKARMA EDUCATIONAL & INDUSTRIAL DEVELOPMENT CHARITABLE FOUNDATION"
                      className="form_control"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label style={{ color: "black" }} column sm="3">
                    UPI ID
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="virad90372@barodampay"
                      className="form_control"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label style={{ color: "black" }} column sm="3">
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

                <Button
                  disabled={loading}
                  className="button_submit"
                  type="submit"
                >
                  {loading ? "loading..." : "Submit"}
                </Button>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-4"
                  controlId="formBasicEmail"
                >
                  <Form.Label
                    column
                    sm="5"
                    className="mt-4"
                    style={{ color: "black", fontWeight: "bolder" }}
                  >
                    *You can also pay with any BHIM UPI APP
                  </Form.Label>
                  <Col className="d-flex mt-2" sm="7">
                    <Image
                      src="/Images/upiId.jpg"
                      alt="Upi Id"
                      className="upiImg"
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="modal_footer">
              <Button
                className="button_close"
                variant="secondary"
                onClick={() => setShow(false)}
                type="submit"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Plans;
