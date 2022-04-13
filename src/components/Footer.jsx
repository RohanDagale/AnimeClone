import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaMailBulk,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex content-center flex-col bg-black">
        <div className="main_footer pt-28 pb-10 w-full  flex flex-col items-center">
          <div className="p-6 text-white">
            <span className="font-bold text-4xl">Do What You Can't!</span>
            <br />
            <div className="text-right">
              <span className="text-sm text-slate-300 ">- Casey Neistat</span>
            </div>
          </div>
          <div className="Social_link flex flex-row p-6 py-28 justify-evenly">
            <div className="linked_in px-6">
              <a href="#">
                <FaLinkedinIn className="h-6 w-6 text-white " />
              </a>
            </div>
            <div className="linked_in px-6">
              <a href="#">
                <FaInstagram className="h-6 w-6 text-white " />
              </a>
            </div>
            <div className="twitt_er px-6">
              <a href="#">
                <FaTwitter className="h-6 w-6 text-white" />
              </a>
            </div>
            <div className="twitt_er px-6">
              <a href="#">
                <FaGithub className="h-6 w-6 text-white" />
              </a>
            </div>
            <div className="twitt_er px-6">
              <a href="#">
                <FaFacebookF className="h-6 w-6 text-white" />
              </a>
            </div>
            <div className="twitt_er px-6">
              <a href="#">
                <FaMailBulk className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          <div className="max-w-full">
            {/* <hr className="h-1 w-20 bg-white" /> */}
            <hr style={{ height: `1px`, width: `70rem` }} />
          </div>
          <div className="text-white  pt-8">
            <p>
              This website Just a clone website made by Rohan Dagale, If there
              is any conflict with the content on this webpage, please get in
              touch.
            </p>
          </div>
          <div className="text-slate-300 text-sm pt-2 ">
            <p>
              Created by rohan dagale <span>&copy;2022</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
