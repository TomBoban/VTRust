import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  EmailShareButton,
  FacebookShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  InstapaperShareButton,
  InstapaperIcon,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Nav, Navbar, NavDropdown, Modal } from "react-bootstrap";

function Header() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="header">
      <div className="navbarClass">
        <Navbar
          style={{ position: "relative", zIndex: 999 }}
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
        >
          <Navbar.Brand href="#home">
            <img
              style={{ width: "75px" }}
              src="/Images/VtrustLogo.gif"
              alt=""
            />
            Vtrust
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              <Link onClick={() => setLgShow(true)}>Matrimony</Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Shop</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
            </Nav>
            <Nav>
              <Link onClick={() => setLgShow(true)}>Shop</Link>
              <Link eventKey={2} onClick={() => setLgShow(true)}>
                Event
              </Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="container header_main">
        {/* <div className="social_div text-center"> */}
        <div className="row">
          <div className="col-8 d-flex justify-content-center align-items-center ">
            <div className="pl-2">
              {/* <EmailShareButton
                name={"fwef"}
                title={"fwef"}
                url={window.location.href}
              >
                <EmailIcon round={true} size={36}></EmailIcon>
                info@vtrust.in
              </EmailShareButton>
            </div>
            <div className="pl-4">
              <WhatsappShareButton
                name={"fwef"}
                title={"fwef"}
                url={window.location.href}
              >
                <WhatsappIcon round={true} size={36}></WhatsappIcon>{" "}
                +91-98987767867
              </WhatsappShareButton> */}
            </div>
          </div>
          <div className="col-2 d-flex justify-content-between allIcons">
            <a
              href="https://www.facebook.com/groups/633446384290652/?ref=share"
              target="_blank"
            >
              <img
                src={"/Images/facebook.png"}
                alt=""
                style={{ height: "54%", marginTop: "20px" }}
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+91 9037250825"
              target="_blank"
            >
              <img
                src={"/Images/whatsapp.png"}
                alt=""
                style={{ height: "54%", marginTop: "20px" }}
              />
            </a>
            <a href="https://twitter.com/vtrusts1" target="_blank">
              <img
                src={"/Images/twitter.png"}
                alt=""
                style={{ height: "54%", marginTop: "20px" }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCXiTWNzGtKBt7LwI4ZyOKRA"
              target="_blank"
            >
              <img
                src={"/Images/youtube.png"}
                alt=""
                style={{ height: "54%", marginTop: "20px" }}
              />
            </a>
            {/* <FacebookShareButton
              name={"fwef"}
              title={"fwef"}
              url={window.location.href}
            >
              <FacebookIcon round={true} size={26}></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton
              name={"fwef"}
              title={"fwef"}
              url={window.location.href}
            >
              <TwitterIcon round={true} size={26}></TwitterIcon>
            </TwitterShareButton>
            <InstapaperShareButton
              name={"fwef"}
              title={"fwef"}
              url={window.location.href}
            >
              <InstapaperIcon round={true} size={26}></InstapaperIcon>
            </InstapaperShareButton>
            <WhatsappShareButton
              name={"fwef"}
              title={"fwef"}
              url={window.location.href}
            >
              <WhatsappIcon round={true} size={26}></WhatsappIcon>
            </WhatsappShareButton> */}
          </div>
          {/* <div className="col-2 ">
            <div className="donate-header">
              <img
                src={"/Images/donate.png"}
                className="donate-button"
                alt=""
              />
            </div>
          </div> */}
        </div>

        <LogoContainer>
          <img className="vtrust_logo" src="/Images/VtrustLogo.gif" alt="" />
        </LogoContainer>
        <HeadMenu>
          <Link to="/">
            <MenuItem>HOME</MenuItem>
          </Link>
          <Link>
            <MenuItem onClick={() => setLgShow(true)}>MATRIMONY</MenuItem>
          </Link>
          <Link>
            <MenuItem onClick={() => setLgShow(true)}>SHOP</MenuItem>
          </Link>
          <Link>
            <MenuItem onClick={() => setLgShow(true)}>EVENT</MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem>ABOUT US</MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem>CONTACT US</MenuItem>
          </Link>
          <Link to="/dashboard">
            <MenuItem>dashboard</MenuItem>
          </Link>
        </HeadMenu>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            style={{ color: "red" }}
          >
            Alert !!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>This Feature Currently Not Available</b>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;

const HeadMenu = styled.div`
  position: absolute;
  width: 68%;
  display: flex;
  justify-content: space-around;
  top: 78px;
  z-index: 7;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  background: white;
  border-radius: 40px;
  height: 50px;
  align-items: center;
  right: 1px;
`;
const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const LogoContainer = styled.div`
  width: 281px;
  height: 250px;
  margin: 10px 0 0 -10px;
  background: white;
  -moz-border-radius: 100px / 50px;
  -webkit-border-radius: 145px / 115px;
  position: absolute;
  top: -64px;
  left: -77px;
  z-index: 999;
`;
