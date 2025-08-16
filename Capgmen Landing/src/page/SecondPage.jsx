import store from "../assets/store.png";
import bag from "../assets/bag.png";
import note from "../assets/note.png";

export default function SecondPage() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto w-[50vw] space-y-5 py-20 text-center">
        <h3 className="text-primary-text text-4xl font-bold">WHY CHOOSE US</h3>
        <p className="text-secondary-text">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="mx-auto flex h-[450px] w-[320px] flex-col justify-between lg:h-[150px] lg:w-[60vw] lg:flex-row">
        <div className="flex w-[320px] flex-col items-center justify-center gap-3 rounded-xl py-7 shadow-2xl">
          <img src={bag} />
          <p className="text-primary-text font-bold">Web Development</p>
        </div>

        <div className="bg-secondary flex w-[320px] flex-col items-center justify-center gap-3 rounded-xl py-7 shadow-2xl">
          <img src={store} />
          <p className="font-bold text-white">National top 50 firms</p>
        </div>

        <div className="flex w-[320px] flex-col items-center justify-center gap-3 rounded-xl py-7 shadow-2xl">
          <img src={note} />
          <p className="text-primary-text font-bold">Digital Marketing</p>
        </div>
      </div>
    </section>
  );
}
