function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
     <div className="container">
      <div className="row p-5">
        <div className="col-4 mt-5 p-5">
          <h1 className="mb-4">{productName}</h1>
          <p className="mb-4">{productDescription}</p>
          <div className="d-flex gap-5 mb-1">
            <a href={learnMore} className="text-decoration-none">
              learn More <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-2"></div>
         <div className="col-4">
          <img src={imageURL} className="product-image"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
