import React from "react";
import { HomeContainer } from "./style";
import Services from "./Services";
import Comparative from "./Comparative";
import { Footer } from "./Footer";
import { TelaForm } from "./TelaFormulario";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import WanttoUse from "./WanttoUse/Index";

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <AboutUs />
      <WanttoUse />
      <Services />
      <Comparative />
      <TelaForm />
      <Footer />
    </HomeContainer>
  );
}
