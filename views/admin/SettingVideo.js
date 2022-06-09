import React, { useState } from "react";
import axios from "axios";

import CardSettingsTwo from "components/Cards/CardSettingsTwo.js";

export default function SettingVideo() {
  let videoIdInfo;
  const [videoID, setVideoID] = useState(videoIdInfo);
  let choosenVideo = {
    videoId: "",
    videoTitle: "",
    videoDescription: "",
    videoUrl: "",
  };
  const [video, setVideo] = useState(choosenVideo);

  const findVideoById = () => {
    axios
      .get(
        `https://localhost:7058/api/Admin/GetVideoById/${videoID.videoIdInfo}`
      )
      .then((res) => {
        choosenVideo.videoId = videoID.videoIdInfo;
        choosenVideo.videoTitle = res.data.value.title;
        choosenVideo.videoDescription = res.data.value.description;
        choosenVideo.videoUrl = res.data.value.videoUrl;
        setVideo(choosenVideo);
      });
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...videoIdInfo };
    _user[`${name}`] = val;
    setVideoID(_user);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4 mt-32 mb-8">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Video Id Bilgisi
          </label>
          <input
            type="text"
            value={videoIdInfo}
            onChange={(e) => onInputChange(e, "videoIdInfo")}
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          />
          <button
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-4"
            type="button"
            onClick={(e) => findVideoById()}
          >
            Video Bul
          </button>
        </div>
        <CardSettingsTwo parentToChild={video} />
      </div>
    </>
  );
}
