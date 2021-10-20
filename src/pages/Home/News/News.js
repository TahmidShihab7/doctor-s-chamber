import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleNews from "../SingleNews/SingleNews";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <Container className="text-center">
        <Row>
          <h1 className="text-center border border-5 rounded-pill text-primary py-2">
            Latest News
          </h1>

          {news.map((singleNews) => (
            <SingleNews
              singleNews={singleNews}
              key={singleNews._key}
            ></SingleNews>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default News;
