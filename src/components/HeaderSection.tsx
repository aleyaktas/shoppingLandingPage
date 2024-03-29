import Icon from "../utils/Icon";
import { serviceItems } from "../utils/serviceItems";
import ServiceItem from "./ServiceItem";
import HomeBg from "../assets/icons/home-bg.svg";
import FeaturedProductBg from "../assets/icons/featured-productBg.svg";
import FeaturedProductImg from "../assets/icons/featured-product.svg";

const HeaderSection = () => {
  return (
    <div className="relative">
      <div className="p-4 lg:p-20">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
          <div className="flex flex-col gap-8">
            <p className="text-5xl text-center lg:text-start lg:text-7xl font-extrabold text-slate-900 z-10">
              Collectible Sneakers
            </p>
            <p className="text-lg text-center lg:text-start text-slate-900 z-10">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="flex justify-center items-center lg:justify-start gap-4 z-10">
              <button className="p-4 lg:px-8 lg:py-4 border-2 rounded-lg text-amber-900 border-amber-900 font-medium">
                Sign up now
              </button>
              <button className="flex gap-1 lg:p-4 text-amber-900 font-medium">
                <Icon name="PlayCircle" />
                <p>Watch Demo</p>
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={FeaturedProductBg}
              className="absolute inset-0 z-10 h-full w-full"
              alt="Featured Product Background"
            />
            <img
              src={FeaturedProductImg}
              className="relative z-10 bottom-4 right-4 lg:bottom-10 lg:right-10"
              alt="Featured Product"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 px-4 py-12 lg:py-20 z-10">
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
  );
};

export default HeaderSection;
