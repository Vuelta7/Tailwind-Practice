import search from "../assets/search.png";
import cart from "../assets/cart.png";
import menu from "../assets/menu.png";
import agent from "../assets/agent.png";

export default function IntroPage() {
  return (
    <header className="flex h-[100vh] flex-col overflow-hidden bg-[url('/mobile-header-cover.png')] bg-cover bg-center md:bg-[url('/desktop-header-cover.png')] md:bg-bottom">
      {/* Responsive Nav bar */}
      <nav className="flex items-center justify-between p-5">
        <h4 className="text-primary-text p-3 text-2xl font-bold 2xl:ml-30">
          Capgemen
        </h4>
        <div className="flex items-center space-x-5">
          <div className="text-secondary-text hidden space-x-5 font-semibold md:flex">
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
      <section className="flex flex-1 flex-col justify-between md:mt-30 md:flex-row 2xl:mt-10">
        <div className="mt-20 md:mt-40 md:ml-10 xl:pb-20 2xl:ml-40">
          <div className="mb-8 flex flex-col items-center justify-center gap-8 text-center md:text-left">
            <h1 className="text-primary-text text-4xl font-bold 2xl:text-7xl">
              We Take Care
              <br />
              of the Future
            </h1>
            <p className="text-secondary-text 2xl:text-3xl">
              We know how large objects will act,
              <br />
              but things on a small scale.
            </p>
          </div>

          {/* Intro page dual button */}
          <div class="flex flex-col items-center gap-4 xl:flex-row">
            <button class="bg-secondary rounded-full px-8 py-3 font-semibold text-white shadow-md">
              Get Quote Now
            </button>

            <button class="border-secondary text-secondary rounded-full border-2 px-8 py-3 font-semibold">
              Learn More
            </button>
          </div>
        </div>

        <img
          className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
          src={agent}
        />
      </section>
    </header>
  );
}
