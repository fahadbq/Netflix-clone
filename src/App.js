import "./App.css";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1> Netflix clone </h1>
      <Row title="NETFLIX ORIGINALS" getUrl={requests.getNetflixOriginals} />
      <Row title="Trending Now" getUrl={requests.getTrending} />
    </div>
  );
}

export default App;
