import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container bottom_border">
        <div className="row">
          <div className=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

            <p>
              <i className="fa fa-location-arrow"></i> 1229, Dhaka, Bangladesh{" "}
            </p>
            <p>
              <i className="fa fa-phone"></i> +880-1712222222{" "}
            </p>
            <p>
              <i className="fa fa fa-envelope"></i> info@example.com{" "}
            </p>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

            <ul className="footer_ul_amrc">
              <li>
                <a href="/">Body Building</a>
              </li>
              <li>
                <a href="/">Weight Lifting</a>
              </li>
              <li>
                <a href="/">Cardio</a>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

            <ul className="footer_ul_amrc">
              <li>
                <a href="/">Martial Arts</a>
              </li>
              <li>
                <a href="/">Yoga</a>
              </li>
              <li>
                <a href="/">Judo</a>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

            <ul className="footer_ul2_amrc">
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="foote_bottom_ul_amrc">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <p className="text-center">
          &copy; {new Date().getFullYear()} Developed by{" "}
          <a className="text-info" href="https://github.com/salmanprottoy">
            {" "}
            <FontAwesomeIcon icon={faGithub} /> Salman Prottoy{" "}
          </a>
          {"."} All Rights Reserved.
        </p>

        <ul className="social_footer_ul">
          <li>
            <a href="https://www.facebook.com/salman.prottoy1/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/salman_prottoy">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/salman-prottoy/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/salman_prottoy/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
