import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  // get dynamic route id
  let { serviceId } = useParams();
  console.log(serviceId);
  // get services data
  const [ser, setSer] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setSer(data[serviceId]));
  }, [serviceId]);

  return (
    <Container className="my-5  text-center shadow p-3 mb-5 bg-body rounded">
      <img className="rounded my-2" src={ser.image} alt="" />
      <h5 className="text-primary my-2">{ser.title}</h5>
      <p>{ser.details}</p>
      <Button variant="success">Book Now</Button>
    </Container>
  );
};

export default ServiceDetails;
