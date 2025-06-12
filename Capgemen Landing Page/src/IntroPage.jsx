import { useState } from "react";
import imageMap from "./assets/imageMap";

const IntroPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-[100vh] max-h-[100vh] overflow-hidden bg-[url(./assets/mobile-header-cover.png)] bg-cover bg-[50%_60%] bg-no-repeat sm:bg-[url(./assets/desktop-header-cover.png)]">
      <nav className="">
        {/* Main navigation bar container */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-6">
          <h1 className="text-primary-txt text-xl font-bold">Capgemen</h1>

          {/* Right side of the navbar */}
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation Links */}
            <ul className="hidden space-x-6 sm:flex">
              <li className="text-secondary-txt cursor-pointer">Home</li>
              <li className="text-secondary-txt cursor-pointer">Product</li>
              <li className="text-secondary-txt cursor-pointer">Pricing</li>
              <li className="text-secondary-txt cursor-pointer">Contact</li>
            </ul>

            {/* Shared Icons (visible on mobile and desktop) */}
            <div className="flex items-center space-x-8">
              <button>
                {" "}
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

            {/* Mobile Menu Toggler (only visible on small screens) */}
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

        {/* Mobile Menu Dropdown (conditionally rendered) */}
        {isMenuOpen && (
          <div className="bg-transparent sm:hidden">
            <ul className="space-y-2 px-4 pt-2 pb-4 text-center">
              <li>
                <a href="#" className="text-secondary-txt block py-2 text-2xl">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-txt block py-2 text-2xl">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-txt block py-2 text-2xl">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-txt block py-2 text-2xl">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <header className="flex bg-transparent">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-primary-txt px-6 text-[44px] font-bold">
            We Take Care of the Future
          </h1>
          <p className="text-secondary-txt px-4 text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col space-y-5">
            <button className="bg-secondary rounded-3xl px-8 py-3 font-semibold text-white">
              Get Quote Now
            </button>
            <button className="border-secondary text-secondary rounded-3xl border px-8 py-3 font-semibold">
              Learn More
            </button>
          </div>
          <img
            src={imageMap["agent"]}
            className="relative -bottom-1 -left-1 h-120"
          ></img>
        </div>
      </header>
    </div>
  );
};

export default IntroPage;
