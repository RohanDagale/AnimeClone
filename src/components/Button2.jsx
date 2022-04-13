const Button2 = (props) => {
  return (
    <>
      <div className="btn custom_button">
        <button className="bg-blue-600 hover:bg-blue-700  text-white py-2 px-4 rounded-sm">
          <a href="#">{props.button}</a>
        </button>
      </div>
    </>
  );
};

export default Button2;