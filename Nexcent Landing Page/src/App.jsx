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
      <nav className="flex h-[10vh] items-center justify-between bg-[#f5f7fa] px-[5em] py-[2em]">
        <img src={Logo}></img>
        <ul className="flex list-none items-center gap-[3em] font-medium text-[#1f2937] no-underline">
          <li>
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
        <div className="flex gap-[1em]">
          <button className="border-none bg-transparent px-6 py-2 text-[#4caf4f]">
            <p>Login</p>
          </button>
          <button className="w-fit rounded bg-[#4caf4f] px-6 py-2 text-white transition hover:bg-[#43a047]">
            <p>Sign Up</p>
          </button>
        </div>
      </nav>

      <main>
        {/* Heading Section */}
        <section className="flex h-[90vh] w-[100vw] items-center justify-center bg-[#f5f7fa] p-[5em]">
          <div className="flex gap-60">
            <div className="flex w-200 flex-col justify-center gap-[2em]">
              <h1 className="text-[4em] font-semibold text-[#4d4d4d]">
                Lessons and insights{" "}
                <span className="text-[#4caf4f]">from 8 years</span>
              </h1>
              <p className="text-[#717171]">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="w-fit rounded bg-[#4caf4f] px-6 py-2 text-white transition hover:bg-[#43a047]">
                Register
              </button>
            </div>
            <img className="h-[30em]" src={Illustration}></img>
          </div>
        </section>

        {/* Clients Section */}
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
        <section className="flex flex-col items-center justify-center px-[5em] text-center">
          <div className="mb-[2em] w-[25vw]">
            <h2 className="mb-[1.5vh] text-[2em] font-semibold text-[#4d4d4d]">
              Manage your entire community in a single system
            </h2>
            <p className="text-[#717171]">Who is Nexcent suitable for?</p>
          </div>
          <div className="flex gap-[8em]">
            <div className="flex w-[15vw] flex-col items-center justify-center gap-[1em] rounded-[10px] bg-white p-[2em] text-center shadow-md">
              <img src={SuitableClient1}></img>
              <p className="text-[2em] font-semibold text-[#4d4d4d]">
                Membership Organisations
              </p>
              <p className="text-[#717171]">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="flex w-[15vw] flex-col items-center justify-center gap-[1em] rounded-[10px] bg-white p-[2em] text-center shadow-md">
              <img src={SuitableClient2}></img>
              <p className="text-[2em] font-semibold text-[#4d4d4d]">
                National Associations
              </p>
              <p className="text-[#717171]">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="flex w-[15vw] flex-col items-center justify-center gap-[1em] rounded-[10px] bg-white p-[2em] text-center shadow-md">
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
        <section className="flex items-center justify-center gap-[5vw] px-[5em] py-[2em]">
          <img src={DetailsSection} />
          <div className="w-[28vw]">
            <p className="bottomGap text-[2em] font-semibold text-[#4d4d4d]">
              The unseen of spending three years at Pixelgrade
            </p>
            <p className="bottomGap text-[#717171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="w-fit rounded bg-[#4caf4f] px-6 py-2 text-white transition hover:bg-[#43a047]">
              Learn More
            </button>
          </div>
        </section>

        {/* Assurance Section */}
        <section className="flex items-center justify-center gap-32 bg-[#f5f7fa] p-16">
          <div className="max-w-md">
            <p className="text-3xl leading-snug font-medium text-gray-800">
              Helping a local{" "}
              <span className="text-[#4caf4f]">business reinvent itself</span>
            </p>
            <p className="mt-4 text-gray-600">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            <div className="flex items-center gap-4">
              <img src={Assurance1} className="h-10 w-10" />
              <div>
                <p className="text-lg font-semibold text-gray-800">2,245,341</p>
                <p className="text-sm text-gray-500">Members</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Assurance2} className="h-10 w-10" />
              <div>
                <p className="text-lg font-semibold text-gray-800">46,328</p>
                <p className="text-sm text-gray-500">Clubs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Assurance3} className="h-10 w-10" />
              <div>
                <p className="text-lg font-semibold text-gray-800">828,867</p>
                <p className="text-sm text-gray-500">Event Bookings</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Assurance4} className="h-10 w-10" />
              <div>
                <p className="text-lg font-semibold text-gray-800">1,926,436</p>
                <p className="text-sm text-gray-500">Payments</p>
              </div>
            </div>
          </div>
        </section>
        {/* Design Section */}
        <section className="flex items-center justify-center gap-16 bg-white p-16">
          <img
            src={DesignIllustration}
            alt="Design Illustration"
            className="w-[40%] max-w-md"
          />

          <div className="max-w-xl">
            <p className="mb-4 text-3xl font-semibold text-gray-800">
              How to design your site footer like we did
            </p>
            <p className="mb-6 text-gray-600">
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
            <button className="w-fit rounded bg-[#4caf4f] px-6 py-2 text-white transition hover:bg-[#43a047]">
              Learn More
            </button>
          </div>
        </section>
        <section className="flex items-start justify-center gap-10 bg-[#f5f7fa] p-10">
          <img
            src={CustomerPhoto}
            alt="Customer"
            className="h-56 w-56 rounded-lg object-cover"
          />

          <div className="max-w-3xl">
            <p className="mb-4 text-gray-600">
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
            <p className="font-medium text-[#4caf4f]">Tim Smith</p>
            <p className="mb-6 text-sm text-gray-500">
              British Dragon Boat Racing Association
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-4">
                <img src={Client1} className="h-6" />
                <img src={Client2} className="h-6" />
                <img src={Client3} className="h-6" />
                <img src={Client4} className="h-6" />
                <img src={Client5} className="h-6" />
                <img src={Client6} className="h-6" />
              </div>

              <button className="flex items-center font-medium text-[#4caf4f] hover:underline">
                Meet all customers
                <img src={Arrow} className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
              Caring is the new marketing
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <img
                src={ReadMorePhoto1}
                alt="OneRen"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <p className="mb-4 font-medium text-gray-800">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <button className="flex items-center gap-2 font-semibold text-green-600 hover:underline">
                  Readmore <img src={Arrow} alt="arrow" className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <img
                src={ReadMorePhoto2}
                alt="Safeguarding"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <p className="mb-4 font-medium text-gray-800">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <button className="flex items-center gap-2 font-semibold text-green-600 hover:underline">
                  Readmore <img src={Arrow} alt="arrow" className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <img
                src={ReadMorePhoto3}
                alt="Triathlon"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <p className="mb-4 font-medium text-gray-800">
                  Revamping the Membership Model with Triathlon Australia
                </p>
                <button className="flex items-center gap-2 font-semibold text-green-600 hover:underline">
                  Readmore <img src={Arrow} alt="arrow" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="flex flex-col items-center justify-center bg-[#f5f7fa] p-[3vh]">
          <p className="mb-[3vh] text-[3em] font-semibold text-[#263238]">
            Pellentesque suscipit fringilla libero eu.
          </p>

          <button className="flex text-[#4caf4f]">
            <p>Get a Demo</p>
            <img className={Arrow}></img>
          </button>
        </section>
      </main>
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
    </>
  );
}

export default App;
