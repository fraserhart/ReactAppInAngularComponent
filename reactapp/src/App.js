import React, { useState, useEffect } from "react";
import "./App.css";

const HashLink = ({ href, children, classes }) => {
  const linkClick = e => {
    e.preventDefault();
    window.location.hash = href;
  };
  return (
    <a href={`#${href}`} onClick={linkClick} className={classes}>
      {children}
    </a>
  );
};

function App() {
  const [hashRoute, setHashRoute] = useState(0);

  useEffect(() => {
    let hashChangeFn = () => {
      setHashRoute(window.location.hash);
    };

    window.addEventListener("hashchange", hashChangeFn);
    return () => {
      window.removeEventListener("hashchange", hashChangeFn);
    };
  }, []);

  return (
    <div>
      <h1>asfasdfasdfasdf</h1>
      <div className="App">
        <HashLink href="#fff">first page</HashLink>
        <HashLink href="#sdfa">second page</HashLink>[{hashRoute}]
        {hashRoute === "#sdfa/ppp/oi" && <div>This is the main route</div>}
        {hashRoute === "#fff" && <div>This is the second route</div>}
      </div>
    </div>
  );
}

export default App;
