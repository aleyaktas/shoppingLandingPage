import FeaturedProductImg from "../assets/FeaturedProduct.svg";
import FeaturedProductBg from "../assets/FeaturedProductBg.svg";

const FeaturedProduct = () => {
  return (
    <div className="flex justify-center items-center gap-20">
      <div className="flex flex-col gap-8">
        <p className=" text-7xl font-extrabold text-slate-900">
          Collectible Sneakers
        </p>
        <p className="text-lg text-slate-900">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 border-2 rounded-lg text-amber-900 border-amber-900">
            Sign up now
          </button>
          <button className="p-4 text-amber-900">Watch Demo</button>
        </div>
      </div>
      <div className="relative">
        <img src={FeaturedProductBg} className="absolute inset-0 z-0" />
        <img
          src={FeaturedProductImg}
          className="relative z-10 bottom-10 right-10"
        />
      </div>
    </div>
  );
};

export default FeaturedProduct;
