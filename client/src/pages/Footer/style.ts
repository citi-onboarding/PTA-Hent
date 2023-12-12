import styled from "styled-components";

//  Footer total
export const FooterPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 408px;
    background-color: #3A4CF1;
`;

// Div que contém as informações presentes no footer
export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* background-color: red; */
    width: 1120px;
    height: 231px;
`;
    
// Caixa onde fica o texto que explica o que é a Hent.
export const BoxText = styled.div`
    height: 154px;
    width: 256px;
    p {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        color: white;
    }
`;

export const HentLogo = styled.img`
    /* width: 171px;
    height: 43px; */
    margin-bottom: 34px;
    /* background-color: yellow; */
`;

export const TextAndLogo = styled.div`
    display: flex;
    /* height: 100%; */
    flex-flow: column wrap;

    img {    
        width: 171px;
        height: 43px;
    }
`;

// Topico institucional
export const BoxTopic1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    a {
        width: max-content;
        font-size: 16px;
        font-weight: 400;
        color: white;
    }
    a:hover {
        cursor:pointer;
    }
    h4 {
        font-size: 16px;
        color: white;
    }
`;

// HentSign
// OBS: Coloquei 2 divs diferentes para os tópicos por causa do espaçamento entre cada texto, para ficar o mais próximo possível do protótipo.
export const BoxTopic2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    height: 100%;
    
    a {
        // display: inline-block;
        width: max-content;
        font-size: 16px;
        font-weight: 400;
        color: white;
    }
    a:hover {
        cursor:pointer;
    }
    h4 {
        font-size: 16px;
        color: white;
    }
`;

// Div que engloba as redes sociais da Hent e suas informações.
export const Media = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        color: white;
        font-size: 14px;
        font-weight: 700;
    }
`;

// Informações sobre a Hent.
export const HentInfo = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 187px;
    text-align: center;
    
    p {
        color: white;
        font-size: 15px;
    }
`;

// Redes sociais da Hent.
export const BoxMedias = styled.div`
    display: flex;
    justify-content: space-between;
    width: 123.49px;
    height: 20px;
    padding-top: 23px;
    padding-bottom: 34px;
`;

export const Social = styled.a`
    width: 25px;
    height: 18.75px;
    flex-shrink: 0;
    background-color: rgba(0,0,0,0);
    border: none;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
`;
