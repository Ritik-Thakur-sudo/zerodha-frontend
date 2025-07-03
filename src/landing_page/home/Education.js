function Education() {
    return ( 
        <div className="container p-3">
            <div className="row">
                <div className="col-6 mt-5 mb-5">
                    <img src="media/images/education.svg" />
                </div>
                <div className="col-6 mt-5 mb-5">
                    <h2 className="mb-4">Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" style={{textDecoration: "none"}}>Varsity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" style={{textDecoration: "none"}}>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
     );
}

export default Education;