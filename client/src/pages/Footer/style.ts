import styled from "styled-components";

export const FooterPage = styled.div`
    display: flex;
    align-items: center;
    align content: center;
    justify-content: space-around;
    width: 100%;
    background-color: #3A4CF1;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 1120px;
    height: 231px;
    margin-top: 100px;
    margin-left: 139px;
    margin-right: 141px;
    margin-bottom: 77px;
    // background-color: red;
`;
    
export const BoxText = styled.div`
    height: 154px;
    width: 256px;
    // background-color: green;
`;

export const TextAndLogo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    // background-color: black;
`;


export const BoxTopics = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    height: 100%;
    
    a {
        font-size: 16px;
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

export const BoxMedias = styled.div`
    display: flex;
    justify-content: space-between;
    width: 123.49px;
    height: 20px;
    padding-top: 23px;
    padding-bottom: 34px;
`;

export const Social = styled.img`
    height: 20px;
    width: 20.06px;
`;

export const HentLogo = styled.img`
    width: 171px;
    height: 43px;
    // background-color: yellow;
`;
