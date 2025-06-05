import DesignIllustration from "../assets/footerIllustration.png";

const DesignSection = () => {
  return (
    <section className="flex items-center justify-center gap-16 bg-white p-16">
      <img
        src={DesignIllustration}
        alt="Design Illustration"
        className="w-[40%] max-w-md"
      />

      <div className="max-w-xl">
        <p className="mb-4 text-3xl font-semibold text-gray-800">
          How to design your site footer like we did
        </p>
        <p className="mb-6 text-gray-600">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="w-fit rounded bg-[#4caf4f] px-6 py-2 text-white transition hover:bg-[#43a047]">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default DesignSection;
