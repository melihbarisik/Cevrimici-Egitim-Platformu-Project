import React, { useState } from "react";
import axios from "axios";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Settings() {
  let userIdInfo;
  let choosenUser = {
    userIdInfo: userIdInfo,
    userName: "Guver54",
    email: "sefaGuver@gmail.com",
    password: "sefa",
    name: "Sefa",
    surname: "Güver",
    city: "LosAngeles",
    country: "Türkiye",
    aboutMe: "Öğrenci",
  };
  const [user, setUser] = useState(choosenUser);

  // ID kullanılarak yollanan post işlemi
  const findUserById = () => {
    const auth = userIdInfo;
    axios.post("https://localhost:7058/api/User/login", auth).then((res) => {
      console.log(res);
      setUser(res); // geri gelen bilgi user içersine atıldı.
    });
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...userIdInfo };
    _user[`${name}`] = val;
    userIdInfo = _user;
    console.log(userIdInfo);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <div className="mb-8 mt-32">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Kullanıcı Id Bilgisi
            </label>
            <input
              type="text"
              value={userIdInfo}
              onChange={(e) => onInputChange(e, "userIdInfo")}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-4"
              type="button"
              onClick={(e) => findUserById()}
            >
              Kullanıcı Bul
            </button>
          </div>
          <CardSettings parentToChild={user} />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile parentToChild={user} />
        </div>
      </div>
    </>
  );
}
