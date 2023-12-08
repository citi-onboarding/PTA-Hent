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
    background-color: red;
    `;
    
export const BoxText = styled.div`
    height: 154px;
    width: 256px;
    color: white;
`;

// export const HentInfo = styled.div`
//     display: flex;

// `;

export const BoxTopics = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    height: 100%;
    a {
        font-size: 16px;
        color: white;
    }
    h4 {
        font-size: 16px;
        color: white;
    }
    p {
        color: white;
        font-size: 16px;
    }
`;

export const BoxMedias = styled.div`
    display: flex;
    justify-content: space-between;
    width: 123.49px;
    height: 20px;
`;
export const Social = styled.img`
    height: 20px;
    width: 20.06px;
`;

export const HentLogo = styled.img`
    height: 43px;
    width: 171px;
`;

export const TextAndLogo = styled.div`
    display: flex;
    width: 256px;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
`;