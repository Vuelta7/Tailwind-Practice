import Assurance1 from "../assets/assuranceIcon1.png";
import Assurance2 from "../assets/assuranceIcon2.png";
import Assurance3 from "../assets/assuranceIcon3.png";
import Assurance4 from "../assets/assuranceIcon4.png";

const AssuranceSection = () => {
  return (
    <section className="flex items-center justify-center gap-32 bg-[#f5f7fa] p-16">
      <div className="max-w-md">
        <p className="text-3xl leading-snug font-medium text-gray-800">
          Helping a local{" "}
          <span className="text-[#4caf4f]">business reinvent itself</span>
        </p>
        <p className="mt-4 text-gray-600">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        <div className="flex items-center gap-4">
          <img src={Assurance1} className="h-10 w-10" />
          <div>
            <p className="text-lg font-semibold text-gray-800">2,245,341</p>
            <p className="text-sm text-gray-500">Members</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img src={Assurance2} className="h-10 w-10" />
          <div>
            <p className="text-lg font-semibold text-gray-800">46,328</p>
            <p className="text-sm text-gray-500">Clubs</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img src={Assurance3} className="h-10 w-10" />
          <div>
            <p className="text-lg font-semibold text-gray-800">828,867</p>
            <p className="text-sm text-gray-500">Event Bookings</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img src={Assurance4} className="h-10 w-10" />
          <div>
            <p className="text-lg font-semibold text-gray-800">1,926,436</p>
            <p className="text-sm text-gray-500">Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;
