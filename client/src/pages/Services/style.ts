import styled from "styled-components";

export const BlockContainer = styled.div`
  text-align: left;
  padding-left: 100px;
  padding-right: 100px;
`;

export const TopPhrase = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
  text-align: left;
  padding-right: 40px;
  padding-left: 30px;
  font-size: 20px;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  gap: 20px;
  font-size: 10px;
  padding: 20px;
  display: flex;
  flex-direction: grid;
  align-items: center;
`;

export const Column = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColumnIconNewspaper = styled.img`
  object-fit: fill;
  width: 76px;
  height: auto;
`;

export const ColumnIconKey = styled.img`
  object-fit: fill;
  width: 76px;
  height: auto;
`;

export const ColumnIconPaper = styled.img`
  object-fit: fill;
  width: 79px;
  height: 27px;
`;

export const ColumnIconLibrary = styled.img`
  object-fit: fill;
  width: 79px;
  height: 27px;
`;

export const ColumnTitle = styled.div`
  font-weight: 700;
  margin: 10px 0;
  color: primary;

`;

export const ColumnDescription = styled.div`
  font-weight: 400;
  color: title;
  wordWrap: 'break-word'
`;
