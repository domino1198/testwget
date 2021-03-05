import React, { useEffect } from "react";
import {
  AuthBlock,
  AuthText,
  BTN,
  Input,
  ProfileImage,
  Title,
} from "../../Style/style";
import defaultImage from "../../assets/img/no-profile-image.png";
import { Redirect } from "react-router";
import { User } from "../../wget/user.ts";
import { SuperWidjet } from "../../wget/superwidjet.ts";

const Profile = (props) => {
  let user = new User(
    props.user.firstName,
    props.user.lastName,
    props.user.objectId
  );
//   console.log(user);
  let sp = new SuperWidjet(user);
//   console.log(sp);
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  if (!props.isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Title>Your data:</Title>
      <div>
        <div>
          <ProfileImage
            src={props.user.avatar != null ? props.user.avatar : defaultImage}
          />
        </div>
        <AuthBlock>
          <AuthText>Surname:</AuthText>
          <Input defaultValue={props.user.lastName} />
        </AuthBlock>
        <AuthBlock>
          <AuthText>Name:</AuthText>
          <Input defaultValue={props.user.firstName} />
        </AuthBlock>
        <AuthBlock>
          <BTN
            onClick={(e) => {
              sp.track(e.target.id);
              console.log(user);
            }}
            id="btn"
          >
            Log out
          </BTN>
        </AuthBlock>
      </div>
    </div>
  );
};

export default Profile;
