import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 119px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 192px;
  padding-left: 90px;

  margin-right: -90px;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.title};
  font-weight: 400;
  font: 16px;
  margin-bottom: -40px;
`;
export const MainTitle = styled.h1`
  color: ${(props) => props.theme.colors.subject};
  font-weight: 700;
  font: 42px;
  margin-bottom: -20px;
`;
export const Matter = styled.p`
  color: ${(props) => props.theme.colors.title};
  font-weight: 500;
  font: 24px;
`;
export const TriangleIcon = styled.img`
  width: 59.07px;
  height: 40px;
  flex-shrink: 0;
  margin-top: 10px;
  position: relative;
  left: -20px;
`;

export const ImageSignature = styled.img`
  position: relative;
  top: -150px;
  left: 310px;
  margin-top: 200px;
  box-shadow: 0px 0px 87px 10px rgba(58, 76, 241, 0.76);
`;

export const ImageDetail = styled.img`
  position: relative;
  right: 160px;
  top: -10px;
  margin-top: 200px;
  box-shadow: 0px 0px 87px 10px rgba(58, 76, 241, 0.76);
`;
