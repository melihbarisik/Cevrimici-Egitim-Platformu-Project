import React, { useEffect, useState } from "react";
import axios from "axios";
// Burada back-end tarafına bir post isteği atılarak verilen Id numarasına sahip öğretmen bilgisi geri almak hedefleniyor.

export default function CardSettingsTwo({ parentToChild }) {
  let userValueNew = {
    id: null,
    title: null,
    description: null,
  };

  const [userNewValue, setUserNewValue] = useState(userValueNew); // Yeni Kullanici bilgileri buraya eklendi.

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...userNewValue };
    _user[`${name}`] = val;
    setUserNewValue(_user);
  };

  function deleteUser() {
    axios
      .delete(
        `https://jsonplaceholder.typicode.com/posts/${parentToChild.videoIdInfo}`
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);

        /* const posts = this.state.posts.filter(
          (item) => item.id !== user.userIdInfo
        );
        this.setState({ posts }); BU KISIM HAKKINDA BİLGİM YOK */
      });
  }

  const updateVideo = () => {
    const updateInfo = {
      id: parentToChild.videoId,
      title: userNewValue.title,
      description: userNewValue.description,
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

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6"></div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Video Bilgileri
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Video Adı
                  </label>
                  <input
                    type="text"
                    placeholder={parentToChild.videoTitle}
                    onChange={(e) => onInputChange(e, "title")}
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
                    Video URL
                  </label>
                  <input
                    type="email"
                    value={parentToChild.videoUrl}
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
                    Video Text
                  </label>
                  <input
                    type="text"
                    placeholder={parentToChild.videoDescription}
                    onChange={(e) => onInputChange(e, "description")}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <button
              className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-4"
              type="button"
              onClick={(e) => updateVideo()}
            >
              Güncelle
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
