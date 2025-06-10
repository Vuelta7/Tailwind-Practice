import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
import Client4 from "../assets/client4.png";
import Client5 from "../assets/client5.png";
import Client6 from "../assets/client6.png";
import CustomerPhoto from "../assets/customer.png";
import Arrow from "../assets/arrow.png";

const CustomerSection = () => {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-10">
        <img
          src={CustomerPhoto}
          alt="Customer"
          className="rounded-lg object-cover"
        />

        <div className="max-w-2xl">
          <p className="mb-4 text-[#4d4d4d]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="font-semibold text-[#4caf4f]">Tim Smith</p>
          <p className="mb-6 text-sm text-[#717171]">
            British Dragon Boat Racing Association
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-4">
              <img src={Client2} className="h-15" />
              <img src={Client3} className="h-15" />
              <img src={Client4} className="h-15" />
              <img src={Client5} className="h-15" />
              <img src={Client6} className="h-15" />
              <img src={Client1} className="h-15" />
            </div>

            <div className="flex items-center justify-center">
              <button className="flex items-center gap-2 text-xl font-semibold text-green-500 transition-all duration-200 group-hover:gap-3 hover:text-green-600">
                Meet all customer
                <img
                  src={Arrow}
                  alt="arrow"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
