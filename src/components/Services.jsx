import { useLoaderData } from "react-router-dom";
import Service from "./service";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <h1 className="text-2xl"> Our Services: {services.length}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        {
            services.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
