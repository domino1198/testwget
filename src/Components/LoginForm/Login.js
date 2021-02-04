import React from 'react';
import {AuthBlock, AuthText, BTN, Title, WrongAuthField} from "../../Style/style";
import {Field, reduxForm} from "redux-form";
import "./loginform.css"

import {login} from "../../Redux/UserReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import Preloader from "../Common/Preloader/Preloader";


const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <AuthBlock>
                    {props.error && <WrongAuthField>{props.error}</WrongAuthField>}
                    <AuthText>Email</AuthText>
                    <Field className = "input" placeholder={'Email'} component={"input"} name={'email'}/>
                </AuthBlock>
                <AuthBlock>
                    <AuthText>Password</AuthText>
                    <Field type={"password"} className = "input" placeholder={'Password'} component={"input"}  name={'password'}/>
                </AuthBlock>
                <AuthBlock>
                    <BTN>Sing in</BTN>
                </AuthBlock>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    if(props.isAuth){
        return <Redirect to={"/profile"}/>;
    }
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password);
    }
    console.log(props.isFetching);
    return (
        <div> {props.isFetching ? <Preloader/> :
            (<div><Title>Sign In</Title>
            <LoginReduxForm onSubmit={onSubmit}/></div>)}

        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, {login})(Login);