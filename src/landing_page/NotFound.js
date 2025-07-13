import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1>Page Not Found</h1>
        <p className="fs-5 mt-1">
          Sorry, the page you are looking for not exist.
        </p>
        <Link to={"/"} style={{textDecoration: "none"}}>
          <button className="signUp mt-3 p-2 btn fs-5">Go Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
