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
        <section className="assuranceSection">
          <div>
            <p className="headingText">
              Helping a local business reinvent itself
            </p>
            <p className="">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div>
            <div>
              <img src={Assurance1}></img>
              <div>
                <p>2,245,341</p>
                <p>Members</p>
              </div>
            </div>
            <div>
              <img src={Assurance2}></img>
              <div>
                <p>46,328</p>
                <p>Clubs</p>
              </div>
            </div>
            <div>
              <img src={Assurance3}></img>
              <div>
                <p>828,867</p>
                <p>Event Bookings</p>
              </div>
            </div>
            <div>
              <img src={Assurance4}></img>
              <div>
                <p>1,926,436</p>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </section>
        <section className="designSection">
          <img src={DesignIllustration}></img>
          <div>
            <p className="headingText">
              How to design your site footer like we did
            </p>
            <p className="grayLink">
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
            <button className="primaryButton">Learn More</button>
          </div>
        </section>
        <section className="customerSection">
          <img className={CustomerPhoto}></img>
          <div>
            <p>
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
            <p>Tim Smith</p>
            <p>British Dragon Boat Racing Association</p>
            <div>
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
              <button className="secondaryButton">
                <p>Meet all customers</p>
                <img className={Arrow}></img>
              </button>
            </div>
          </div>
        </section>
        <section className="readMoreSection">
          <div>
            <p className="headingText">Caring is the new marketing</p>
            <p>
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </p>
          </div>
          <div>
            <div>
              <img className={ReadMorePhoto1}></img>
              <div>
                <p className="headingText">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <button className="secondaryButton">
                  <p>Readmore</p>
                  <img className={Arrow}></img>
                </button>
              </div>
            </div>
            <div>
              <img className={ReadMorePhoto2}></img>
              <div>
                <p className="headingText">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <button className="secondaryButton">
                  <p>Readmore</p>
                  <img className={Arrow}></img>
                </button>
              </div>
            </div>
            <div>
              <img className={ReadMorePhoto3}></img>
              <div>
                <p className="headingText">
                  Revamping the Membership Model with Triathlon Australia
                </p>
                <button className="secondaryButton">
                  <p>Readmore</p>
                  <img className={Arrow}></img>
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
      <footer>
        <section>
          <div>
            <img src={Icon}></img>
            <p>Nexcent</p>
          </div>
          <div>
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <ul>
            <li>
              <img src={Instagram}></img>
            </li>
            <li>
              <div>
                <img src={Ball}></img>
              </div>
            </li>
            <li>
              <div>
                <img src={Twitter}></img>
              </div>
            </li>
            <li>
              <div>
                <img src={Youtube}></img>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <div>
            <p>Company</p>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <p>Support</p>
          <ul>
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
          <div>
            <p>Stay up to date</p>
            <div>
              <input></input>
              <img src={Send}></img>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
