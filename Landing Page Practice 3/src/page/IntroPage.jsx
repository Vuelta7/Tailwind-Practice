import search from "../assets/search.png";
import cart from "../assets/cart.png";
import menu from "../assets/menu.png";
import agent from "../assets/agent.png";

export default function IntroPage() {
  return (
    <header className="overflow-hidden flex flex-col md:bg-[url('/desktop-header-cover.png')] bg-center bg-cover bg-[url('/mobile-header-cover.png')] h-[100vh]">
      {/* Responsive Nav bar */}
      <nav className="flex py-5 px-10 justify-between items-center">
        <h4 className="font-bold text-2xl 2xl:ml-40 text-primary-text p-3">
          Capgemen
        </h4>
        <div className="flex items-center space-x-5">
          <div className="hidden md:flex text-secondary-text space-x-5 font-semibold">
            <p>Home</p>
            <p>Product</p>
            <p>Pricing</p>
            <p>Contact</p>
          </div>
          <img src={search} className="w-8" />
          <img src={cart} className="w-7" />
          <img src={menu} className="w-9 lg:ml-30" />
        </div>
      </nav>

      {/* Intro Page */}
      <section className="flex-1 flex flex-col md:flex-row justify-between md:mt-30 2xl:mt-10">
        <div className="mt-20 md:mt-40 2xl:ml-50 md:ml-10 ">
          <div className="flex flex-col mb-8 gap-8 justify-center items-center md:text-left text-center">
            <h1 className="font-bold lg:text-6xl 2xl:text-8xl text-4xl text-primary-text">
              We Take Care
              <br />
              of the Future
            </h1>
            <p className="lg:text-2xl 2xl:text-4xl text-secondary-text">
              We know how large objects will act,
              <br />
              but things on a small scale.
            </p>
          </div>

          {/* Intro page dual button */}
          <div class="flex lg:flex-row flex-col items-center gap-4 ">
            <button class="bg-secondary text-white font-semibold py-3 px-8 rounded-full shadow-md ">
              Get Quote Now
            </button>

            <button class="border-2 border-secondary text-secondary font-semibold py-3 px-8 rounded-full ">
              Learn More
            </button>
          </div>
        </div>

        <img
          className="max-w-sm w-full 2xl:max-w-3xl md:max-w-lg sm:max-w-md lg:max-w-2xl mx-auto"
          src={agent}
        />
      </section>
    </header>
  );
}
