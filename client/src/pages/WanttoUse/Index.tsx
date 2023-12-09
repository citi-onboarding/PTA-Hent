import React from "react";
import {
  ContentAccess,
  Rectangle,
  TextSection1,
  TextSection2,
  Triangle1,
  Triangle2,
  Triangle3,
  Triangle4,
} from "./style";
import { Button } from "@components";

export default function WanttoUse() {
  const onclick = () => console.log("cliquei");

  return (
    <ContentAccess>
      <Rectangle>
        <Triangle1 />
        <Triangle2 />

        <TextSection1>
          Emita certificados digitais em minutos, assine <br />
        </TextSection1>
        <TextSection2>e registre alienações de forma prática.</TextSection2>
        <Button
          color="#3A4CF1"
          backgroundColor="#fff"
          height="41.705px"
          text="Quero usar a HentSign"
          width="256.584px"
          fontWeight="700;"
          onClick={onclick}
        ></Button>
        <Triangle3 />
        <Triangle4 />
      </Rectangle>
    </ContentAccess>
  );
}
