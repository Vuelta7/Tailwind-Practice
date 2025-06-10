import imageMap from "./assets/imageMap";

const IntroPage = () => {
  return (
    <>
      <nav className="bg-primary">
        <h1>Capgemen</h1>
        <div>
          <ul className="hide">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <div>
            <div>
              <img src={imageMap["search"]}></img>
              <img src={imageMap["cart"]}></img>
            </div>
            <img src={imageMap["navbar-toggler"]}></img>
          </div>
        </div>
      </nav>
    </>
  );
};

export default IntroPage;
