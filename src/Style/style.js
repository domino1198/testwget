import styled from 'styled-components'

import {NavLink} from 'react-router-dom';

export const MainComponent = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    inset: 0px;
    `;
export const BackgroundStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: rgb(24, 25, 35);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

const BackgroundImage = styled.img`
    position: fixed;
    bottom: 0px;
    top: 0px;
`;

export const LeftImage = styled(BackgroundImage)`
    left: 0;
`;
export const RightImage = styled(BackgroundImage)`
    right: 0;
`;

export const Image = styled.img`
    margin-bottom: 40px;
    margin-top: 10px;
    cursor: pointer;
    width: 107px;
    height: 104.44px;
    @media (max-height: 720px) {
        display: none;
  }
`;

export const ProfileImage = styled.img`
    border-radius: 1000px;
    background-size: cover;
    margin-bottom: 40px;
    margin-top: 10px;
    margin-left: 35%;
    width: 140px;
    height: 140px;
    @media (max-height: 720px) {
        width: 100px;
        height: 100px;
  }
`;

export const ModalWindow = styled.div`
    background: rgb(23, 24, 34);
    border: 2px solid rgba(255, 255, 255, 0.03);
    box-sizing: border-box;
    box-shadow: rgb(0 0 0 / 25%) 0px 30px 60px;
    border-radius: 12px;
    width: 520px;
    padding: 35px 47px;
    z-index: 10000000;
    @media (max-width: 540px){
    width: 100%;
}`;

export const Title = styled.div`
    width: 100%;
    margin-bottom: 40px;
    color: rgb(255, 255, 255);
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 46px;
    text-align: center;
`;
export const AuthBlock = styled.div`
    margin-bottom: 10px;
    width: 100%;
`;
export const AuthText = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgb(123, 127, 158);
    margin-bottom: 14px;
`;

export const Input = styled.input`
    height: 50px;
    background: rgb(33, 35, 48);
    border: 2px solid rgb(41, 43, 54);
    box-sizing: border-box;
    border-radius: 6px;
    width: 100%;
    outline: none;
    text-align: left;
    color: white;
    font-weight: bold;
    font-size: 17px;
    padding-left: 25px;
`;

export const PasswordInput = styled(Input)`
  border: 2px solid aqua;
`;

export const BTN = styled.button`
    height: 50px;
    background: rgb(255, 172, 48);
    border-radius: 6px;
    cursor: pointer;
    width:40%;
    margin-left:30%;
    opacity: 1;
    color: white;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold
    &::hover {
    opacity: 0.8;
}
`;

export const NavLinkButton = styled(NavLink)`
    text-decoration: none;
    height: 50px;
    background: rgb(255, 172, 48);
    border-radius: 6px;
    margin-top: 20px;
    cursor: pointer;
    opacity: 1;
    color: white;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold
    &::hover {
    opacity: 0.8;
}
`;

export const NonNavLinkButton = styled(NavLink)`
    text-decoration: none;
    height: 50px;
    background: rgb(166, 166, 166);
    border-radius: 6px;
    margin-top: 20px;
    cursor: pointer;
    opacity: 1;
    color: white;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold
    &::hover {
    opacity: 0.8;
}
`;

export const WrongAuthField = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgb(153, 0, 0);
    margin-bottom: 14px;

`;


