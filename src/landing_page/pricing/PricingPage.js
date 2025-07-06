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
        <a className="text-decoration-none mx-1" href="#">
          Calculate your costs upfront
        </a>
        using our brokerage calculator
      </p>
      <ChargesExplainTab / >
      <ServiceCharge />
    </>
  );
}

export default PricingPage;
