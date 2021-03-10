import Cover from "./components/cover/Cover";
import "./App.scss";
import Bio from "./components/bio/Bio";

function App() {
  const height = window.innerHeight;

  return (
    <div className="app__container">
      <Cover />
      <Bio scrollThreshold={height} />
    </div>
  );
}

export default App;
