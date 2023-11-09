import "../styles/pages_styles/404.css";
import Header404 from "../components/Header-404";
import { Link } from "react-router-dom";

//Raya - creating the ErrorPage layout
export default function ErrorPage() {
  return (
    <>
      <Header404 />
      <div className="cover-404">
        <div className="text-404">
          <h1>Oops!</h1>
          <p>
            Looks like you've wandered into the internet's Bermuda Triangle,
            while we’re on the rescue, enjoy some pixelated snacks and dance
            like no one's watching!
          </p>
        </div>

        <Link to="/home" className="error-page-btn-link-style">
          <button className="go-back-btn-404">Go back</button>
        </Link>
      </div>
    </>
  );
}
