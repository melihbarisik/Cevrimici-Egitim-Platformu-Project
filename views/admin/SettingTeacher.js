import React, { useState, useEffect } from "react";
import axios from "axios";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function SettingsTeacher() {
  let teacherId;
  const [userIdInfo, setUserIdInfo] = useState(teacherId);
  let choosenUser = {
    userId: "",
    userName: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    city: "",
    country: "",
    aboutMe: "",
    userId: "",
    videoCount: "",
    commentCount: "",
  };

  const [user, setUser] = useState(choosenUser);
  const [allVideos, setAllVideos] = useState([]);

  const axiosTeacher = require("axios");
  const countTeacherVideo = async (props, commentCount) => {
    try {
      const response = await axiosTeacher.get(
        `https://localhost:7058/api/Video`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      setAllVideos(response.data.value);
      let videoCount = 0;
      response.data.value.map((video) => {
        if (video.applicationUserId === props) {
          videoCount++;
        }
      });
      findUserById(props, videoCount, commentCount);
    } catch (err) {
      console.error(err);
    }
  };

  function getCommentCount(props) {
    axios
      .get(
        `https://localhost:7058/api/User/GetCommentsCountByTeacherId/${props}`
      )
      .then((response) => {
        let commentCount = response.data.value;
        countTeacherVideo(props, commentCount);
      })
      .catch((error) => console.log({ error }));
  }

  const findUserById = (props, videoCount, commnetCount) => {
    axios.get(`https://localhost:7058/api/User/${props}`).then((res) => {
      choosenUser.userName = res.data.value.userName;
      choosenUser.email = res.data.value.email;
      choosenUser.password = res.data.value.password;
      choosenUser.name = res.data.value.name;
      choosenUser.surname = res.data.value.surname;
      choosenUser.city = res.data.value.city;
      choosenUser.country = res.data.value.country;
      choosenUser.aboutMe = res.data.value.aboutMe;
      choosenUser.userId = props;
      choosenUser.videoCount = videoCount;
      choosenUser.commentCount = commnetCount;
      setUser(choosenUser);
    });
  };
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...userIdInfo };
    _user[`${name}`] = val;
    setUserIdInfo(_user);
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <div className="mb-8 mt-32">
            <form>
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Kullanıcı Id Bilgisi
              </label>
              <input
                type="text"
                onChange={(e) => onInputChange(e, "teacherId")}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-4"
                type="button"
                onClick={(e) => getCommentCount(userIdInfo.teacherId)}
              >
                Kullanıcı Bul
              </button>
            </form>
          </div>
          <div id="root">
            <CardSettings parentToChild={user} />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile parentToChild={user} />
        </div>
      </div>
    </>
  );
}
