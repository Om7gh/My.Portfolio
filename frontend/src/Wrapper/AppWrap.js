import React from "react";
import { SocialMedia, NavigationDot } from "../components";
const AppWrap = (Components, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Components />

          <div className="copyright">
            <p className="p-text">&copy; 2023 OMAR</p>
            <p className="p-text">All Rights reserved</p>
          </div>
        </div>

        <NavigationDot active={idName} />
      </div>
    );
  };

export default AppWrap;
