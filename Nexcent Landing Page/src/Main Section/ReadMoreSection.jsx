import ReadMorePhoto1 from "../assets/readMorePhoto1.png";
import ReadMorePhoto2 from "../assets/readMorePhoto2.png";
import ReadMorePhoto3 from "../assets/readMorePhoto3.png";
import Arrow from "../assets/arrow.png";

const ReadMoreSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
          Caring is the new marketing
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        {/* Card 1 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <img src={ReadMorePhoto1} className="h-48 w-full object-cover" />
          <div className="p-5">
            <p className="mb-4 font-medium text-gray-800">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <button className="flex items-center gap-2 font-semibold text-green-600 hover:underline">
              Readmore <img src={Arrow} alt="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <img src={ReadMorePhoto2} className="h-48 w-full object-cover" />
          <div className="p-5">
            <p className="mb-4 font-medium text-gray-800">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <button className="flex items-center gap-2 font-semibold text-green-600 hover:underline">
              Readmore <img src={Arrow} alt="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <img src={ReadMorePhoto3} className="h-48 w-full object-cover" />
          <div className="p-5">
            <p className="mb-4 font-medium text-gray-800">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <button className="flex items-center gap-2 font-semibold text-green-600 hover:underline">
              Readmore <img src={Arrow} alt="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadMoreSection;
