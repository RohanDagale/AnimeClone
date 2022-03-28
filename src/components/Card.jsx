import Button from "./Button";
const Card = (props) => {
  return (
    <>
      <div
        className="card flex flex-col m-4 h-auto items-center border-x-2 border-y-2 sm:rounded-2xl
       border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all rounded-xl  max-h-max "
      ś>
        <div className="img  text-xl flex-none">
          <img
            src={props.link}
            alt="this is a img"
            className="rounded-t-xl  size-auto relative overflow-hidden w-sm h-sm  min-h-full min-w-full max-w-xs max-h-xs  shadow-inner"
          />
        </div>
        <div className="title text-xl font-bold p-4">{props.title}</div>
        <div className="description text-md max-w-xs relative text-center p-4">
          {props.description}
        </div>
        <div className="xs:hidden flex flex-row justify-between w-full px-12 text-slate-700">
          <div className="rating text-sm text-center ">
            Rating: {props.rating}
          </div>
          <div className="rating text-sm text-center"> {props.runtime}</div>

          <div className="run_time text-left text-sm">Ep:{props.ep}</div>
        </div>
        <div className="p-8">
          <Button button="Watch Now" />
        </div>
      </div>
    </>
  );
};

export default Card;
