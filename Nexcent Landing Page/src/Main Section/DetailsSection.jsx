import DetailsSectionPic from "../assets/detailsSection.png";

const DetailsSection = () => {
  return (
    <section className="mx-auto max-w-7xl py-[4em]">
      <div className="flex w-full justify-between">
        <img src={DetailsSectionPic} />
        <div className="flex flex-col justify-center">
          <p className="mb-3 w-[30vw] text-[2em] font-semibold text-[#4d4d4d]">
            The unseen of spending three years at Pixelgrade
          </p>
          <p className="mb-6 w-[35vw] text-[#4d4d4d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="w-fit rounded bg-[#4caf4f] px-6 py-2 text-white transition hover:bg-[#43a047]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
