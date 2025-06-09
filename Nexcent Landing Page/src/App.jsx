import "./App.css";
import NavSection from "./NavSection.jsx";
import HeadingSection from "./Main Section/HeadingSection.jsx";
import ClientSection from "./Main Section/ClientSection.jsx";
import SuitableSection from "./Main Section/SuitableSection.jsx";
import DetailsSection from "./Main Section/DetailsSection.jsx";
import AssuranceSection from "./Main Section/AssuranceSection.jsx";
import DesignSection from "./Main Section/DesignSection.jsx";
import CustomerSection from "./Main Section/CustomerSection.jsx";
import ReadMoreSection from "./Main Section/ReadMoreSection.jsx";
import DemoSection from "./Main Section/DemoSection.jsx";
import FooterSection from "./FooterSection.jsx";

function App() {
  return (
    <>
      <NavSection />

      <main>
        <HeadingSection />
        <ClientSection />
        <SuitableSection />
        <DetailsSection />
        <AssuranceSection />
        <DesignSection />
        <CustomerSection />
        <ReadMoreSection />
        <DemoSection />
      </main>

      <FooterSection />
    </>
  );
}

export default App;
