import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  let userInformation = {
    userName: "",
    email: "",
    name: "",
    surname: "",
    city: "",
    country: "",
    aboutMe: "",
    videoCount: "",
    commentCount: "",
    applicationUserId: "",
  };
  const [teacherValue, setTeacherValue] = React.useState();
  const [valueDisplayTeacher, setValueDisplayTeacher] =
    React.useState(userInformation);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const axios = require("axios");
  const getTeacherById = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7058/api/User/${localStorage.getItem("userId")}`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      userInformation.userName = response.data.value.userName;
      userInformation.email = response.data.value.email;
      userInformation.name = response.data.value.name;
      userInformation.surname = response.data.value.surname;
      userInformation.city = response.data.value.city;
      userInformation.country = response.data.value.country;
      userInformation.aboutMe = response.data.value.aboutMe;
    } catch (err) {
      console.error("Çıkan hata :" + err);
    }
  };
  const axiosTeacher = require("axios");
  const countTeacherVideo = async () => {
    try {
      const response = await axiosTeacher.get(
        `https://localhost:7058/api/Video`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );

      let videoCount = 0;
      response.data.value.map((video) => {
        if (video.applicationUserId === localStorage.getItem("userId")) {
          videoCount++;
        }
      });
      userInformation.videoCount = videoCount;
      userInformation.applicationUserId = localStorage.getItem("userId");
    } catch (err) {
      console.error(err);
    }
  };
  function getCommentCount() {
    axios
      .get(
        `https://localhost:7058/api/User/GetCommentsCountByTeacherId/${localStorage.getItem(
          "userId"
        )}`
      )
      .then((response) => {
        userInformation.commentCount = response.data.value;
        console.log("yorum sayısı :" + response.data.value);
      })
      .catch((error) => console.log({ error }));
  }
  useEffect(() => {
    getTeacherById();
    countTeacherVideo();
    getCommentCount();
  });
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Öğretmen
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          to={{
            pathname: "/Profile",
            state: {
              fromNotificationUser: valueDisplayTeacher,
            },
          }}
        >
          <button> Profil</button>
        </Link>
        <Link
          to="/video/videoUpload"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Video Yükle
        </Link>
        <Link
          to="/video/videoLibrary"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Videolar
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
