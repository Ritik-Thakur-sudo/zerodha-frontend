import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-4 mt-2 p-5">
          <img src={imageURL} className="product-image" alt="product-image"/>
        </div>
        <div className="col-3"></div>
        <div className="col-5 mt-5 p-5">
          <h1 className="mb-4">{productName}</h1>
          <p className="mb-4">{productDescription}</p>
          <div className="d-flex gap-5 mb-1">
            <Link to={"/tryDemo"} className="text-decoration-none">
              Try Demo <i class="fa fa-long-arrow-right"></i>
            </Link>
            <Link to={"/learnMore"} className="text-decoration-none">
              learn More <i class="fa fa-long-arrow-right"></i>
            </Link>
          </div>
          <div className="d-flex gap-5 mt-4">
            <Link to={"/googlePlay"}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play Badge"/>
            </Link>
            <Link to={"/appStore"}>
              <img src="media/images/appstoreBadge.svg" alt="App store Badge"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
