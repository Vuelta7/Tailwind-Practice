import DetailsSectionPic from "../assets/detailsSection.png";

const DetailsSection = () => {
  return (
    <section className="flex items-center justify-center gap-[5vw] px-[5em] py-[2em]">
      <img src={DetailsSectionPic} />
      <div className="w-[28vw]">
        <p className="bottomGap text-[2em] font-semibold text-[#4d4d4d]">
          The unseen of spending three years at Pixelgrade
        </p>
        <p className="bottomGap text-[#717171]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="w-fit rounded bg-[#4caf4f] px-6 py-2 text-white transition hover:bg-[#43a047]">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default DetailsSection;
