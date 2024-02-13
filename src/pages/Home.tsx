import FeaturedProduct from "../components/FeaturedProduct";
import ServiceItem from "../components/ServiceItem";
import HomeBg from "../assets/HomeBg.svg";
import { serviceItems } from "../utils/serviceItems";

const Home = () => {
  return (
    <div className="p-20 relative">
      <FeaturedProduct />
      <div className="flex justify-between gap-20 py-20">
        {serviceItems.map((serviceItem) => (
          <ServiceItem
            name={serviceItem.name}
            description={serviceItem.description}
            image={serviceItem.image}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 flex justify-end items-end"
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default Home;
