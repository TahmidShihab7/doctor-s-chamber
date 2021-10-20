import { useParams } from "react-router";

const NewsDetails = () => {
  let { newsId } = useParams();

  return (
    <div>
      <h1>this is news no {newsId}</h1>
    </div>
  );
};

export default NewsDetails;
