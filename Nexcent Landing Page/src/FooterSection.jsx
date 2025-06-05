import Send from "./assets/send.png";
import Icon from "./assets/icon.png";
import Instagram from "./assets/ig.png";
import Youtube from "./assets/yt.png";
import Ball from "./assets/ball.png";
import Twitter from "./assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        {/* Logo + Social */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <img src={Icon} alt="Nexcent Logo" className="h-6 w-auto" />
            <p className="text-lg font-semibold">Nexcent</p>
          </div>
          <p className="text-sm text-gray-400">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="mb-4 text-sm text-gray-400">All rights reserved</p>
          <ul className="mt-2 flex items-center gap-4">
            <li>
              <img src={Instagram} alt="Instagram" className="h-5 w-5" />
            </li>
            <li>
              <div>
                <img src={Ball} alt="Dribbble" className="h-5 w-5" />
              </div>
            </li>
            <li>
              <div>
                <img src={Twitter} alt="Twitter" className="h-5 w-5" />
              </div>
            </li>
            <li>
              <div>
                <img src={Youtube} alt="YouTube" className="h-5 w-5" />
              </div>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="mb-4 font-semibold">Company</p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="mb-4 font-semibold">Support</p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="mb-4 font-semibold">Stay up to date</p>
          <div className="flex items-center overflow-hidden rounded-md bg-gray-800 p-1">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <img
              src={Send}
              alt="Send"
              className="mr-3 h-5 w-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
