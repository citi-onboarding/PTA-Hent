import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 55px;
  align-content: center;
`;

export const Logo = styled.img`
  height: 33px;
  width: 131px;
`;

export const List = styled.ul`
  display: flex;
  gap: 67px;
  list-style-type: none;
`;
export const Link = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 700;
`;

export const ListElement = styled.li`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
export const Content = styled.div`
  display: flex;
  gap: 67px;
  text-align: left;
  width: 60%;
  align-items: center;
`;
