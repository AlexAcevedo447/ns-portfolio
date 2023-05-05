import logo from "../../assets/ninja-logo.png";
import { Suspense, lazy } from "react";
import Buttons from "./NsButton";
import { Link } from "react-router-dom";
import "../../assets/styles/FrontPage.css";

export function FrontPage(): JSX.Element {
  return (
    <div className="fp">
      <div className="fp-content__info">
        <div className="logo">
          <picture className="img-container">
            <img src={logo} alt="Ninja Scripter Logo" className="img" />
          </picture>
        </div>
        <h1 className="fp-content__title">Ninja-Scripter</h1>
        <h3 className="fp-content__subtitle">Blog</h3>
      </div>
      <div className="fp-action">
        <div className="fp-button">
          <Buttons.NsButton title="Projects" where="" mode="glow" />
        </div>
      </div>
    </div>
  );
}
