import React from "react";
import { useState } from "react";
import axios from "axios";

export default function RegisterUser() {
  let emptyUser = {
    userName: null,
    email: null,
    password: null,
  };

  const [user, setUser] = useState(emptyUser);

  const onLogin = () => {
    const auth = {
      userName: user.userName,
      email: user.email,
      password: user.password,
    };
    console.log(auth);
    axios.post("https://localhost:7058/api/User/register", auth).then((res) => {
      console.log("res == ", res).catch((err) => console.log(err));
    });
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
                      Kullanıcı Adı
                    </label>
                    <input
                      type="text"
                      value={user.userName}
                      onChange={(e) => onInputChange(e, "userName")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Şifre
                    </label>
                    <input
                      type="password"
                      value={user.userPassword}
                      onChange={(e) => onInputChange(e, "password")}
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
                      <a href="http://localhost:3000/auth/login">Üye Ol</a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
