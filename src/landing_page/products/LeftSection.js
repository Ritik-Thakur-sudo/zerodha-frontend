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
          <img src={imageURL} className="product-image"/>
        </div>
        <div className="col-3"></div>
        <div className="col-5 mt-5 p-5">
          <h1 className="mb-4">{productName}</h1>
          <p className="mb-4">{productDescription}</p>
          <div className="d-flex gap-5 mb-1">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo <i class="fa fa-long-arrow-right"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              learn More <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <div className="d-flex gap-5 mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
