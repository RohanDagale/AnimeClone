import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar w-full  bg-white">
        <div className="nav_components flex flex-row justify-around m-auto items-center ">
          <div className="p-4">
            <a href="#">
              <span className="font-bold text-2xl">ProjectX</span>
            </a>
          </div>
          <div className="routes ">
            <ul className="flex flex-row">
              <li className="px-6 cursor-pointer hover:text-slate-600">
                <a href="#">Home</a>
              </li>
              <li className="px-6 cursor-pointer hover:text-slate-600">
                <a href="#">About</a>
              </li>
              <li className="px-6 cursor-pointer hover:text-slate-600">
                <a href="#">Contact</a>
              </li>
              <li className="px-6 cursor-pointer hover:text-slate-600">
                <a href="#">Project</a>
              </li>
              <li className="px-6 cursor-pointer hover:text-slate-600">
                <a href="#">Anime</a>
              </li>
            </ul>
          </div>
          <div className="btn">
            <button className="bg-slate-900 text-white py-2 px-4 rounded-sm">
              <a href="#">Sign in</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
