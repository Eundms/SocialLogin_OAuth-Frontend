import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";

const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  },
};

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    let res = await Axios.get("http://localhost:8080/user", config);
    console.log(res.data);
    setUser(res.data);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="클라이언트 아이디">
        <Login />
      </GoogleOAuthProvider>
      {user && (
        <h1>
          /user :{" "}
          {user.id +
            " " +
            user.username +
            " " +
            user.password +
            " " +
            user.email +
            " " +
            user.provider +
            " " +
            user.providerId}
        </h1>
      )}
      <button onClick={getUser}>유저정보 가져오기</button>
    </div>
  );
}

export default App;
