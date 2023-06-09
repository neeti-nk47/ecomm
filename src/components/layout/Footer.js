import React from "react";
import "./Footer.css";
import { AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";
import { SlSocialSpotify } from "react-icons/sl";
function Footer() {
  return (
    <div className="footer row">
      <div className="brand-name col-5 ">
        <h1>The Generics</h1>
      </div>
      <div className="icons col ">
        <span className="yt m-2">
          <AiOutlineYoutube fontSize={"40px"}></AiOutlineYoutube>
        </span>
        <span className="fb m-2">
          <AiOutlineFacebook fontSize={"40px"}></AiOutlineFacebook>
        </span>
        <span className="spotify m-2">
          <SlSocialSpotify fontSize={"40px"}></SlSocialSpotify>
        </span>
      </div>
    </div>
  );
}

export default Footer;
