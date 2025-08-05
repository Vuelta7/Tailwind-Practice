import phone from "../assets/call-logo.png";
import loc from "../assets/loc-logo.png";
import send from "../assets/send_btn.png";
import facebook from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import x from "../assets/x.png";
import yt from "../assets/youtube.png";

const txt = [
  "Company Info",
  "About Us",
  "Carrier",
  "We are hiring",
  "Blog",
  "Legal",
  "About Us",
  "Carrier",
  "We are hiring",
  "Blog",
  "Features",
  "Business Marketing",
  "User Analytic",
  "Live Chat",
  "Unlimited Support",
  "Resources",
  "IOS & Android",
  "Watch a Demo",
  "Customers",
  "API",
  "Get In Touch",
  "(480) 555-0103",
  "4517 Washington Ave.",
  "debra.holt@example.com",
  "Made With Love By Figmaland All Right Reserved",
];

export default function FooterPage() {
  return (
    <footer>
      <section className="bg-secondary flex flex-col space-y-10 px-20 py-15 md:flex-row md:justify-between md:px-[20vw]">
        <div className="space-y-3 text-white">
          <h6 className="mb-5 font-bold">{txt[0]}</h6>
          <p>{txt[1]}</p>
          <p>{txt[2]}</p>
          <p>{txt[3]}</p>
          <p>{txt[4]}</p>
        </div>

        <div className="space-y-3 text-white">
          <h6 className="mb-5 font-bold">{txt[5]}</h6>
          <p>{txt[6]}</p>
          <p>{txt[7]}</p>
          <p>{txt[8]}</p>
          <p>{txt[9]}</p>
        </div>

        <div className="space-y-3 text-white">
          <h6 className="mb-5 font-bold">{txt[10]}</h6>
          <p>{txt[11]}</p>
          <p>{txt[12]}</p>
          <p>{txt[13]}</p>
          <p>{txt[14]}</p>
        </div>

        <div className="space-y-3 text-white">
          <h6 className="mb-5 font-bold">{txt[15]}</h6>
          <p>{txt[16]}</p>
          <p>{txt[17]}</p>
          <p>{txt[18]}</p>
          <p>{txt[19]}</p>
        </div>

        <div className="space-y-3 text-white">
          <h6 className="mb-5 font-bold">{txt[20]}</h6>
          <div className="flex space-x-2">
            <img src={phone} />
            <p>{txt[21]}</p>
          </div>
          <div className="flex space-x-2">
            <img src={loc} className="w-5" />
            <p>{txt[22]}</p>
          </div>
          <div className="flex space-x-2">
            <img src={send} />
            <p>{txt[23]}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 px-20 py-10 md:flex-row md:justify-between md:px-[20vw]">
        <p className="text-secondary-text">{txt[24]}</p>
        <div className="flex gap-4">
          <img src={facebook} />
          <img src={ig} />
          <img src={x} />
          <img src={yt} />
        </div>
      </section>
    </footer>
  );
}
