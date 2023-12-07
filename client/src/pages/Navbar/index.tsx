import React from "react";
import { Header, Logo, List, Link, ListElement, Content } from "./style";
import { Hent } from "../../assets";
import { Button } from "@components";

export default function Navbar() {
  const onclick = () => console.log("cliquei");

  return (
    <Header>
      <Content>
        <Logo src={Hent.src} alt="Logo" />
        <List>
          <ListElement>
            <Link href="#QuemSomos"> Quem Somos </Link>
          </ListElement>
          <ListElement>
            <Link href="#ComoFunciona"> Como Funciona </Link>
          </ListElement>
          <ListElement>
            <Link href="#Serviços"> Serviços </Link>
          </ListElement>
        </List>
      </Content>

      <Button
        color="#fff"
        backgroundColor="#3A4CF1"
        height="37px"
        text="Acesse a HentSign"
        width="266px"
        fontWeight="bold"
        onClick={onclick}
      ></Button>
    </Header>
  );
}
