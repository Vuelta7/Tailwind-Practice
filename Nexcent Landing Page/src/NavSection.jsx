import Logo from "./assets/Logo.png";

const NavSection = () => {
  return (
    <nav className="bg-[#f5f7fa]">
      <div className="mx-auto max-w-6xl py-[2em]">
        <div className="flex h-[10vh] items-center justify-between">
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
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
