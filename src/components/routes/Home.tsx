import { Header } from "../static/Header";
import { FrontPage } from "../static/FrontPage";

import "../../assets/styles/Home.css";

export function Home(): JSX.Element {
  return (
    <div className="carousel-track">
      <Header />
      <FrontPage />
    </div>
  );
}
