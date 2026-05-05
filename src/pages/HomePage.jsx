import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Industries from "../components/Industries.jsx";
// import Pricing from "../components/Pricing.jsx";
import About from "../components/About.jsx";
import ServiceDescriptions from "../components/ServiceDescriptions.jsx";
import Results from "../components/Results.jsx";
import Divider from "../components/Divider.jsx";
import FAQSection from "../components/FAQSection.jsx";
import { FAQS_PAGE_1 } from "../seeds/FAQs.js";
import LogoConveyor from "../components/LogoConveyer.jsx";
import { clientLogos } from "../seeds/clientLogos.js";

// ── Divider between sections ───────────────────────────────────────────────
// const Divider = () => (
//   <div className="px-8 py-2">
//     <div className="divider-glow" />
//   </div>
// );

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Industries />
      <Divider />
      <ServiceDescriptions />
      <Divider />
      {/* <Stats /> */}
      {/* <Divider /> */}
      <Results />
      <Divider />
      <LogoConveyor data={clientLogos} />
      <Divider />
      {/* <StackingCards /> */}
      {/* <CaseStudies /> */}
      {/* <Divider /> */}
      {/* <Pricing /> */}
      <FAQSection FAQS={FAQS_PAGE_1} />
    </div>
  );
}
