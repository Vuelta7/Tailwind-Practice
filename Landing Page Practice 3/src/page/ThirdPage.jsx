import info1 from "../assets/advice-section1.png";
import info2 from "../assets/advice-section2.png";
import info3 from "../assets/advice-section3.png";
import info4 from "../assets/advice-section4.png";

export default function ThirdPage() {
  return (
    <section className="bg-custom pb-20">
      <div className="mx-auto w-[50vw]  text-center py-20  space-y-5">
        <h3 className="text-4xl text-primary-text font-bold">
          Practice Advice
        </h3>
        <p className="text-secondary-text">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="w-[230px] lg:w-[60vw] mx-auto space-y-10 lg:flex-row flex flex-col justify-between">
        <div className="w-[230px]">
          <div className=" bg-white px-5 py-5 space-y-4">
            <h6 className="font-bold text-lg text-primary-text">
              A single source of truth
            </h6>
            <p className="text-secondary-text">
              Newton thought that light was made up of particles, but then it
              was discovered
            </p>
          </div>
          <img src={info1} />
        </div>

        <div className="w-[230px]">
          <div className=" bg-white px-5 py-5 space-y-4">
            <h6 className="font-bold text-lg text-primary-text">
              Fastest way to organize
            </h6>
            <p className="text-secondary-text">
              “Quantum mechanics” is the description of the behaviour of matter
            </p>
          </div>
          <img src={info2} />
        </div>

        <div className="w-[230px]">
          <div className=" bg-white px-5 py-5 space-y-4">
            <h6 className="font-bold text-lg text-primary-text">
              Fastest way to take action
            </h6>
            <p className="text-secondary-text">
              They describe a universe consisting of bodies moving
            </p>
          </div>
          <img src={info3} />
        </div>

        <div className="w-[230px]">
          <div className=" bg-white px-5 py-5 space-y-4">
            <h6 className="font-bold text-lg text-primary-text">
              Work better together
            </h6>
            <p className="text-secondary-text">
              They finally obtained a consistent description of the behaviour
            </p>
          </div>
          <img src={info4} />
        </div>
      </div>
    </section>
  );
}
