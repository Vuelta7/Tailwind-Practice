import info1 from "../assets/advice-section1.png";
import info2 from "../assets/advice-section2.png";
import info3 from "../assets/advice-section3.png";
import info4 from "../assets/advice-section4.png";

export default function ThirdPage() {
  return (
    <section className="bg-custom pb-20">
      <div className="mx-auto w-[50vw] space-y-5 py-20 text-center">
        <h3 className="text-primary-text text-4xl font-bold">
          Practice Advice
        </h3>
        <p className="text-secondary-text">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="mx-auto flex w-[230px] flex-col justify-between space-y-10 lg:w-[60vw] lg:flex-row">
        <div className="w-[230px]">
          <div className="space-y-4 bg-white px-5 py-5">
            <h6 className="text-primary-text text-lg font-bold">
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
          <div className="space-y-4 bg-white px-5 py-5">
            <h6 className="text-primary-text text-lg font-bold">
              Fastest way to organize
            </h6>
            <p className="text-secondary-text">
              “Quantum mechanics” is the description of the behaviour of matter
            </p>
          </div>
          <img src={info2} />
        </div>

        <div className="w-[230px]">
          <div className="space-y-4 bg-white px-5 py-5">
            <h6 className="text-primary-text text-lg font-bold">
              Fastest way to take action
            </h6>
            <p className="text-secondary-text">
              They describe a universe consisting of bodies moving
            </p>
          </div>
          <img src={info3} />
        </div>

        <div className="w-[230px]">
          <div className="space-y-4 bg-white px-5 py-5">
            <h6 className="text-primary-text text-lg font-bold">
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
