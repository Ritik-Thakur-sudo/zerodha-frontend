import Hero from "./Hero";
import Investment from "./Investment";
import OpenAccount from "../OpenAccount"
import DematAccount from "./DematAccount";
import DematBenefits from "./DematBenefits";
import AccountTypes from "./AccountTypes";
import FAQs from "./FAQs";

function Signup() {
  return (
    <>
      <Hero />
      <Investment />
      <DematAccount />
      <DematBenefits />
      <AccountTypes />
      <FAQs />
      <OpenAccount />
    </>
  );
}

export default Signup;
