const Button2 = (props) => {
  return (
    <>
      <div className="btn custom_button">
        <button className="bg-white text-black py-2 px-4 rounded-sm">
          <a href="#">{props.button}</a>
        </button>
      </div>
    </>
  );
};

export default Button2;