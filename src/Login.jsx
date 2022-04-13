import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  let name, value;

  const handleInpute = (e) => {
    console.log(e);
    name = e.target.name
    value = e.target.value
    setUser({...user, [name]: value})
  };

  return (
    <>
      <div className="form flex flex-col p-4 items-center">
        <form className="" >
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
              value={user.name}
              onChange={handleInpute}
              
            />
            <br />

            <lable className="p-4">password</lable>
            <br />
            <input
              className="p-2"
              type="password"
              name="password"
              placeholder="password"
              value={user.password}
              onChange={handleInpute}
              
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

export default Login;
