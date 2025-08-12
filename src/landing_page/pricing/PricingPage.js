import { Link } from "react-router-dom";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import ChargesTabs from "./ChargesTabs";
import ChargesExplainTab from "./ChargesExpainTab";
import ServiceCharge from "./ServiceCharge"

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <ChargesTabs />
      <p className="text-center fs-4">
        <Link to={""} className="text-decoration-none mx-1">
          Calculate your costs upfront
        </Link>
        using our brokerage calculator
      </p>
      <ChargesExplainTab / >
      <ServiceCharge />
    </>
  );
}

export default PricingPage;
