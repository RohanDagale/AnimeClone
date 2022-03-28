const Button = (props) => {
  return (
    <>
      <div className="btn custom_button">
        <button className="bg-slate-900 text-white py-2 px-4 rounded-sm">
          <a href="#">{props.button}</a>
        </button>
      </div>
    </>
  );
};

export default Button;
