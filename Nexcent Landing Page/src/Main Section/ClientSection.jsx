import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
import Client4 from "../assets/client4.png";
import Client5 from "../assets/client5.png";
import Client6 from "../assets/client6.png";

const ClientSection = () => {
  return (
    <section class="my-[5vh] flex flex-col items-center justify-center px-[3em]">
      <p className="text-[2em] font-semibold text-[#4d4d4d]">Our Clients</p>
      <p className="text-[#717171]">
        We have been working with some Fortune 500+ clients
      </p>
      <ul className="mt-[2vh] flex list-none gap-[12em] no-underline">
        <li>
          <img src={Client1}></img>
        </li>
        <li>
          <img src={Client2}></img>
        </li>
        <li>
          <img src={Client3}></img>
        </li>
        <li>
          <img src={Client4}></img>
        </li>
        <li>
          <img src={Client5}></img>
        </li>
        <li>
          <img src={Client6}></img>
        </li>
      </ul>
    </section>
  );
};

export default ClientSection;
