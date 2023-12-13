import React from "react";
import { HomeContainer } from "./style";
import { Footer } from "./Footer";
import { TelaForm } from "./TelaFormulario";
import Navbar from "./Navbar";

export default function Home() {
  
  return (
    <HomeContainer>
    {/* <Navbar /> */}
    <TelaForm />
    {/* <Footer /> */}
    </HomeContainer>
  );
}
