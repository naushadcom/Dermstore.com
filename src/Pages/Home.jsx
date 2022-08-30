import React from "react";
import { Navbar } from "../Components/Navbar";
import { SimpleSlider } from "../Components/Slider1";
import { Slider2 } from "../Components/slider2";
import { ShopByCategory } from "../Components/ShopByCategory";
import { Slider3 } from "../Components/slider3";
import { Slider4 } from "../Components/slider4";
import { Slider5 } from "../Components/Slider5";
import { Slider6 } from "../Components/slider6";
import { Featurebrands } from "../Components/Featurebrands";
import { Slider7 } from "../Components/slider7";
import Footer from "../Components/Footer";
export const Home = () => {
  return (
    <>
      <SimpleSlider />
      <Slider2 />
      <ShopByCategory />
      <Slider3 />
      <Slider4 />
      <Slider5 />
      <Slider6 />
      <Featurebrands />
      <Slider7 />
    </>
  );
};
