import React from "react";
import AuthService from "../services/auth.service";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="container">
      <header className="jumbotron text-left">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      </header>
    </div>
  );
};
export default Profile;
