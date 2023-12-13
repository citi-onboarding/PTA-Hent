import React from "react";
import { DixTextLeft, Pag, Nodemailer, Inputs1, Buttons, ButtonTextDiv, DoisInputs, NumTelInput, EmailInput, InputAndText, Icon, IconAndText } from "./style";
import { IconLosangle } from "../../assets";
export const TelaForm = () => {
    return(
        <Pag>
            <IconAndText>
                <DixTextLeft>
                    <h1>Descubra como o HentSign faz você economizar tempo e dinheiro, além de gerar maior eficiência em todas as etapas da venda de loteamentos</h1>
                </DixTextLeft>
                <Icon>
                    <img src={IconLosangle.src} alt="Losango"></img>
                </Icon>
            </IconAndText>
            <Nodemailer>
                
                <h1> Preencha o formulário e veja a transformação do seu negócio: </h1>

                <p>Nome*:</p>
                <Inputs1 type="text" placeholder="Nome completo"></Inputs1>
                <p>Nome da empresa*:</p>
                <Inputs1 type="text" placeholder="Nome da empresa"></Inputs1>
                <p>CNPJ*:</p>
                <Inputs1 type="text" placeholder="00.000.000/0000-00"></Inputs1>

                <DoisInputs>
                    <InputAndText>
                        <span>Telefone*:</span>
                        <NumTelInput type="tel" autoComplete="on" placeholder="(00) 0 0000-0000"/>
                    </InputAndText>
                    <InputAndText>
                        <span>Email*:</span>
                        <EmailInput type="email" autoComplete="on" placeholder="meuemail@email.com.br"/>
                    </InputAndText>
                </DoisInputs>

                <Buttons type="button" style={{backgroundColor: "#3A4CF1", border: "none", marginTop: "39px"}}>
                    <ButtonTextDiv>
                        <span style={{color: "white", fontSize: "20px", fontWeight: "500", textAlign: "center"}}>Quero usar a HentSign (gratuito)</span>
                    </ButtonTextDiv>
                </Buttons>

                <Buttons type="button" style={{border:"1px solid #25D366", backgroundColor: "white", marginTop: "18px"}}>
                    <ButtonTextDiv>
                        <span style={{color: "#25D366", fontSize: "20px", fontWeight: "500", textAlign: "center"}}>Chamar no Whatsapp (gratuito)</span>
                    </ButtonTextDiv>
                </Buttons>
                
            </Nodemailer>
        </Pag>
    );
}