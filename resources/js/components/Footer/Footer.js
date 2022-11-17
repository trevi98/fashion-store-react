import React from "react";
import "./Footer.css";
import AS from "../../images/307307350_53880.png";
import Google from "../../images/Group 74.png";
import { AiFillApple } from "react-icons/ai";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
function Footer() {
    return (
        <div className="footer">
            <div className="info">
                <div className="image">
                    <img src={AS} />
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt{" "}
                    </p>
                </div>
                <div className="links">
                    <div className="link">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Register</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="link">
                        <h3>USEFUL LINKS</h3>
                        <ul>
                            <li>
                                <a href="#">Help Center</a>
                            </li>
                            <li>
                                <a href="#">Ask Question</a>
                            </li>
                            <li>
                                <a href="#">Send Feedback</a>
                            </li>
                            <li>
                                <a href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#">Send Feedback</a>
                            </li>
                        </ul>
                    </div>
                    <div className="link">
                        <h3>CONTACT</h3>
                        <ul>
                            <li>lorem@lorem.com</li>
                            <li>Mobile: +11 123 123 123</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="icons">
                <div className="buy">
                    <div className="inst">
                        <img src={Google} />
                        <div className="content">
                            <p>GET IT ON</p>
                            <span>Google Play</span>
                        </div>
                    </div>
                    <div className="inst">
                        <AiFillApple fontSize={27} />
                        <div className="content">
                            <p>Download om the</p>
                            <span>App Store</span>
                        </div>
                    </div>
                </div>
                <div className="social">
                    <FaFacebookF color="#000000" />
                    <FaInstagram color="#000000" />
                    <FaTwitter color="#000000" />
                    <FaLinkedin color="#000000" />
                    <FaYoutube color="#000000" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
