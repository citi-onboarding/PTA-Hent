import React from "react";
import { FooterPage, MainContent, BoxText, BoxTopic1, BoxTopic2, BoxMedias, Social, HentLogo, TextAndLogo, Media, HentInfo } from "./style";
import {Hent, Facebook, Instagram, Youtube} from "../../assets"

export const Footer = () => {
    return(
        <FooterPage>
            <MainContent>
                <TextAndLogo>
                    <HentLogo src={Hent.src} alt="Logo-hent"></HentLogo>
                    <BoxText>
                        <p>
                            A Hent é uma empresa líder em soluções de gestão financeira e recebíveis para loteadores e incorporadoras. Com tecnologia inovadora,
                            automatizamos processos, proporcionando eficiência e agilidade.
                        </p>
                    </BoxText>
                </TextAndLogo>

                <BoxTopic1>
                    <h4>Institucional</h4>
                    <a>Quem somos?</a>
                    <a>Termos de uso</a>
                    <a>Política de privacidade</a>
                    <a>Blog</a>
                </BoxTopic1>
                <BoxTopic2>
                    <h4>HentSign</h4>
                    <a>Como funciona?</a>
                    <a>Serviços</a>
                    <a>Nosso diferencial</a>
                </BoxTopic2>
                <Media>
                    <h4>Siga nossas redes</h4>
                    <BoxMedias>
                        <Social target="_blank"><img src={Facebook.src} alt="Facebook"></img></Social>
                        <Social target="_blank"><img src={Instagram.src} alt="Instagram"></img></Social>
                        <Social target="_blank"><img src={Youtube.src} alt="Youtube"></img></Social>
                    </BoxMedias>
                    <HentInfo>
                        <p>CNPJ: 35.429.428/0001-39 © Copyright 2023 Hent.</p>
                    </HentInfo>
                </Media>
            </MainContent>
        </FooterPage>
    );
}