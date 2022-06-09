import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  let emptyUser = {
    email: null,
    userPassword: null,
  };
  const [token, setToken] = useState("");
  const [user, setUser] = useState(emptyUser);

  /*const onLogin = () => {
    const auth = {
      email: user.email,
      password: user.userPassword,
    };
    axios.post("https://localhost:7058/api/User/login", auth).then((res) => {
      let token = res.data.token;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userName", res.data.userName);
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("userRole", res.data.roles);
      console.log(
        "login token local storage: " + localStorage.getItem("jwtToken")
      );
      // console.log(localStorage.setItem("jwtToken", token));
      //   console.log("Login sayfasi userId: " + res.data.id);
      console.log(res.data);
      setAuthorizationToken(token);
    });
  };*/

  const axios = require("axios");
  const onLogin = async () => {
    try {
      const auth = {
        email: user.email,
        password: user.userPassword,
      };
      const res = await axios.post(
        "https://localhost:7058/api/User/login",
        auth
      );
      let token = res.data.token;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userName", res.data.userName);
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("userRole", res.data.roles);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...user };
    _user[`${name}`] = val;
    setUser(_user);
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6"></div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      onChange={(e) => onInputChange(e, "email")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={user.userPassword}
                      onChange={(e) => onInputChange(e, "userPassword")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      onClick={(e) => onLogin()}
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      {" "}
                      <p>Giriş Yap</p>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/auth/RegisterUser" className="text-blueGray-200">
                  <p>Kullanıcı Hesabı Oluştur</p>
                </Link>
                <Link to="/auth/register" className="text-blueGray-200">
                  <p>Öğretmen Hesabı Oluştur</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
