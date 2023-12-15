import React from "react";
import {
  MainTitle,
  TextContent,
  SubTitle,
  Matter,
  TriangleIcon,
  Content,
  ImageSignature,
  ImageDetail,
} from "./style";
import { Assinatura, Detalhes, Triangle } from "../../assets";

export default function AboutUs() {
  return (
    <Content>
      <TextContent>
        <SubTitle>Dê adeus à burocracia dos cartórios tradicionais</SubTitle>
        <MainTitle>HentSign</MainTitle>
        <Matter>
          Uma plataforma de gestão de <br />
          contratos para o setor imobiliário,
          <br /> que simplifica o processo de
          <br /> registros e assinaturas digitais,
          <br /> garantindo segurança em
          <br /> todo o processo
        </Matter>
        <TriangleIcon src={Triangle.src} alt="Triangle" />
      </TextContent>

      <ImageSignature src={Assinatura.src} alt="Assinatura de contratos" />

      <ImageDetail src={Detalhes.src} alt="Detalhes de contratos" />
    </Content>
  );
}
