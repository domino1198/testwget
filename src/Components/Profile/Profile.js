import React from 'react';
import {
    AuthBlock,
    AuthText,
    Input,
    ProfileImage,
    Title
} from "../../Style/style";
import defaultImage from "../../assets/img/no-profile-image.png"
import {Redirect} from "react-router";

const Profile = (props) => {

    if (!props.isAuth) return <Redirect to='/'/>
    return (
        <div>
            <Title>Your data:</Title>
            <div>
                    <div>
                         <ProfileImage src= {props.user.avatar != null?props.user.avatar: defaultImage}/>
                    </div>
                    <AuthBlock>
                        <AuthText>Surname:</AuthText>
                        <Input defaultValue={props.user.lastName} />
                    </AuthBlock>
                    <AuthBlock>
                        <AuthText>Name:</AuthText>
                        <Input defaultValue={props.user.firstName}/>
                    </AuthBlock>

                </div>
        </div>
    );
};

export default Profile;