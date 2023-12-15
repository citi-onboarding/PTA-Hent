import React from "react";
import { HomeContainer } from "./style";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import WanttoUse from "./WanttoUse/Index";

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <AboutUs />
      <WanttoUse />
      <Footer />
    </HomeContainer>
  );
}
