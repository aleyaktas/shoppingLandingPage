import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ServiceItem from "./components/ServiceItem";
import HomeBg from "./assets/HomeBg.svg";
import { serviceItems } from "./utils/serviceItems";
import ProductsSection from "./components/ProductsSection";
import JoinSection from "./components/JoinSection";

function App() {
  return (
    <div className="bg-gradient-to-t from-amber-50 to-white">
      <div className="relative">
        <Navbar />
        <div className="p-20">
          <Header />
          <div className="flex justify-between gap-20 py-20 z-10">
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
              zIndex: 1,
            }}
          />
        </div>
      </div>
      <ProductsSection />
      <div>
        <JoinSection />
      </div>
    </div>
  );
}

export default App;
