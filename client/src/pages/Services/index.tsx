import React from "react";
import { BlockContainer, TopPhrase, ColumnsContainer, Column, ColumnIconNewspaper, ColumnIconKey, ColumnIconPaper, ColumnIconLibrary, ColumnTitle, ColumnDescription } from "./style";
import { Newspaper, Key, Paper, Library } from "../../assets";

const MyComponent: React.FC = () => {
  return (
    <BlockContainer>
      <TopPhrase>Confira os serviços imobiliários que você pode contar com o HentSign</TopPhrase>
      <ColumnsContainer>
        <Column>
          <ColumnIconNewspaper src={ Newspaper.src } alt="Ícone newspaper" />
          <ColumnTitle>Geração automática de contratos</ColumnTitle>
          <ColumnDescription>Formate contratos facilmente através dos templates em nossa plataforma, substituindo o uso de arquivos em Word</ColumnDescription>
        </Column>
        <Column>
          <ColumnIconKey src={ Key.src } alt="Ícone key" />
          <ColumnTitle>Emissão de certificado digital</ColumnTitle>
          <ColumnDescription>Cadastre-se e emita antecipadamente seu certificado digital e dos seus clientes ou agende um horário</ColumnDescription>
        </Column>
        <Column>
          <ColumnIconPaper src={ Paper.src } alt="Ícone paper" />
          <ColumnTitle>Assinatura de contratos</ColumnTitle>
          <ColumnDescription>Todos os envolvidos recebem convites para assinar digitalmente, com opção de registro em cartório</ColumnDescription>
        </Column>
        <Column>
          <ColumnIconLibrary src={ Library.src } alt="Ícone library" />
          <ColumnTitle>Registro eletrônico de imóveis</ColumnTitle>
          <ColumnDescription>Registre e acompanhe todo o processo de alienação fiduciária, de forma totalmente online</ColumnDescription>
        </Column>
      </ColumnsContainer>
    </BlockContainer>
  );
};

export default MyComponent;
