import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CardSettings({ parentToChild }) {
  let userValueNew = {
    userName: null,
    email: null,
    password: null,
    name: null,
    surname: null,
    city: null,
    country: null,
    aboutMe: null,
  };
  const [user, setUser] = useState(parentToChild);
  const [userNewValue, setUserNewValue] = useState(userValueNew);

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...userNewValue };
    _user[`${name}`] = val;
    setUserNewValue(_user);
  };

  function deleteUser() {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${user.userIdInfo}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }
  let updateTeacher = {
    name: parentToChild.name,
    surname: parentToChild.surname,
    aboutMe: parentToChild.aboutMe,
    city: parentToChild.city,
    country: parentToChild.country,
  };

  const [teacherValue, setTeacherValue] = useState(updateTeacher);
  const teacherUpdate = () => {
    const updateInfo = {
      id: parentToChild.userId,
      name: teacherValue.name,
      surname: teacherValue.surname,
      city: teacherValue.city,
      country: teacherValue.country,
      aboutMe: teacherValue.aboutMe,
    };
    axios
      .put("https://localhost:7058/api/User/UpdateTeacher", updateInfo, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((res) => {});
  };
  const onInputChangeTeacher = (e, teacher) => {
    const val = (e.target && e.target.value) || "";
    let _comment = { ...teacherValue };
    _comment[`${teacher}`] = val;
    setTeacherValue(_comment);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6"></div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Kullanıcı Bilgileri
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Kullanıcı Adı
                  </label>
                  <input
                    type="text"
                    value={parentToChild.userName}
                    onChange={(e) => onInputChangeTeacher(e, "userName")}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Mail Adresi{" "}
                  </label>
                  <input
                    type="email"
                    value={parentToChild.email}
                    onChange={(e) => onInputChangeTeacher(e, "email")}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    İSİM
                  </label>
                  <input
                    type="text"
                    placeholder={parentToChild.name}
                    onChange={(e) => onInputChangeTeacher(e, "name")}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    SOY İSİM
                  </label>
                  <input
                    type="text"
                    placeholder={parentToChild.surname}
                    onChange={(e) => onInputChangeTeacher(e, "surname")}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              İletişim Bilgileri
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4"></div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Şehir
                  </label>
                  <input
                    type="email"
                    placeholder={parentToChild.city}
                    onChange={(e) => onInputChangeTeacher(e, "city")}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Ülke
                  </label>
                  <input
                    type="text"
                    placeholder={parentToChild.country}
                    onChange={(e) => onInputChangeTeacher(e, "country")}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4"></div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Hakkımda
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Hakkımda
                  </label>
                  <textarea
                    type="text"
                    placeholder={parentToChild.aboutMe}
                    onChange={(e) => onInputChangeTeacher(e, "aboutMe")}
                    className="placeholder border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-4"
              type="button"
              onClick={(e) => teacherUpdate()}
            >
              Güncelle
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
