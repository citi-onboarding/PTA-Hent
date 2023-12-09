import styled from "styled-components";

export const ContentAccess = styled.div`
  display: flex;
  width: 100%;
  margin-top: 180px;
  width: 1400px;
  height: 437px;
`;

export const TextSection1 = styled.text`
  display: flex;
  color: #fff;
  padding-bottom: 5px;
  justify-content: center;
  align-items: center;
`;

export const TextSection2 = styled.text`
  display: flex;
  color: #fff;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const Rectangle = styled.div`
  display: flex;
  flex-direction: column;
  height: 407px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  position: absolute;
  right: 0;
  left: 0;
`;

export const Triangle1 = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 200.3px 220px 200.3px;
  border-color: transparent transparent #fff transparent;
  transform: rotate(90deg);
  position: absolute;
  left: 50px;
`;
export const Triangle2 = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 204.3px 223px 204.3px;
  border-color: transparent transparent #3a4cf1 transparent;
  transform: rotate(90deg);
  position: absolute;
  left: 40px;
`;
export const Triangle3 = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 200.3px 220px 200.3px;
  border-color: transparent transparent #fff transparent;
  transform: rotate(270deg);
  position: absolute;
  right: 50px;
`;
export const Triangle4 = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 204.3px 223px 204.3px;
  border-color: transparent transparent #3a4cf1 transparent;
  transform: rotate(270deg);
  position: absolute;
  right: 40px;
`;
