import "./App.css";
import Logo from "./assets/Logo.png";
import Illustration from "./assets/Illustration.png";
import DetailsSection from "./assets/detailsSection.png";
import SuitableClient1 from "./assets/suitableClient1.png";
import SuitableClient2 from "./assets/suitableClient2.png";
import SuitableClient3 from "./assets/suitableClient3.png";
import Client1 from "./assets/client1.png";
import Client2 from "./assets/client2.png";
import Client3 from "./assets/client3.png";
import Client4 from "./assets/client4.png";
import Client5 from "./assets/client5.png";
import Client6 from "./assets/client6.png";
import Assurance1 from "./assets/assuranceIcon1.png";
import Assurance2 from "./assets/assuranceIcon2.png";
import Assurance3 from "./assets/assuranceIcon3.png";
import Assurance4 from "./assets/assuranceIcon4.png";
import DesignIllustration from "./assets/footerIllustration.png";
import CustomerPhoto from "./assets/customer.png";
import Arrow from "./assets/arrow.png";
import Send from "./assets/send.png";
import Icon from "./assets/icon.png";
import Instagram from "./assets/ig.png";
import Youtube from "./assets/yt.png";
import Ball from "./assets/ball.png";
import Twitter from "./assets/twitter.png";
import ReadMorePhoto1 from "./assets/readMorePhoto1.png";
import ReadMorePhoto2 from "./assets/readMorePhoto2.png";
import ReadMorePhoto3 from "./assets/readMorePhoto3.png";

function App() {
  return (
    <>
      <nav>
        <img src={Logo}></img>
        <ul className="navMenu">
          <li className="navMenutext">
            <a>Home</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Testimonial</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
        <div className="divider">
          <button className="secondaryButton">
            <p>Login</p>
          </button>
          <button className="primaryButton">
            <p>Sign Up</p>
          </button>
        </div>
      </nav>
      <main>
        <section className="headingSection">
          <div className="headingDivision">
            <div className="headingContainer">
              <h1 className="headingText">
                Lessons and insights{" "}
                <span className="primaryColor">from 8 years</span>
              </h1>
              <p className="grayLink">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="primaryButton">Register</button>
            </div>
            <img src={Illustration}></img>
          </div>
        </section>
        <section className="clientSection">
          <p className="headingText headingTextSize">Our Clients</p>
          <p className="grayLink">
            We have been working with some Fortune 500+ clients
          </p>
          <ul>
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
        <section className="suitableSection">
          <div className="SuitableSectionText">
            <h2 className="headingText headingTextSize bottomGap">
              Manage your entire community in a single system
            </h2>
            <p className="grayLink">Who is Nexcent suitable for?</p>
          </div>
          <div className="suitableCardContainer">
            <div className="suitableCard">
              <img src={SuitableClient1}></img>
              <p className="headingText headingTextSize">
                Membership Organisations
              </p>
              <p className="grayLink">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="suitableCard">
              <img src={SuitableClient2}></img>
              <p className="headingText headingTextSize">
                National Associations
              </p>
              <p className="grayLink">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="suitableCard">
              <img src={SuitableClient3}></img>
              <p className="headingText headingTextSize">Clubs And Groups</p>
              <p className="grayLink">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </section>
        <section className="detailsSection">
          <img src={DetailsSection} />
          <div>
            <p className="headingText headingTextSize bottomGap">
              The unseen of spending three years at Pixelgrade
            </p>
            <p className="grayLink bottomGap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="primaryButton">Learn More</button>
          </div>
        </section>
        {/* Assurance Section */}
        <section className="flex bg-[#f5f7fa] p-16 justify-center items-center gap-32">
          <div className="max-w-md">
            <p className="text-3xl font-medium text-gray-800 leading-snug">
              Helping a local{" "}
              <span className="text-[#4caf4f]">business reinvent itself</span>
            </p>
            <p className="mt-4 text-gray-600">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            <div className="flex items-center gap-4">
              <img src={Assurance1} className="w-10 h-10" />
              <div>
                <p className="text-lg font-semibold text-gray-800">2,245,341</p>
                <p className="text-sm text-gray-500">Members</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Assurance2} className="w-10 h-10" />
              <div>
                <p className="text-lg font-semibold text-gray-800">46,328</p>
                <p className="text-sm text-gray-500">Clubs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Assurance3} className="w-10 h-10" />
              <div>
                <p className="text-lg font-semibold text-gray-800">828,867</p>
                <p className="text-sm text-gray-500">Event Bookings</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Assurance4} className="w-10 h-10" />
              <div>
                <p className="text-lg font-semibold text-gray-800">1,926,436</p>
                <p className="text-sm text-gray-500">Payments</p>
              </div>
            </div>
          </div>
        </section>
        {/* Design Section */}
        <section className="flex items-center justify-center gap-16 p-16 bg-white">
          <img
            src={DesignIllustration}
            alt="Design Illustration"
            className="w-[40%] max-w-md"
          />

          <div className="max-w-xl">
            <p className="text-3xl font-semibold text-gray-800 mb-4">
              How to design your site footer like we did
            </p>
            <p className="text-gray-600 mb-6">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="bg-[#4caf4f] text-white px-6 py-2 rounded hover:bg-[#43a047] transition">
              Learn More
            </button>
          </div>
        </section>
        <section className="flex items-start gap-10 p-10 bg-[#f5f7fa]">
          <img
            src={CustomerPhoto}
            alt="Customer"
            className="w-56 h-56 rounded-lg object-cover"
          />

          <div className="max-w-3xl">
            <p className="text-gray-600 mb-4">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="text-[#4caf4f] font-medium">Tim Smith</p>
            <p className="text-sm text-gray-500 mb-6">
              British Dragon Boat Racing Association
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-4">
                <img src={Client1} className="h-6" />
                <img src={Client2} className="h-6" />
                <img src={Client3} className="h-6" />
                <img src={Client4} className="h-6" />
                <img src={Client5} className="h-6" />
                <img src={Client6} className="h-6" />
              </div>

              <button className="flex items-center text-[#4caf4f] font-medium hover:underline">
                Meet all customers
                <img src={Arrow} className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Caring is the new marketing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={ReadMorePhoto1}
                alt="OneRen"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="font-medium text-gray-800 mb-4">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <button className="text-green-600 font-semibold flex items-center gap-2 hover:underline">
                  Readmore <img src={Arrow} alt="arrow" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={ReadMorePhoto2}
                alt="Safeguarding"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="font-medium text-gray-800 mb-4">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <button className="text-green-600 font-semibold flex items-center gap-2 hover:underline">
                  Readmore <img src={Arrow} alt="arrow" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={ReadMorePhoto3}
                alt="Triathlon"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="font-medium text-gray-800 mb-4">
                  Revamping the Membership Model with Triathlon Australia
                </p>
                <button className="text-green-600 font-semibold flex items-center gap-2 hover:underline">
                  Readmore <img src={Arrow} alt="arrow" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="demoSection">
          <p className="demoHeading">
            Pellentesque suscipit fringilla libero eu.
          </p>
          <button className="primaryButton">
            <p>Get a Demo</p>
            <img className={Arrow}></img>
          </button>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Social */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={Icon} alt="Nexcent Logo" className="h-6 w-auto" />
              <p className="text-lg font-semibold">Nexcent</p>
            </div>
            <p className="text-sm text-gray-400">
              Copyright © 2020 Nexcent ltd.
            </p>
            <p className="text-sm text-gray-400 mb-4">All rights reserved</p>
            <ul className="flex items-center gap-4 mt-2">
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
            <p className="font-semibold mb-4">Company</p>
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
            <p className="font-semibold mb-4">Support</p>
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
            <p className="font-semibold mb-4">Stay up to date</p>
            <div className="flex items-center bg-gray-800 rounded-md overflow-hidden p-1">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent px-3 py-2 w-full text-sm text-white placeholder-gray-400 focus:outline-none"
              />
              <img
                src={Send}
                alt="Send"
                className="h-5 w-5 mr-3 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
