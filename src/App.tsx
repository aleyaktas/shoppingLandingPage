import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ServiceItem from "./components/ServiceItem";
import HomeBg from "./assets/HomeBg.svg";
import { serviceItems } from "./utils/serviceItems";
import ProductsSection from "./components/ProductsSection";

function App() {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <div className="p-20">
          <Header />
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
              opacity: 0.7,
              zIndex: -5,
            }}
          />
        </div>
      </div>
      <ProductsSection />
    </div>
  );
}

export default App;
