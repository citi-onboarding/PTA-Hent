import styled from 'styled-components';

export const BlockContainer = styled.div`
  display: flex;
  padding-left: 120px;
  padding-right: 120px;
  flex-direction: column;
  align-items: center;
  background-color: #F5F5F5;
`;

export const TopPhrase = styled.div`
  text-align: center;
  font-size: 20px;
  color: #1A1A1A;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Column1 = styled.div`
  border: 2px solid blue;
  border-radius: 6px;
  padding: 10px;
`;

export const Column2 = styled.div`
  padding: 10px;
  margin-left: 20px;
`;
export const DescriptionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Title = styled.h4`
  margin: 0;
  color: #606060;
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: 10px;
  border-top: 1px solid #ccc;
  padding-top: 5px;
`;

export const IconContainer = styled.div`
  margin-left: 15px;
  margin-right: -15px;
`;

export const ColumnIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 25px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnIconHent = styled.img`
  width: 20px;
  height: 20px;
  margin-left: -20px;
  margin-right: -15px;
`;

export const ColumnDescription = styled.div`
  margin: 0;
  font-size: 9px;
  color: #606060;
  margin-left: -10px;
`;
