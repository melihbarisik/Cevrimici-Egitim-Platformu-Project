import React, { useState, useEffect } from "react";
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Watch() {
  let videoUploadValues = {
    title: null,
    description: null,
    videoUrl: null,
    applicationUserId: localStorage.getItem("userId"),
  };

  const [videoUpload, setVideoUpload] = useState(videoUploadValues);
  const [videoId, setVideoId] = useState([]);
  const [ifVideoExist, setIfVideoExist] = useState();
  let allVideosUrl;

  const videoUploadFunction = () => {
    const videoUploadInfo = {
      title: videoUpload.title,
      description: videoUpload.description,
      videoUrl: videoUpload.videoUrl,
      applicationUserId: videoUpload.applicationUserId,
    };
    axios

      .post("https://localhost:7058/api/Video", videoUploadInfo, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data.value);
      });
  };

  function getAllVideos() {
    axios
      .get("https://localhost:7058/api/Video")
      .then((response) => {
        setVideoId(response.data.value);
        videoId.map((video) => {
          if (video.videoUrl === videoUpload.videoUrl) {
            setIfVideoExist(true);
          } else {
            setIfVideoExist(false);
          }
        });
      })
      .catch((error) => console.log({ error }));
  }
  const checkIfVideoExist = () => {
    if (ifVideoExist === true) {
      console.log("Video daha önce yüklenmiş.");
    } else {
      videoUploadFunction();
      console.log("Video Yüklendi.");
    }
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...videoUpload };
    _user[`${name}`] = val;
    setVideoUpload(_user);
  };
  useEffect(() => {
    getAllVideos();
  }, []);
  return (
    <>
      <IndexNavbar fixed />
      <section className=" header relative block py-24 h-screen lg:pt-0  mt-48 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    Başlamak için bir video yükleyin
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Videolarınızı paylaşmaya başlayın ve izleyicilerle bağlantı
                    kurun.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Video Başlığı
                    </label>
                    <input
                      type="text"
                      value={videoUpload.title}
                      onChange={(e) => onInputChange(e, "title")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Başlık"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Video URL
                    </label>
                    <input
                      type="email"
                      value={videoUpload.videoUrl}
                      onChange={(e) => onInputChange(e, "videoUrl")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="URL"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Video Açıklaması
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      value={videoUpload.description}
                      onChange={(e) => onInputChange(e, "description")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Açıklama Yazınız..."
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => checkIfVideoExist()}
                    >
                      Gönder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
