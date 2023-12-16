import React from "react";
import {
  BlockContainer,
  TopPhrase,
  ColumnsContainer,
  Column1,
  Column2,
  IconContainer,
  TextContainer,
  ColumnIcon,
  ColumnIconHent,
  DescriptionTitle,
  Title,
  Description,
  ColumnDescription,
} from "./style";
import { Icon, Check, XIcon } from "../../assets";

const MyComponent: React.FC = () => {
  return (
    <BlockContainer>
      <TopPhrase>
        Veja quantos processos você pode evitar, usando o HentSign
      </TopPhrase>

      <ColumnsContainer>
        <Column1>
          <DescriptionTitle>
            <ColumnIconHent src={Icon.src} alt="Icon" />
            <Title>HentSign</Title>
          </DescriptionTitle>

          <Description>
            <IconContainer>
              <ColumnIcon src={Check.src} alt="CheckIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>
                Crie um certificado digital em minutos
              </ColumnDescription>
            </TextContainer>
          </Description>

          <Description>
            <IconContainer>
              <ColumnIcon src={Check.src} alt="CheckIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>
                Assine os documentos em qualquer lugar
              </ColumnDescription>
            </TextContainer>
          </Description>

          <Description>
            <IconContainer>
              <ColumnIcon src={Check.src} alt="CheckIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>
                Registre em cartório com eficiência
              </ColumnDescription>
            </TextContainer>
          </Description>

          <Description>
            <IconContainer>
              <ColumnIcon src={Check.src} alt="CheckIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>Não precisa sair de casa</ColumnDescription>
            </TextContainer>
          </Description>

          <Description>
            <IconContainer>
              <ColumnIcon src={Check.src} alt="CheckIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>
                Automatização e agilidade no processo de assinatura e registro
              </ColumnDescription>
            </TextContainer>
          </Description>
        </Column1>

        <Column2>
          <DescriptionTitle>
            <Title>Cartórios tradicionais</Title>
          </DescriptionTitle>

          <Description>
            <IconContainer>
              <ColumnIcon src={XIcon.src} alt="XIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>
                Assinatura presencial de todas as partes (comprador, vendedor e
                sócio)
              </ColumnDescription>
            </TextContainer>
          </Description>

          <Description>
            <IconContainer>
              <ColumnIcon src={XIcon.src} alt="XIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>
                Vários dias para recolhimento de assinaturas
              </ColumnDescription>
            </TextContainer>
          </Description>

          <Description>
            <IconContainer>
              <ColumnIcon src={XIcon.src} alt="XIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>
                Reconhecimento de firma por semelhança
                <br /> no cartório de notas
              </ColumnDescription>
            </TextContainer>
          </Description>

          <Description>
            <IconContainer>
              <ColumnIcon src={XIcon.src} alt="XIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>
                Custos com deslocamento até o cartório
              </ColumnDescription>
            </TextContainer>
          </Description>

          <Description>
            <IconContainer>
              <ColumnIcon src={XIcon.src} alt="XIcon" />
            </IconContainer>
            <TextContainer>
              <ColumnDescription>
                Atraso e burocracia excessiva no processo <br /> de assinatura
              </ColumnDescription>
            </TextContainer>
          </Description>
        </Column2>
      </ColumnsContainer>
    </BlockContainer>
  );
};

export default MyComponent;
