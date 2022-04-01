import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServicesCard from "../ServicesCard/ServicesCard";
import Reviews from "../Reviews/Reviews";
import About from "../About/About";
import Trainers from "../Trainers/Trainers";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <main className="home">
      <Header />
      <Carousel>
        <div>
          <img src="https://i.ibb.co/HqY2Xqm/1.jpg" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="https://i.ibb.co/vBMSFNW/3.jpg" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="https://i.ibb.co/M93jzYp/2.jpg" style={{ width: "100%" }} />
        </div>
      </Carousel>
      <h1 className="text-info-color mb-5">About us</h1>
      <About></About>
      <br />
      <br />
      <h1 className="text-info-color">Our Courses</h1>
      <ServicesCard></ServicesCard>
      <h1 className="text-info-color">Our Trainers</h1>
      <Trainers></Trainers>
      <h1 className="text-info-color">Customer Reviews</h1>
      <Reviews></Reviews>
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
