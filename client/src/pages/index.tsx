import React from "react";
import { HomeContainer } from "./style";
import Services from "./Services";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  
  return (
    <HomeContainer>
      <Navbar />
      <Services />
      <Footer />
    </HomeContainer>
  );
}
