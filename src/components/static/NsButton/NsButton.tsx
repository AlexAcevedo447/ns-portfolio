import { Link } from "react-router-dom";
import "./Button.css";
import "./CakeButton.css";
import "./GlowButton.css";
import { ButtonProps } from "./utils/button.interfaces";

export function NsButton({ title, where, mode }: ButtonProps): JSX.Element {
  if (mode === "cake") {
    return (
      <Link to={where} className="btn">
        <p className="btn btn-cake">{title}</p>
      </Link>
    );
  } else if (mode === "glow") {
    return (
      <Link to={where} className="btn">
        <p className="btn btn-glow">
          {title}
          <span></span>
          <span></span>
        </p>
      </Link>
    );
  } else {
    return (
      <Link to={where} className="btn">
        <p className="btn btn-1">{title}</p>
      </Link>
    );
  }
}
