import React from "react";
import "./App.scss";
import MetaData from "./components/MetaData";

import { About, Skills, Testimonials, Work, Header, Footer } from "./container";
import { Navbar } from "./components";
import useLocalStorage from "use-local-storage";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
function App({ title }) {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <MetaData title="Portfolio --Omar ghazi" />
      <div className="toggle-theme" onClick={switchTheme}>
        {theme === "light" ? <BsToggleOff /> : <BsToggleOn />}
      </div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
