import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import axios from "axios";
import Popup from "reactjs-popup";

export default function VideoLibrary() {
  let uploadVideo = {
    id: null,
    title: null,
    description: null,
  };
  const [videoId, setVideoId] = useState([]);
  const [videoUpload, setVideoUpload] = useState(uploadVideo);

  function getAllVideos() {
    axios
      .get("https://localhost:7058/api/Video")
      .then((response) => {
        setVideoId(response.data.value);
      })
      .catch((error) => console.log({ error }));
  }
  const onInputChangeDescription = (e, comment) => {
    const val = (e.target && e.target.value) || "";
    let _comment = { ...videoUpload };
    _comment[`${comment}`] = val;
    setVideoUpload(_comment);
  };

  const updateVideo = (props) => {
    const updateInfo = {
      id: props.id,
      title: videoUpload.title,
      description: videoUpload.description,
    };
    axios
      .put("https://localhost:7058/api/Video", updateInfo, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  function deleteVideo(props) {
    axios.delete(`https://localhost:7058/api/Video/${props.id}`).then((res) => {
      console.log(res.data);
    });
  }
  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <>
      <IndexNavbar transparent />
      <section className="pt-20 pb-48 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4 ">
              <h2 className="text-4xl font-semibold ">
                Burası Bizim Büyük Kütüphanemiz
              </h2>
              <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                Burada sitemizdeki eğitim içeriklerinin hepsine ulaşabilir,
                engin bilgi denizinde dilediğinizce dolaşabilirsiniz.
              </p>
            </div>
          </div>
          <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100 mb-8" />{" "}
          <div className="flex flex-wrap">
            {videoId.map((video) => (
              <div className="px-8">
                <div className="mb-8 mt-2 text-center">
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
                  </Link>
                  <Link
                    to={{
                      pathname: "/video/videoWatch",
                      state: {
                        fromNotification: video,
                      },
                    }}
                  >
                    {video.title}
                  </Link>
                  <p className="mt-1 text-sm text-blueGray-400  font-semibold"></p>

                  {video.applicationUserId ===
                    localStorage.getItem("userId") && (
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
                                <span>Başlık</span>
                                <input
                                  type="text"
                                  onChange={(e) =>
                                    onInputChangeDescription(e, "title")
                                  }
                                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder={video.title}
                                />
                                <span>İçerik</span>
                                <input
                                  type="text"
                                  onChange={(e) =>
                                    onInputChangeDescription(e, "description")
                                  }
                                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder={video.description}
                                />
                              </div>
                              <div className="relative w-full mb-3"></div>
                              <div className="text-center mt-6"></div>
                            </form>
                            <button
                              className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-2"
                              onClick={(e) => updateVideo(video)}
                            >
                              Güncelle
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  )}
                </div>
              </div>
            ))}
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
