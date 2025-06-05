import Illustration from "../assets/Illustration.png";

const HeadingSection = () => {
  return (
    <section className="flex h-[90vh] w-[100vw] items-center justify-center bg-[#f5f7fa] p-[5em]">
      <div className="flex gap-60">
        <div className="flex w-200 flex-col justify-center gap-[2em]">
          <h1 className="text-[4em] font-semibold text-[#4d4d4d]">
            Lessons and insights{" "}
            <span className="text-[#4caf4f]">from 8 years</span>
          </h1>
          <p className="text-[#717171]">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="w-fit rounded bg-[#4caf4f] px-6 py-2 text-white transition hover:bg-[#43a047]">
            Register
          </button>
        </div>
        <img className="h-[30em]" src={Illustration}></img>
      </div>
    </section>
  );
};

export default HeadingSection;
