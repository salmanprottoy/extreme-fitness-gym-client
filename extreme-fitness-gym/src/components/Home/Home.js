import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import man1 from "../../data/images/1.jpg";
import woman from "../../data/images/2.jpg";
import man2 from "../../data/images/3.jpg";

const Home = () => {
  return (
    <main className="home">
      <Header />
      <Carousel>
        <div>
          <img src={man1} style={{ width: "100%" }} />
        </div>
        <div>
          <img src={man2} style={{ width: "100%" }} />
        </div>
        <div>
          <img src={woman} style={{ width: "100%" }} />
        </div>
      </Carousel>
      <Footer />
    </main>
  );
};

export default Home;
