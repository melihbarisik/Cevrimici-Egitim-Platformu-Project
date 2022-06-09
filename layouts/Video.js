import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import videoUpload from "../views/video/videoUpload";
import videoLibrary from "../views/video/videoLibrary";
import videoWatch from "../views/video/videoWatch";

import mainPage from "../views/Index";

export default function Video() {
  const [userRole, setUserRole] = React.useState(null);

  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  });
  return (
    <>
      <Switch>
        {userRole === "Admin" && (
          <Route path="/video/videoUpload" exact component={videoUpload} />
        )}
        {userRole === "Teacher" && (
          <Route path="/video/videoUpload" exact component={videoUpload} />
        )}
        {userRole === "User" && (
          <Route path="/video/videoUpload" exact component={mainPage} />
        )}
        <Route path="/video/videoUpload" exact component={mainPage} />
        {userRole === "Admin" && (
          <Route path="/video/videoLibrary" exact component={videoLibrary} />
        )}
        {userRole === "Teacher" && (
          <Route path="/video/videoLibrary" exact component={videoLibrary} />
        )}
        {userRole === "User" && (
          <Route path="/video/videoLibrary" exact component={videoLibrary} />
        )}
        <Route path="/video/videoLibrary" exact component={mainPage} />
        {<Route path="/video/videoWatch" exact component={videoWatch} />}
      </Switch>
    </>
  );
}
