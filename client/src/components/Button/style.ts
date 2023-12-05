import styled from "styled-components";
interface PropsInterface {
  styles: {
    width: string;
    height: string;
    color: string;
    backgroundColor: string;
    fontWeight: string;
  };
}
export const StyledButton = styled.button<PropsInterface>`
  width: ${(props: PropsInterface) => props.styles.width};
  height: ${(props: PropsInterface) => props.styles.height};
  color: ${(props: PropsInterface) => props.styles.color};
  background-color: ${(props: PropsInterface) => props.styles.backgroundColor};
  font-weight: ${(props: PropsInterface) => props.styles.fontWeight};

  border-radius: 6px;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
