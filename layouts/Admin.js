import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Settings from "views/admin/Settings.js";
import SettingsVideo from "views/admin/SettingVideo";
import SettingTeacher from "views/admin/SettingTeacher";

import mainPage from "../views/Index";

export default function Admin() {
  const [userRole, setUserRole] = React.useState(null);

  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  });
  return (
    <>
      {userRole === "Admin" && <Sidebar />}
      {userRole === "Admin" && (
        <div className="relative md:ml-64 bg-blueGray-100">
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route
                path="/admin/settingTeacher"
                exact
                component={SettingTeacher}
              />
              <Route
                path="/admin/settingVideo"
                exact
                component={SettingsVideo}
              />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      )}
      <Route path="/admin/settings" exact component={mainPage} />
      <Route path="/admin/settingsVideo" exact component={mainPage} />
    </>
  );
}
