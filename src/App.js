import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Form from "./Form";
import Signin from "./Signin";
import Contact from "./Contact";
import Login from "./Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
      <Login />
    </>
  );
};

export default App;
