import ReadMorePhoto1 from "../assets/readMorePhoto1.png";
import ReadMorePhoto2 from "../assets/readMorePhoto2.png";
import ReadMorePhoto3 from "../assets/readMorePhoto3.png";
import Arrow from "../assets/arrow.png";

const ReadMoreSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Header Section */}
        <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
          Caring is the new marketing
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative">
            <div className="relative h-96 w-full">
              <div className="h-64 w-full overflow-hidden rounded-xl">
                <img
                  src={ReadMorePhoto1}
                  alt="Creating Streamlined Safeguarding Processes"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-45 left-1/2 flex h-45 w-80 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center rounded-xl bg-white p-1 shadow-xl transition-all duration-300 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <h3 className="mb-4 text-center text-lg leading-snug font-semibold text-[#717171]">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h3>
                <div className="flex items-center justify-center">
                  <button className="flex items-center gap-2 text-sm font-semibold text-green-500 transition-all duration-200 group-hover:gap-3 hover:text-green-600">
                    Readmore
                    <img src={Arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative">
            <div className="relative h-96 w-full">
              <div className="h-64 w-full overflow-hidden rounded-xl">
                <img
                  src={ReadMorePhoto2}
                  alt="Safeguarding responsibilities"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-45 left-1/2 flex h-45 w-80 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center rounded-xl bg-white p-1 shadow-xl transition-all duration-300 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <h3 className="mb-4 text-center text-lg leading-snug font-semibold text-[#717171]">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </h3>
                <div className="flex items-center justify-center">
                  <button className="flex items-center gap-2 text-sm font-semibold text-green-500 transition-all duration-200 group-hover:gap-3 hover:text-green-600">
                    Readmore
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

          {/* Card 3 */}
          <div className="group relative">
            <div className="relative h-96 w-full">
              <div className="h-64 w-full overflow-hidden rounded-xl">
                <img
                  src={ReadMorePhoto3}
                  alt="Membership Model with Triathlon Australia"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-45 left-1/2 flex h-45 w-80 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center rounded-xl bg-white p-1 shadow-xl transition-all duration-300 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <h3 className="mb-4 text-center text-lg leading-snug font-semibold text-[#717171]">
                  Revamping the Membership Model with Triathlon Australia
                </h3>
                <div className="flex items-center justify-center">
                  <button className="flex items-center gap-2 text-sm font-semibold text-green-500 transition-all duration-200 group-hover:gap-3 hover:text-green-600">
                    Readmore
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
        </div>
      </div>
    </section>
  );
};

export default ReadMoreSection;
