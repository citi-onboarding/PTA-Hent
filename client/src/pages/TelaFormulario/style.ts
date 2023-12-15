import styled from "styled-components";

export const Pag = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 64px;
    height: 844px;
    width: 100%;
    overflow-x: hidden;
    img {
        height: max-content;
        width: max-content;
    }
`;

// Texto grande do lado da div do formulário
export const DivTextLeft = styled.div`
    width: 470px;
    height: 303px;
    h1 {
        margin-top: 0px;
        text-align: start;
        color: #1A1A1A;
        font-family: DM Sans;
        font-size: 40px;
        font-weight: 400;
    }
`;

export const Icon = styled.div`
    width: 59px;
    height: 40px;
    margin-top: 58px;
    img {
        width: 59px;
        height: 40px;
    }
`;

export const IconAndText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: max-content;
    width: 517px;
    margin-top: 145px;
    margin-left: 139px;
`;

// Div que contém o formulário
export const Formulario = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 618px;
    width: 600px;
    background-color: #F5F5F5;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    margin-top: 108px;
    margin-bottom: 118px;
    
    h1{
        color: #606060;
        text-align: start;
        font-family: DM Sans;
        font-size: 32px;
        font-weight: 500;
        margin-left: 35px;
        margin-top: 20px;
    }
    p {
        color: #606060;
        font-size: 16px;
        font-weight: 400;
        margin-left: 39px;
        margin-top: 9px;
    }
    input::placeholder {
        color: #AEAEAE;
        font-size: 16px;
        font-family: DM Sans;
        font-weight: 400;
        /* padding-left: 20px; */
    }
`;

export const Inputs1 = styled.input`
    width: 530px;
    height: 45px;
    border-radius: 20px;
    padding-left: 20px;
    border: 1px solid #AEAEAE;
    margin-left: 35px;
    outline: none;
`;

export const DoisInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 530px;
    height: max-content;
    margin-left: 35px;
`;

export const InputAndText = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
    width: max-content;
    span {
        color: #606060;
        font-size: 16px;
        font-weight: 400;
        margin-top: 9px;
        margin-bottom: 8px;
    }
`;

export const NumTelInput = styled.input`
    width: 200px;
    height: 45px;
    border-radius: 20px;
    padding-left: 20px;
    border: 1px solid #AEAEAE;
    outline: none;
`;

export const EmailInput = styled.input`
    width: 310px;
    height: 45px;
    border-radius: 20px;
    padding-left: 20px;
    outline: none;
    border: 1px solid #AEAEAE;
`;

export const ButtonTextDiv = styled.div`
    margin-left: 60px;
    width: 408px;
    height: 26px;
`;

export const Buttons = styled.button`
    width: 530px;
    height: 40px;
    border-radius: 20px;
    margin-left: 35px;
`;