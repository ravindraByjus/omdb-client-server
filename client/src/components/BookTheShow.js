import React, { useState } from "react";
import { Card, CardImg, CardBody, Container } from "reactstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const BookTheShow = (props) => {
  const [data, setData] = useState({});
  const { movieId } = useParams();

  fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=37b65c59`)
    .then((response) => response.json())
    .then((result) => setData(result))
    .catch((error) => console.log("error", error));

  return (
    <Container>
      <Card>
        <CardImg src={data.Poster} alt="Card image cap" />
        <CardBody>
          <h1>{data.Title}</h1>
          <br />
          <h5> Release Date: {data.Released}</h5>
          <h5> Director: {data.Director}</h5>
          <h5> Runtime: {data.Runtime}</h5>
          <h5> Languages Availbale: {data.Language}</h5>
          <br />
          <h6> Cast: {data.Actors}</h6>
          <h6> Plot: {data.Plot}</h6>
        </CardBody>
        <Link to={`/`} className="btn btn-primary">
          Go Back
        </Link>
      </Card>
    </Container>
  );
};

export default BookTheShow;
