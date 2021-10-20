import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const NewsDetails = () => {
  let { newsId } = useParams();

  const [singleNews, setSingleNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setSingleNews(data[newsId]));
  }, [newsId]);

  return (
    <Container className="my-5  text-center shadow p-3 mb-5 bg-body rounded">
      <img className="rounded my-2 img-fluid" src={singleNews.image} alt="" />
      <h5 className="text-primary my-2">{singleNews.title}</h5>
      <p>{singleNews.details}</p>
    </Container>
  );
};

export default NewsDetails;
