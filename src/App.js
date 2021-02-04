import {
    BackgroundStyled,
    LeftImage,
    Image,
    MainComponent,
    RightImage, ModalWindow,
} from "./Style/style";
import logo from './assets/img/main-logo.svg';
import leftImage from './assets/img/bg-left.svg';
import rightImage from './assets/img/bg-right.svg';
import React from "react";
import {Route} from "react-router";
import Login from "./Components/LoginForm/Login";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
    return (
            <MainComponent>
                <BackgroundStyled>
                    <LeftImage src={leftImage}/>
                    <RightImage src={rightImage}/>
                    <Image src={logo}/>
                    <ModalWindow>
                        <Route exact path='/' render={() => <Login/>}/>
                        <Route exact path='/profile' render={() => <ProfileContainer/>}/>
                    </ModalWindow>
                </BackgroundStyled>
            </MainComponent>
    );
}

export default App;
