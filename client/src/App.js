import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

import SearchSection from "./components/SearchSection";

export default function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function onChangeSearchValue(event) {
    const searchValue = event.target.value;

    setSearchValue(searchValue);
  }

  function onKeyPressSearchValue(event) {
    if (event.charCode === 13) {
      fetchMovies();
    }
  }

  function onClickSearch() {
    fetchMovies();
    
  }

  function fetchMovies() {
    fetch(`http://localhost:5000/${setSearchValue}`)
      .then((response) => response.json())
      .then((result) => setData(result[0]))
      .catch((error) => console.log("error", error));
    console.log(data)
  }

  return (
    <Container style={{ marginTop: "60px" }}>
      <SearchSection
        onChangeSearchValue={onChangeSearchValue}
        onKeyPressSearchValue={onKeyPressSearchValue}
        onClickSearch={onClickSearch}
      />
      <br />
      <section className="movies-section">
        <Row>
          {data.Search &&
            data.Search.map((movie) => {
              return (
                <Col md={4} key={movie.imdbID}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={movie.Poster}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>{movie.Title}</CardTitle>
                      <CardText>
                        {movie.Year}-{movie.Type}
                      </CardText>
                      <Link
                        to={`/BookTheShow/${movie.imdbID}`}
                        className="btn btn-primary"
                        type="button"
                      >
                        Book The Show
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </section>
    </Container>
  );
}
