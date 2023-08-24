import React from "react";
import Tajin from "../Assets/tajn.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
       
        <div className="home-text-section">
          <h1 className="primary-heading">
          Savor the Flavors of Morocco, Delivered Fresh & Steaming
          </h1>
          <p className="primary-text">
          Discover the Moroccan Culinary Experience: Our Skilled Chefs Handle the Prep - From Chopping to Marinating - You Enjoy Cooking Fresh and Healthy
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={Tajin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
