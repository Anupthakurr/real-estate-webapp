import React from "react";
import Header from "./component/Header";
import About from "./component/About";
import Projects from "./component/Projects";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects></Projects>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
