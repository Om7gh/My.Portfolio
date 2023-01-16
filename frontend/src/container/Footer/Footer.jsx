import React, { useRef } from "react";
import ReactWhatsapp from "react-whatsapp";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import emailjs from "@emailjs/browser";
import "./Footer.scss";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_55hp0j9",
        "template_psfn2rk",
        form.current,
        "NtX7kweMVrspIEg94"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Send Successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">
        Start Your Business with <span>chat with me</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:wasaby159@gmail.com" className="p-text">
            wasaby159@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <ReactWhatsapp
            number="0626988786"
            message="Hi ! i'am interested !"
            style={{
              border: "none",
              cursor: "pointer",
              padding: ".6rem 1.2rem",
              background: "none",
              color: "var(--gray-color)",
            }}
          >
            +212 626988786
          </ReactWhatsapp>
        </div>
      </div>

      <form
        className="app__footer-form app__flex"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="app__flex">
          <input
            required
            minLength={4}
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="user_name"
          />
        </div>
        <div className="app__flex">
          <input
            required
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="user_email"
          />
        </div>
        <div>
          <textarea
            required
            minLength={10}
            maxLength={50}
            className="p-text"
            placeholder="Your Message"
            name="user_message"
          />
        </div>
        <input type="submit" value="Send" className="p-text" />
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
