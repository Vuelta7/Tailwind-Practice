import hooli from "../assets/hooli.png";
import lya from "../assets/lya.png";
import leaf from "../assets/leaf.png";
import stripe from "../assets/stripe.png";
import aws from "../assets/aws.png";
import reddit from "../assets/reddit.png";

export default function FifthPage() {
  return (
    <section className="bg-custom md:relative md:flex md:flex-col md:items-center md:justify-center">
      <section className="bg-custom flex flex-col items-center justify-center gap-7 px-10 py-15 md:flex-row md:pt-15 md:pb-30">
        <img src={hooli} className="w-40" />
        <img src={lya} className="w-30" />
        <img src={leaf} className="w-30" />
        <img src={stripe} className="w-30" />
        <img src={aws} className="w-30" />
        <img src={reddit} className="w-30" />
      </section>
      <section className="bg-secondary flex flex-col items-center justify-center gap-5 p-10 text-center md:absolute md:bottom-10 md:w-[60vw] md:flex-row">
        <h4 className="text-2xl font-bold text-white">
          Subscribe For Latest Newsletter
        </h4>
        <div className="flex">
          <input
            className="rounded-l-lg bg-white p-3"
            placeholder="Your Email"
            type="text"
          />
          <button className="bg-primary rounded-r-lg p-3 text-white">
            <p>Subscribe</p>
          </button>
        </div>
      </section>
      <div className="bg-dark hidden w-full md:flex md:h-30"></div>
    </section>
  );
}
