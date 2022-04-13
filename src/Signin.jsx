
import { useState, useEffect } from "react";

const Signin = () => {
  const initialValues = { username: "", password: "" };
  const [formValue, setForValue] = useState(initialValues);
  const [formErros, setForErros] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const handlechange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setForValue({ ...formValue, [name]: value });
    console.log(formValue);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    validate(formValue);
    setSubmit(true);
  };

  useEffect(() => {
    console.log(formErros);
    if (Object.keys(formErros).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formValue]);
  const validate = (values) => {
    const errors = {};
    const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (!values.username) {
      errors.username = "user not defined";
    }
    if (!values.username) {
      errors.password = "user not defined";
    }
  };
  return (
    <>
      <div className="form flex flex-col p-5 items-center">
        <form className="" onSubmit={handlesubmit}>
          <div className="text-2xl">
            <h1>login form</h1>
          </div>
          <div className="username">
            <label className="p-4">username</label>
            <br />
            <input
              className="p-2"
              type="text"
              name="username"
              placeholder="username"
              value={formValue.username}
              onChange={handlechange}
              required
            />
            <br />

            <lable className="p-4">password</lable>
            <br />
            <input
              className="p-2"
              type="password"
              name="password"
              placeholder="password"
              value={formValue.password}
              onChange={handlechange}
              required
            />
          </div>
          <div className="sub_button items-center">
            <button>click here. </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
