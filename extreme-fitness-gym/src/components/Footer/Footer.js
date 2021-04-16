import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="text-info p-3">
      &copy; {new Date().getFullYear()} Developed by{" "}
      <a className="text-info" href="https://github.com/salmanprottoy">
        {" "}
        <FontAwesomeIcon icon={faGithub} /> Salman Prottoy{" "}
      </a>
      {"."} All Rights Reserved.
    </div> */}
      <div className="container bottom_border">
        <div className="row">
          <div className=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

            <p className="mb10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              <i className="fa fa-location-arrow"></i>1229, Dhaka, Bangladesh{" "}
            </p>
            <p>
              <i className="fa fa-phone"></i> +88-01722222222{" "}
            </p>
            <p>
              <i className="fa fa fa-envelope"></i> info@example.com{" "}
            </p>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

            <ul className="footer_ul_amrc">
              <li>
                <a href="http://webenlance.com">Image Rectoucing</a>
              </li>
              <li>
                <a href="http://webenlance.com">Clipping Path</a>
              </li>
              <li>
                <a href="http://webenlance.com">Hollow Man Montage</a>
              </li>
              <li>
                <a href="http://webenlance.com">Ebay & Amazon</a>
              </li>
              <li>
                <a href="http://webenlance.com">Hair Masking/Clipping</a>
              </li>
              <li>
                <a href="http://webenlance.com">Image Cropping</a>
              </li>
            </ul>
          </div>

          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

            <ul className="footer_ul_amrc">
              <li>
                <a href="http://webenlance.com">Remove Background</a>
              </li>
              <li>
                <a href="http://webenlance.com">Shadows & Mirror Reflection</a>
              </li>
              <li>
                <a href="http://webenlance.com">Logo Design</a>
              </li>
              <li>
                <a href="http://webenlance.com">Vectorization</a>
              </li>
              <li>
                <a href="http://webenlance.com">Hair Masking/Clipping</a>
              </li>
              <li>
                <a href="http://webenlance.com">Image Cropping</a>
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
            <a href="http://webenlance.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="http://webenlance.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="http://webenlance.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="http://webenlance.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
