import * as React from "react";
import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from "./Banner"
import Features from "./Work"
import Course from "./Course"
import Expert from "./Expert"
import Newsletter from "./Newsletter"
import Gallery from "./Gallery"

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <Course />
      {/* <Expert /> */}
      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
