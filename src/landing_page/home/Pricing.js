import "../../css/Pricing.css";

function Pricing() {
    return ( 
        <div className="container mb-5 p-5">
            <div className="row">
                <div className="col-5 mt-3">
                    <h2 className="mb-3">Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{textDecoration: "none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className=" main-price-box col-7 d-flex justify-content-center mt-5 mb-5">
                    <div>
                        <img src="media/images/pricing (1).svg" className="price"/>
                        <p className="pricingTag1 text-muted"> Free account <br /> opening</p>
                    </div>
                    <div>
                        <img src="media/images/pricing (1).svg" className="price"/>
                        <p className="pricingTag2 text-muted">Free equity deliveryand <br /> direct mutual funds</p>
                    </div>
                    <div>
                        <img src="media/images/pricing (2).svg" className="price"/>
                        <p className="pricingTag3 text-muted"> Intraday and <br /> F&O</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;