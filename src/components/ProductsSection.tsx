import { productItems } from "../utils/productItems";
import ProductItem from "./ProductItem";

const ProductsSection = () => {
  return (
    <div className="bg-slate-900 p-4 py-12 lg:p-20">
      <div className="flex flex-col gap-8 lg:gap-20">
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-0 lg:flex-row justify-between">
          <span className="text-white text-3xl lg:text-6xl font-extrabold">
            The best of the best
          </span>
          <button className="text-white w-fit font-bold text-2xl border-2 rounded-lg border-white px-6 py-5">
            Sign up now
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {productItems.map((productItem) => (
            <ProductItem
              name={productItem.name}
              description={productItem.description}
              image={productItem.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
