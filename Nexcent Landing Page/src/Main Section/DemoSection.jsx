import Arrow from "../assets/arrow.png";

const DemoSection = () => {
  return (
    <section class="flex flex-col items-center justify-center bg-[#f5f7fa] p-[3vh]">
      <p className="mb-[3vh] text-[3em] font-semibold text-[#263238]">
        Pellentesque suscipit fringilla libero eu.
      </p>

      <button className="flex text-[#4caf4f]">
        <p>Get a Demo</p>
        <img className={Arrow}></img>
      </button>
    </section>
  );
};

export default DemoSection;
