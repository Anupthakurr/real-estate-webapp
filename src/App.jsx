import React from "react";
import Header from "./component/Header";
import About from "./component/About";
import Projects from "./component/Projects";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects></Projects>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default App;
