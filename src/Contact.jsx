const Contact = () => {
  return (
    <>
      <div className="contactus flex items-center ">
        <div className="main_form flex items-center ">
          <div className="name_email_number flex flex-col items-center ">
            <div className="name">
              <span>Name</span>
              <br />
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="email">
              <span>Email</span>
              <br />
              <input
                type="email"
                name="email"
                id=""
                placeholder="enter your email"
              />
            </div>
            <div className="number">
              <span>Number</span>
              <br />
              <input
                type="text"
                name="number"
                id=""
                placeholder="Enter your number"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
