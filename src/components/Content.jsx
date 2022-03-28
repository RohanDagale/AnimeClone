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
      <div className="main_containe  ">
        <div className="flex flex-col justify-evenly py-0 bg-fixed ">
          <div
            style={{
              background: `url("https://images3.alphacoders.com/100/thumb-1920-1000030.jpg")`,
              background: `rgba(0, 0, 0, 05)`,
              opacity: `0.9`,
              backgroundSize: `auto`,
            }}
            className="flex flex-col items-center px-10 py-44 justify-evenly text-white bg-gradient-to-tr from-slate-300 to-slate-900 opacity-10"
          >
            <div className="text-6xl py-8">Declare Variable, Not War.</div>
            <div className="text-2xl py-4">Looking for spicy Codes?</div>
            <div className="text-lg py-4 text-center text-slate-300">
              Hi! I'm Rohan, working as a webdeveloper in D.Y. Patil university
              <br />
              I've Been learnign DSA for 2 years now, This roadmap is pretty
              simple.
              <br />
              Webdev using framework like React, Tailwindcss and Nodejs.
            </div>
            <div className="p-6 ">
              <Button2 button="Our Team" className="sm:hidden" />
            </div>
          </div>
        </div>
        <div className="card_container pt-28">
          <div className="flex flex-row justify-evenly items-center flex-wrap bg-white pt-12">
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
