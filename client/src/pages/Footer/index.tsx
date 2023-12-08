import React from "react";
import { FooterPage, MainContent, BoxText, BoxTopics, HentLogo, BoxMedias, Social, TextAndLogo } from "./style";
import {Hent, Facebook, Instagram, Youtube} from "../../assets"

export const Footer = () => {
    return(
        <FooterPage>
            <MainContent>
                <TextAndLogo>
                    <HentLogo src={Hent.src} alt="Hent-logo"></HentLogo>
                    <BoxText>
                        A Hent é uma empresa líder em soluções de gestão financeira e recebíveis para loteadores e incorporadoras.
                        Com tecnologia inovadora, automatizamos processos, proporcionando eficiência e agilidade.
                    </BoxText>
                </TextAndLogo>

                <BoxTopics>
                    <h4>Institucional</h4>
                    <a>Quem somos?</a>
                    <a>Termos de uso</a>
                    <a>Política de privacidade</a>
                    <a>Blog</a>
                </BoxTopics>
                <BoxTopics>
                    <h4>HentSign</h4>
                    <a>Como funciona?</a>
                    <a>Serviços</a>
                    <a>Nosso diferencial</a>
                </BoxTopics>
                <BoxTopics>
                    <h4>Siga nossas redes</h4>
                    {/* <BoxMedias>
                        <Social src={Facebook.src} alt="Facebook-logo"></Social>
                        <Social src={Instagram.src} alt="Instagram-logo"></Social>
                        <Social src={Youtube.src} alt="Youtube-logo"></Social>
                    </BoxMedias> */}
                    <p>CNPJ: 35.429.428/0001-39</p>
                    <p>© Copyright 2023 Hent.</p>
                </BoxTopics>
            </MainContent>
        </FooterPage>
    );
}