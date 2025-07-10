import imageMap from "./assets/imageMap";

const featuresMobile = [
  {
    icon: imageMap["bag"],
    label: "Web Development",
  },
  {
    icon: imageMap["store"],
    label: "National top 50 firms",
    highlighted: true,
  },
  {
    icon: imageMap["note"],
    label: "Digital Marketing",
  },
];

const featuresDesktop = [
  {
    icon: imageMap["bag"],
    label: "Business Growing",
  },
  {
    icon: imageMap["store"],
    label: "Digital Marketing",
    highlighted: true,
  },
  {
    icon: imageMap["note"],
    label: "Business Growing",
  },
];

const FeatureCard = ({ icon, label, highlighted }) => (
  <div
    className={`flex flex-col items-center gap-2 rounded-xl p-6 text-center shadow-md transition-all ${
      highlighted
        ? "bg-cyan-500 text-white"
        : "bg-white text-gray-800 hover:shadow-lg"
    }`}
  >
    <img
      src={icon}
      alt={label}
      className={`h-8 w-8 ${highlighted ? "brightness-0 invert" : ""}`}
    />
    <p className="text-sm font-semibold">{label}</p>
  </div>
);

const SecondPage = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-10">
      {/* Title and Description */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          WHY CHOOSE US
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 md:hidden">
        {featuresMobile.map((item, idx) => (
          <FeatureCard key={idx} {...item} />
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden items-start justify-center gap-6 md:flex">
        {featuresDesktop.map((item, idx) => (
          <FeatureCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SecondPage;
