import React from "react";
import "./contact.css";
import "./util.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_vl0amw4",
        e.target,
        "user_sW0zI3FAmF0l41NtBwon5"
      )
      .then(
        (result) => {
          swal({
            title: "Done!",
            text: "We will get back to you shortly!",
            icon: "success",
            timer: 3500,
            button: false,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div class="container-contact100">
        <div class="wrap-contact100">
          <form class="contact100-form validate-form" onSubmit={sendEmail}>
            <span class="contact100-form-title">Send Us A Message</span>

            <label class="label-input100" for="first-name">
              Tell us your name *
            </label>
            <div
              class="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Type first name"
            >
              <input
                id="first-name"
                class="input100"
                type="text"
                name="name"
                placeholder="name"
                required
              />
              <span class="focus-input100"></span>
            </div>
            <div
              class="wrap-input100 rs2-wrap-input100 validate-input"
              data-validate="Type last name"
            >
              <input
                class="input100"
                type="text"
                name="name"
                placeholder="Last name"
                required
              />
              <span class="focus-input100"></span>
            </div>

            <label class="label-input100" for="email">
              Enter your email *
            </label>
            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                id="email"
                class="input100"
                type="text"
                name="email"
                placeholder="Eg. example@email.com"
                required
              />
              <span class="focus-input100"></span>
            </div>

            <label class="label-input100" for="phone">
              Enter phone number
            </label>
            <div class="wrap-input100">
              <input
                id="phone"
                class="input100"
                type="text"
                name="phone"
                placeholder="Eg. +1 800 000000"
                required
              />
              <span class="focus-input100"></span>
            </div>

            <label class="label-input100" for="message">
              Message *
            </label>
            <div
              class="wrap-input100 validate-input"
              data-validate="Message is required"
            >
              <textarea
                id="message"
                class="input100"
                name="message"
                placeholder="Write us a message"
                required
              ></textarea>
              <span class="focus-input100"></span>
            </div>

            <div class="container-contact100-form-btn">
              <button class="contact100-form-btn">Send Message</button>
            </div>
          </form>

          <div class="contact100-more flex-col-c-m">
            <div class="flex-w size1 p-b-47">
              <div class="txt1 p-r-25">
                <span class="lnr lnr-map-marker"></span>
              </div>

              <div class="flex-col size2">
                <span class="txt1 p-b-20">
                  <i class="fa fa-map-marker" />
                  &nbsp;&nbsp;Address
                </span>

                <span class="txt3">
                  KP-XIX/467 Baby vilasam, Edathara,Nilamel<br></br>
                  Pincode : 691535 <br></br>
                  Kollam
                </span>
              </div>
            </div>

            <div class="dis-flex size1 p-b-47">
              <div class="txt1 p-r-25">
                <span class="lnr lnr-phone-handset"></span>
              </div>

              <div class="flex-col size2">
                <span class="txt1 p-b-20">
                  <a href="tel:+91 9037250825">
                    <i class="fa fa-phone" />
                  </a>
                  &nbsp;&nbsp;Lets Talk
                </span>

                <span class="txt3">
                  <a href="tel:+91 9037250825"></a>
                </span>
              </div>
            </div>

            <div class="dis-flex size1 p-b-47">
              <div class="txt1 p-r-25">
                <span class="lnr lnr-envelope"></span>
              </div>

              <div class="flex-col size2">
                <span class="txt1 p-b-20">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info.vtrusts@gmail.com &su=SUBJECT&body=BODY"
                    target="_blank"
                  >
                    <i class="fa fa-envelope" />
                  </a>
                  &nbsp; General Support
                </span>

                <span class="txt3">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info.vtrusts@gmail.com &su=SUBJECT&body=BODY"
                    target="_blank"
                  >
                    info.vtrusts@gmail.com{" "}
                  </a>
                </span>
                <br></br>
                <span>
                  &nbsp;&nbsp;{" "}
                  <a
                    href="https://www.facebook.com/groups/633446384290652/?ref=share"
                    target="_blank"
                  >
                    <i class="fab fa-facebook" />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <a href="" target="_blank">
                    {" "}
                    <i class="fab fa-twitter" />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="" target="_blank">
                    <i class="fab fa-instagram" />
                  </a>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <a
                    href="https://api.whatsapp.com/send?phone=+91 89219 31678"
                    target="_blank"
                  >
                    <i class="fab fa-whatsapp" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
