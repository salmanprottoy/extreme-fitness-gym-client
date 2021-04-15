import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServicesCard from "../ServicesCard/ServicesCard";
import Reviews from "../Reviews/Reviews";

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
      <h1 className="text-info">Our Courses</h1>
      <ServicesCard></ServicesCard>
      <h1 className="text-info">Customer Reviews</h1>
      <Reviews></Reviews>
      <Footer />
    </main>
  );
};

export default Home;