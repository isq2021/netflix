import React, { useState } from "react";
import "./app.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="documentaries" fetchUrl={requests.fetchDocumantaries} />
      </div>
    </>
  );
}

export default App;
