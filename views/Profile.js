import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { fromNotificationUser } = location.state;

  let updateTeacher = {
    name: fromNotificationUser.name,
    surname: fromNotificationUser.surname,
    aboutMe: fromNotificationUser.aboutMe,
    city: fromNotificationUser.city,
    country: fromNotificationUser.country,
  };

  const [teacherValue, setTeacherValue] = useState(updateTeacher);
  const [videoId, setVideoId] = useState([]);
  const onInputChangeTeacher = (e, comment) => {
    const val = (e.target && e.target.value) || "";
    let _comment = { ...teacherValue };
    _comment[`${comment}`] = val;
    setTeacherValue(_comment);
  };

  function getAllVideos() {
    axios
      .get("https://localhost:7058/api/Video")
      .then((response) => {
        setVideoId(response.data.value);
      })
      .catch((error) => console.log({ error }));
  }

  const teacherUpdate = () => {
    const updateInfo = {
      id: localStorage.getItem("userId"),
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

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        }
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    {localStorage.getItem("userName") ===
                      fromNotificationUser.userName && (
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
                                <div className="relative w-full mb-6">
                                  <span>İsim</span>
                                  <input
                                    type="text"
                                    onChange={(e) =>
                                      onInputChangeTeacher(e, "name")
                                    }
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder={fromNotificationUser.name}
                                  />
                                  <span>Soy İsim</span>
                                  <input
                                    type="text"
                                    onChange={(e) =>
                                      onInputChangeTeacher(e, "surname")
                                    }
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder={fromNotificationUser.surname}
                                  />
                                  <span>Şehir</span>
                                  <input
                                    type="text"
                                    onChange={(e) =>
                                      onInputChangeTeacher(e, "city")
                                    }
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder={fromNotificationUser.city}
                                  />
                                  <span>Ülke</span>
                                  <input
                                    type="text"
                                    onChange={(e) =>
                                      onInputChangeTeacher(e, "country")
                                    }
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder={fromNotificationUser.country}
                                  />
                                  <span>Hakkımda</span>
                                  <input
                                    type="text"
                                    onChange={(e) =>
                                      onInputChangeTeacher(e, "aboutMe")
                                    }
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder={fromNotificationUser.aboutMe}
                                  />
                                </div>
                                <div className="relative w-full mb-3"></div>
                                <div className="text-center mt-6"></div>
                              </form>
                              <button
                                className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-2"
                                onClick={(e) => teacherUpdate()}
                              >
                                Güncelle
                              </button>
                            </div>
                          </div>
                        )}
                      </Popup>
                    )}

                    <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {fromNotificationUser.videoCount}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Video Sayısı
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {fromNotificationUser.commentCount}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Yorum Sayisi
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {fromNotificationUser.name} {fromNotificationUser.surname}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400">
                      {fromNotificationUser.city},{" "}
                      {fromNotificationUser.country}
                    </i>{" "}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap">
                    {videoId.map((video) => (
                      <div className="px-8">
                        <div className="mb-8 mt-2 text-center">
                          {video.applicationUserId ===
                            fromNotificationUser.applicationUserId && (
                            <Link
                              to={{
                                pathname: "/video/videoWatch",
                                state: {
                                  fromNotification: video,
                                },
                              }}
                            >
                              <img
                                className="mr-4 rounded"
                                width="250"
                                height="170"
                                src=" https://tekuzem.com/content/images/thumbs/0001561.jpeg"
                              ></img>
                              {video.title}
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        <p>{fromNotificationUser.aboutMe}</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
