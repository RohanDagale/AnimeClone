const Navbar = () => {
  return (
    <>
      <nav className="navbar w-full  bg-opacity-0">
        <div
          className="nav_components flex flex-row justify-around m-auto items-center bg-black text-white"
          style={{ background: "#141414" }}
        >
          <div className="p-4">
            <a href="#">
              <span className="font-bold text-2xl">ProjectX</span>
            </a>
          </div>
          <div className="routes ">
            <ul className="flex flex-row">
              <li className="px-6 cursor-pointer text-white hover:text-slate-200">
                <a href="#">Home</a>
              </li>
              <li className="px-6 cursor-pointer text-white hover:text-slate-200">
                <a href="#">About</a>
              </li>
              <li className="px-6 cursor-pointer text-white hover:text-slate-200">
                <a href="#">Contact</a>
              </li>
              <li className="px-6 cursor-pointer text-white hover:text-slate-200">
                <a href="#">Project</a>
              </li>
              <li className="px-6 cursor-pointer text-white hover:text-slate-200">
                <a href="#">Anime</a>
              </li>
            </ul>
          </div>
          <div className="btn">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-sm">
              <a href="#">Sign in</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
