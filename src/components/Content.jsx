import Button from "./Button";
import Card from "./Card";
import Sdata from "./Sdata";
import Button2 from "./Button2";

function ncard(val) {
  return (
    <Card
      link={val.link}
      title={val.title}
      description={val.description}
      rating={val.rating}
      ep={val.ep}
      runtime={val.runtime}
    />
  );
}
const Content = () => {
  return (
    <>
      <div className="main_container " style={{backgroundColor: '#141414'}}>
        <div className="flex flex-col justify-between">
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) -20%, rgba(0, 0, 0, 1) 100%), url("https://images7.alphacoders.com/115/thumbbig-1155001.webp")`,
              backgroundSize: `cover`,
            }}
            className="flex flex-col items-center h-screen w-auto  justify-evenly content-center  text-white bg-no-repeat bg-fixed bg-cover pt-20 pb-24 "
          >
            <div className="text-6xl ">Declare Variable, Not War!</div>
            <div className="text-2xl ">Looking for spicy Codes?</div>
            <div className="text-lg  text-center text-slate-300">
              Hi! I'm Rohan, working as a webdeveloper in D.Y. Patil university
              <br />
              I've Been learnign DSA for 2 years now, This roadmap is pretty
              simple.
              <br />
              Webdev using framework like React, Tailwindcss and Nodejs.
            </div>
            <div className="btn custom_button ">
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-sm animate-bounce">
                <a href="#">Watch Now</a>
              </button> */}
              <Button2 button="Watch Now" /> 
            </div>
          </div>
        </div>
        <div className="card_container pt-28 ">
          <div className="flex flex-row justify-evenly items-center flex-wrap pt-28 pb-32 " style={{backgroundColor: '#141414'}}>
            {Sdata.map(ncard)}
            {/* <Card
                link="#"
                title="naruto"
                description="something"
              /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
