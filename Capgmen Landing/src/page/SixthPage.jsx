import phone from "../assets/call-logo-xl.png";
import loc from "../assets/loc-logo-xl.png";
import send from "../assets/send-logo-xl.png";

export default function SixthPage() {
  return (
    <section>
      <section className="bg-custom">
        <div className="space-y-5 px-10 py-15 text-center">
          <h3 className="text-primary-text text-4xl font-bold">Get In Touch</h3>
          <p className="text-secondary-text">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-10 px-10 pb-15 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-3 bg-white p-10 text-center shadow">
            <img src={phone} />
            <div>
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <p className="font-bold">Get Support</p>
            <button className="border-primary text-primary rounded border p-2">
              <p>Submit Request</p>
            </button>
          </div>

          <div className="bg-dark flex flex-col items-center justify-center gap-3 p-10 text-center text-white shadow md:h-[45vh]">
            <img src={loc} />
            <div>
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <p className="font-bold">Get Support</p>
            <button className="rounded border border-white p-2">
              <p>Submit Request</p>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 bg-white p-10 text-center shadow">
            <img src={send} />
            <div>
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <p className="font-bold">Get Support</p>
            <button className="border-primary text-primary rounded border p-2">
              <p>Submit Request</p>
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 bg-white px-15 py-10 md:flex-row md:justify-between md:px-[20vw]">
        <div className="space-y-5">
          <h4 className="text-primary-text text-2xl font-bold">
            Consulting Agency For Your Business
          </h4>
          <p className="text-secondary-text">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <button className="bg-primary w-30 rounded py-3 font-bold text-white md:h-15 md:w-40">
          <p>Contact Us</p>
        </button>
      </section>
    </section>
  );
}
