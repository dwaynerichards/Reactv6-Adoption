import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { teal } from "@mui/material/colors";

import Details from "./Details";
import Search from "./SearchParams";

const App = () => {
  //@dev omitted function that use state offers as second return argument
  const [current, setCurrent] = useState(teal[200]);

  return (
    <ThemeContext.Provider value={{ current, setCurrent }}>
      <div>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="details/:id" element={<Details />}></Route>
            <Route path="/" element={<Search />}></Route>
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
