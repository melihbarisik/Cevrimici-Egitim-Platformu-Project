/*eslint-disable*/
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import resimLogo from "../../assets/img/CEP-LOGO.PNG";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import PagesDropdown from "components/Dropdowns/PagesDropdown";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown";
import { setAuthorizationToken } from "helpers/setAuthorizationToken";

export default function Navbar(props) {
  const [userAuth, setUserAuth] = React.useState(true);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [userRole, setUserRole] = React.useState(false);

  function useStateStatus() {
    // Burada back-end tarafından veri alınıp durum kontrol edilecek.
    // Ya da rol kullanabilirim. Rol boş dönerse giriş yap gözükür
    if (localStorage.getItem("jwtToken")) {
      setUserAuth(true);
    } else {
      setUserAuth(false);
    }
  }

  useEffect(() => {
    // setUserRole(localStorage.getItem("userRole"));
    setUserRole(localStorage.getItem("userRole"));
    useStateStatus();
  });

  useEffect(() => {
    useStateStatus();
  }, [localStorage.getItem("jwtToken")]);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
            >
              <img src={resimLogo} width="125" height="50"></img>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {userRole == "Admin" && <PagesDropdown />}
              </li>
              <li className="flex items-center">
                {userRole == "Teacher" && <IndexDropdown />}
              </li>
              {userRole == "User" && <NotificationDropdown />}
              <li className="flex items-center">
                {!userAuth && (
                  <Link
                    to="/auth/login"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >
                    Giriş Yap
                  </Link>
                )}
              </li>
              <li className="flex items-center">
                {userAuth && (
                  <Link
                    to="/"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >
                    <button onClick={(e) => setAuthorizationToken(false)}>
                      {" "}
                      Çıkış Yap
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
