import { useState } from "react";
import imageMap from "./assets/imageMap";

const IntroPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-screen max-h-[100vh] overflow-hidden bg-[url(./assets/mobile-header-cover.png)] bg-cover bg-[50%_60%] bg-no-repeat sm:bg-[url(./assets/desktop-header-cover.png)]">
      <nav className="relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-6">
          <h1 className="text-primary-txt text-xl font-bold">Capgemen</h1>

          <div className="flex items-center space-x-8">
            <ul className="hidden space-x-6 sm:flex">
              <li className="text-secondary-txt cursor-pointer">Home</li>
              <li className="text-secondary-txt cursor-pointer">Product</li>
              <li className="text-secondary-txt cursor-pointer">Pricing</li>
              <li className="text-secondary-txt cursor-pointer">Contact</li>
            </ul>

            <div className="flex items-center space-x-8">
              <button>
                <img
                  src={imageMap["search"]}
                  alt="Search"
                  className="h-5 w-5 cursor-pointer"
                />
              </button>
              <button>
                <img
                  src={imageMap["cart"]}
                  alt="Cart"
                  className="h-5 w-5 cursor-pointer"
                />
              </button>
            </div>

            <div className="sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <img
                  src={imageMap["navbar-toggler"]}
                  alt="Menu"
                  className="h-4 w-4"
                />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="bg-secondary absolute top-full left-0 z-50 w-full rounded-b-[70px] shadow-[0_4px_30px_-1px_rgba(0,0,0,0.1)] sm:hidden">
            <ul className="space-y-2 px-4 pt-2 pb-4 text-center">
              <li>
                <a
                  href="#"
                  className="block py-2 text-2xl font-semibold text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-2xl font-semibold text-white"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-2xl font-semibold text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-2xl font-semibold text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Desktop & Mobile Header */}
      <header className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 pt-10 sm:flex-row sm:items-center sm:justify-between sm:px-16 sm:pt-0">
        {/* Text left side */}
        <div className="flex flex-col items-center space-y-6 text-center sm:max-w-lg sm:items-start sm:text-left">
          <h1 className="text-primary-txt text-[44px] leading-tight font-bold">
            We Take Care <br className="hidden sm:block" /> of the Future
          </h1>
          <p className="text-secondary-txt text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button className="bg-secondary rounded-3xl px-8 py-3 font-semibold text-white">
              Get Quote Now
            </button>
            <button className="border-secondary text-secondary rounded-3xl border px-8 py-3 font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Image right side */}
        <div className="mt-10 sm:mt-0 sm:ml-8">
          <img
            src={imageMap["agent"]}
            alt="Agent"
            className="w-[340px] sm:w-[420px] sm:max-w-none"
          />
        </div>
      </header>
    </div>
  );
};

export default IntroPage;
