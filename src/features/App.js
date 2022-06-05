import "./App.css";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div className="app">
      <h1> Netflix clone </h1>
      <Row
        title="NETFLIX ORIGINALS"
        getUrl={requests.getNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" getUrl={requests.getTrending} />
      <Row title="Top Rated" getUrl={requests.getTopRated} />
      <Row title="Action Movies" getUrl={requests.getActionMovies} />
      <Row title="Comedy Movies" getUrl={requests.getComedyMovies} />
      <Row title="Horror Movies" getUrl={requests.getHorrorMovies} />
      <Row title="Romance Movies" getUrl={requests.getRomanceMovies} />
      <Row title="Documentaries" getUrl={requests.getDocumentaries} />
    </div>
  );
}

export default App;
