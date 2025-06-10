import Assurance1 from "../assets/assuranceIcon1.png";
import Assurance2 from "../assets/assuranceIcon2.png";
import Assurance3 from "../assets/assuranceIcon3.png";
import Assurance4 from "../assets/assuranceIcon4.png";

const AssuranceSection = () => {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-32 bg-[#f5f7fa] py-[4em]">
          <div className="w-100">
            <p className="w-90 text-[2em] leading-snug font-semibold text-[#4d4d4d]">
              Helping a local{" "}
              <span className="text-[#4caf4f]">business reinvent itself</span>
            </p>
            <p className="mt-4 w-95 text-[#717171]">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-6">
            <div className="flex items-center gap-4">
              <img src={Assurance1} className="h-10 w-10" />
              <div>
                <p className="text-[2em] font-semibold text-[#4d4d4d]">
                  2,245,341
                </p>
                <p className="text-[#717171]">Members</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Assurance2} className="h-10 w-10" />
              <div>
                <p className="text-[2em] font-semibold text-[#4d4d4d]">
                  46,328
                </p>
                <p className="text-[#717171]">Clubs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Assurance3} className="h-10 w-10" />
              <div>
                <p className="text-[2em] font-semibold text-[#4d4d4d]">
                  828,867
                </p>
                <p className="text-[#717171]">Event Bookings</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Assurance4} className="h-10 w-10" />
              <div>
                <p className="text-[2em] font-semibold text-[#4d4d4d]">
                  1,926,436
                </p>
                <p className="text-[#717171]">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;
