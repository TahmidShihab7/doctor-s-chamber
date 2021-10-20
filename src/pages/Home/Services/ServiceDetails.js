import { useParams } from "react-router-dom";
import useServices from "../../../hooks/useServices";

const ServiceDetails = () => {
  let { serviceId } = useParams();
  const { services } = useServices([]);
  console.log(services);

  return (
    <div>
      <h2>{services.length}</h2>
      <h1>Can't Get the Idea {serviceId}</h1>
    </div>
  );
};

export default ServiceDetails;
