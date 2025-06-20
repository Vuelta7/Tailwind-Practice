import SuitableClient1 from "../assets/suitableClient1.png";
import SuitableClient2 from "../assets/suitableClient2.png";
import SuitableClient3 from "../assets/suitableClient3.png";

const SuitableSection = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
      <div className="mb-[2em] w-[25vw] items-center justify-center">
        <h2 className="mb-[1.5vh] text-[2em] font-semibold text-[#4d4d4d]">
          Manage your entire community in a single system
        </h2>
        <p className="text-[#717171]">Who is Nexcent suitable for?</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex w-[18vw] flex-col items-center justify-center gap-[1em] rounded-[10px] bg-white p-[2em] text-center shadow-sm">
          <img src={SuitableClient1}></img>
          <p className="text-[2em] font-semibold text-[#4d4d4d]">
            Membership Organisations
          </p>
          <p className="text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex w-[18vw] flex-col items-center justify-center gap-[1em] rounded-[10px] bg-white p-[2em] text-center shadow-sm">
          <img src={SuitableClient2}></img>
          <p className="text-[2em] font-semibold text-[#4d4d4d]">
            National Associations
          </p>
          <p className="text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex w-[18vw] flex-col items-center justify-center gap-[1em] rounded-[10px] bg-white p-[2em] text-center shadow-sm">
          <img src={SuitableClient3}></img>
          <p className="text-[2em] font-semibold text-[#4d4d4d]">
            Clubs And Groups
          </p>
          <p className="text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuitableSection;
