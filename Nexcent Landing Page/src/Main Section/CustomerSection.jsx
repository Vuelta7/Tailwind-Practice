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
    <section className="flex items-start justify-center gap-10 bg-[#f5f7fa] p-10">
      <img
        src={CustomerPhoto}
        alt="Customer"
        className="h-56 w-56 rounded-lg object-cover"
      />

      <div className="max-w-3xl">
        <p className="mb-4 text-gray-600">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="font-medium text-[#4caf4f]">Tim Smith</p>
        <p className="mb-6 text-sm text-gray-500">
          British Dragon Boat Racing Association
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-4">
            <img src={Client1} className="h-6" />
            <img src={Client2} className="h-6" />
            <img src={Client3} className="h-6" />
            <img src={Client4} className="h-6" />
            <img src={Client5} className="h-6" />
            <img src={Client6} className="h-6" />
          </div>

          <button className="flex items-center font-medium text-[#4caf4f] hover:underline">
            Meet all customers
            <img src={Arrow} className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
