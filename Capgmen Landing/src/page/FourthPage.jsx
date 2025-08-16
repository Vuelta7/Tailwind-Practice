import playVid from "../assets/card-item.png";
import meter from "../assets/meter-logo.png";
import people from "../assets/peoples-icon.png";

export default function FourthPage() {
  return (
    <section className="bg-white">
      <div className="space-y-5 px-10 py-20 text-center">
        <h3 className="text-primary-text text-4xl font-bold">
          We take care customers our all expert here.
        </h3>
        <p className="text-secondary-text">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="items-center justify-center sm:flex sm:pb-20">
        <img className="bg-center px-10 sm:w-md lg:w-2xl" src={playVid} />

        <div className="max-w-md px-10 pb-10">
          <div className="space-y-5 py-10">
            <h4 className="text-primary-text text-4xl font-bold">
              Most trusted in our field
            </h4>
            <p className="text-secondary-text">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex gap-2">
              <img className="w-10" src={people} />
              <div>
                <h6 className="text-primary-text font-bold">
                  the quick fox jumps over the lazy dog
                </h6>
                <p className="text-secondary-text">
                  Things on a very small scale ...
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <img className="w-10" src={meter} />
              <div>
                <h6 className="text-primary-text font-bold">
                  the quick fox jumps over the lazy dog
                </h6>
                <p className="text-secondary-text">
                  Things on a very small scale ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
