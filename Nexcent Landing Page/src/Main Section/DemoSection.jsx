import Arrow from "../assets/arrow.png";

const DemoSection = () => {
  return (
    <section class="flex flex-col items-center justify-center bg-[#f5f7fa] p-[3vh]">
      <p className="mb-[3vh] w-200 text-center text-[4em] font-semibold text-[#263238]">
        Pellentesque suscipit fringilla libero eu.
      </p>

      <button className="flex w-fit rounded bg-[#4caf4f] px-6 py-2 text-white transition hover:bg-[#43a047]">
        <p>Get a Demo</p>
        <img src={Arrow} className="brightness-300"></img>
      </button>
    </section>
  );
};

export default DemoSection;
