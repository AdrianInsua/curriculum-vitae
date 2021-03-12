import Cover from "./components/cover/Cover";
import "./App.scss";
import Bio from "./components/bio/Bio";
import Menu from "./components/menu/Menu";
import { useCallback, useEffect, useState } from "react";
import Studies from "./components/studies/Studies";

function App() {
  const [scroll, setScroll] = useState(0);

  const _handleScroll = useCallback(() => {
    setScroll(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", _handleScroll);

    return () => window.removeEventListener("scroll", _handleScroll);
  }, [_handleScroll]);

  return (
    <div className="app__container">
      <Menu scroll={scroll} />
      <Cover />
      <Bio scroll={scroll} />
      <Studies scroll={scroll} />
    </div>
  );
}

export default App;
