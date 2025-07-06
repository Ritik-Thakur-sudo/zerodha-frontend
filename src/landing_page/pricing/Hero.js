function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center mb-5 p-5 border-bottom">
        <h1 className="fs-1">Charges</h1>
        <p className="fs-3 mt-2">List of all charges and taxes</p>
      </div>
      <div className="row p-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Pricing Equity" />
          <h2 className="fs-3 mb-3">Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4 ">
          <img src="media/images/intradayTrades.svg" alt="Pricing Equity" />
          <h2 className="fs-3 mb-3">Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
          <p></p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Pricing Equity" />
          <h2 className="fs-3 mb-3">Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
