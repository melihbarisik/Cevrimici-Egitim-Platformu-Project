import React, { useEffect, useState } from "react";
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const { fromNotification } = location.state;

  let commentInfo = {
    text: null,
    videoId: fromNotification.id,
    applicationUserId: localStorage.getItem("userId"),
  };
  let updateCommentInfo = {
    text: null,
    videoId: fromNotification.id,
    applicationUserId: localStorage.getItem("userId"),
  };
  let userInformation = {
    userName: "",
    email: "",
    name: "",
    surname: "",
    city: "",
    country: "",
    aboutMe: "",
    videoCount: "",
    applicationUserId: "",
    commentCount: "",
  };
  const [allVideos, setAllVideos] = useState();
  const [avarageStar, setAvarageStart] = useState();
  const [howManyStar, setHowManyStar] = useState(0);
  const [ifUserCanComment, setIfUserCanComment] = useState();
  const [userRole, setUserRole] = useState(false);
  const [comments, setComments] = useState([]);
  const [makeNewCommnet, setMakeNewComment] = useState(commentInfo);

  let url = fromNotification.videoUrl;
  const [urlSmallPart, setUrlSmallPart] = useState();
  const [updateComment, setUpdateComment] = useState(updateCommentInfo);
  const [commentId, setCommentId] = useState();
  const [teacherValue, setTeacherValue] = useState();
  const [valueDisplayTeacher, setValueDisplayTeacher] =
    useState(userInformation);

  function getAvarageStar() {
    axios
      .get(
        `https://localhost:7058/api/Video/GetAvgStarById/${fromNotification.id}`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        setAvarageStart(response.data.value);
      })
      .catch((error) => error);
  }

  function getCommentCount() {
    axios
      .get(
        `https://localhost:7058/api/User/GetCommentsCountByTeacherId/${fromNotification.applicationUserId}`
      )
      .then((response) => {
        userInformation.commentCount = response.data.value;
      })
      .catch((error) => console.log({ error }));
  }

  function getTeacherValue() {
    axios
      .get(
        `https://localhost:7058/api/User/${fromNotification.applicationUserId}`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        userInformation.userName = response.data.value.userName;
        userInformation.email = response.data.value.email;
        userInformation.name = response.data.value.name;
        userInformation.surname = response.data.value.surname;
        userInformation.city = response.data.value.city;
        userInformation.country = response.data.value.country;
        userInformation.aboutMe = response.data.value.aboutMe;
      })
      .catch((error) => error);
  }
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
      setAllVideos(response.data.value);
      let videoCount = 0;
      response.data.value.map((video) => {
        if (video.applicationUserId === fromNotification.applicationUserId) {
          videoCount++;
        }
      });
      userInformation.videoCount = videoCount;
      userInformation.applicationUserId = fromNotification.applicationUserId;
    } catch (err) {
      console.error(err);
    }
  };

  const axios = require("axios");
  const getUsersComments = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7058/api/Comment/${fromNotification.id}`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      setComments(response.data.value);
    } catch (err) {
      console.error(err);
    }
  };
  const onInputChange = (e, comment) => {
    const val = (e.target && e.target.value) || "";
    let _comment = { ...makeNewCommnet };
    _comment[`${comment}`] = val;
    setMakeNewComment(_comment);
  };

  const onInputChangeUpdate = (e, comment) => {
    const val = (e.target && e.target.value) || "";
    let _comment = { ...updateComment };
    _comment[`${comment}`] = val;
    setUpdateComment(_comment);
  };
  const sendComment = () => {
    const sendCommentInfo = {
      text: makeNewCommnet.text,
      videoId: fromNotification.id,
      applicationUserId: makeNewCommnet.applicationUserId,
      star: howManyStar,
    };
    axios
      .post("https://localhost:7058/api/Comment", sendCommentInfo, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((res) => {});
  };
  const upadteComment = () => {
    const updateInfo = {
      id: commentId,
      text: updateComment.text,
      videoId: fromNotification.id,
      applicationUserId: updateComment.applicationUserId,
      star: howManyStar,
    };
    axios
      .put("https://localhost:7058/api/Comment", updateInfo, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((res) => {});
  };

  function deleteComment(commentId) {
    axios
      .delete(`https://localhost:7058/api/Comment/${commentId}`)
      .then((res) => {});
  }
  useEffect(() => {
    getUsersComments();
    setUserRole(localStorage.getItem("userRole"));
    const myArray = url.split("=");
    setUrlSmallPart(myArray[1]);

    ifUserCommentOnce();
    findCommentId();
    getTeacherValue();
    getAvarageStar();
    countTeacherVideo();
    getCommentCount();
  }, []);

  useEffect(() => {
    ifUserCommentOnce();
    findCommentId();
  });

  const ratingChanged = (newRating) => {
    setHowManyStar(newRating);
  };

  function ifUserCommentOnce() {
    comments.map((comment) => {
      if (comment.applicationUserId === localStorage.getItem("userId")) {
        setIfUserCanComment(true);
      } else {
        setIfUserCanComment(false);
      }
    });
  }

  function findCommentId() {
    comments.map((comment) => {
      if (comment.applicationUserId === localStorage.getItem("userId")) {
        setCommentId(comment.id);
      }
    });
  }

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative  items-center flex h-screen max-h-860-px ">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-8/12 sm:w-4/12 px-4 mr-4 float-left mt-16">
              <iframe
                width="1250"
                height="625"
                src={"https://www.youtube.com/embed/" + urlSmallPart}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              >
                {" "}
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto pb-16">
        <div className="flex justify-between">
          <h2 className=" text-2xl mt-0 mb-2 text-blue-600 font-bold  ">
            {fromNotification.title}
          </h2>
          {avarageStar != undefined && (
            <ReactStars
              value={avarageStar}
              edit={false}
              size={36}
              activeColor="#ffd700"
              half={true}
            />
          )}
        </div>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />{" "}
        <h2 className=" leading-tight text-2xl mt-0 mb-2 text-blue-600 font-bold">
          <div>
            <Link
              to={{
                pathname: "/Profile",
                state: {
                  fromNotificationUser: valueDisplayTeacher,
                },
              }}
            >
              {fromNotification.teacherFullName}
            </Link>
          </div>
        </h2>
        <h3>{fromNotification.description}</h3>
      </div>

      <div className="container mx-auto pb-16">
        <h3 className="font-bold text-3xl mb-4">Yorumlar</h3>
        {!ifUserCanComment && (
          <form>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={36}
              activeColor="#ffd700"
            />
            <input
              type="text"
              placeholder="Yorum ekleyin..."
              value={makeNewCommnet.text}
              onChange={(e) => onInputChange(e, "text")}
              class="px-3 py-3 mr-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-6/12 "
            />
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={(e) => sendComment()}
            >
              Yorum Yap
            </button>
          </form>
        )}
        {ifUserCanComment && (
          <p>
            Daha önce yorum yaptınız. Yorumunuzu güncelleyebilir ya da silerek
            yeni yorum yapabilirsiniz.
          </p>
        )}
        <div className="commented-section mt-2">
          {comments.map((comment) => (
            <div className="text-md mt-10">
              <h5 className="mr-2 font-bold text-2xl">
                {comment.userName}
                <ReactStars
                  value={comment.star}
                  edit={false}
                  size={20}
                  activeColor="#ffd700"
                />
              </h5>
              <span>{comment.text}</span>
              {comment.applicationUserId === localStorage.getItem("userId") && (
                <Popup
                  trigger={
                    <button className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-2">
                      Güncelle
                    </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="content"></div>
                      <div className="actions">
                        <form>
                          {" "}
                          <div className="relative w-full mb-3">
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={36}
                              activeColor="#ffd700"
                            />
                            <input
                              type="text"
                              onChange={(e) => onInputChangeUpdate(e, "text")}
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder={comment.text}
                            />
                          </div>
                          <div className="relative w-full mb-3"></div>
                          <div className="text-center mt-6"></div>
                        </form>
                        <button
                          className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-2"
                          onClick={(e) => upadteComment()}
                        >
                          Güncelle
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              )}
              {(comment.applicationUserId === localStorage.getItem("userId") ||
                localStorage.getItem("userId") ===
                  fromNotification.applicationUserId) && (
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-2"
                  type="button"
                  onClick={(e) => deleteComment(comment.id)}
                >
                  Yorumu Sil
                </button>
              )}

              {userRole === "Admin" && (
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-2"
                  type="button"
                  onClick={(e) => deleteComment(comment.id)}
                >
                  Yorumu Sil
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
