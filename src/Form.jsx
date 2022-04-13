import { useState } from "react";

const Form = () => {
    const [userSignin, setuserSignin] = useState({
        username: "",
        email: "",
        phone:"",
        password:""
    })
    const [record, setRecord] = useState([]);
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
       setuserSignin({...userSignin, [name]: value })
        
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        const newRecord = {...userSignin, id: new Date().gettime().tostring() }
        setRecord([...record, newRecord]);
        console.log(record);
    }

  return (
    <>
      <form action=""  onSubmit={handlesubmit}>
        <div className="p-8">
          <label htmlFor="username">username</label>
          <input type="text" autoComplete="off" value={userSignin.username} onChange={handleInput} name="username" id="username"></input>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" autoComplete="off" value={userSignin.email} onChange={handleInput} name="email" id="emaial"></input>
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input type="text" autoComplete="off" value={userSignin.phone} onChange={handleInput} name="phone" id="phone"></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" autoComplete="off" value={userSignin.password} onChange={handleInput} name="password" id="password"></input>
        </div>
        <button type="submit">sign in</button>
      </form>
    </>
  );
};

export default Form;
