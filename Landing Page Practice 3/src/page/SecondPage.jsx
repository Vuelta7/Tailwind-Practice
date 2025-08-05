import store from "../assets/store.png";
import bag from "../assets/bag.png";
import note from "../assets/note.png";

export default function SecondPage() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto text-center py-20 w-[50vw] space-y-5">
        <h3 className="text-4xl text-primary-text font-bold">WHY CHOOSE US</h3>
        <p className="text-secondary-text">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="lg:w-[60vw] w-[320px] lg:h-[150px] h-[450px] mx-auto flex lg:flex-row flex-col justify-between">
        <div className=" flex flex-col gap-3 items-center justify-center rounded-xl shadow-2xl w-[320px] py-7">
          <img src={bag} />
          <p className="font-bold text-primary-text">Web Development</p>
        </div>

        <div className="flex bg-secondary flex-col gap-3 items-center justify-center rounded-xl shadow-2xl w-[320px] py-7">
          <img src={store} />
          <p className="font-bold text-white">National top 50 firms</p>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center rounded-xl shadow-2xl w-[320px] py-7">
          <img src={note} />
          <p className="font-bold text-primary-text">Digital Marketing</p>
        </div>
      </div>
    </section>
  );
}
