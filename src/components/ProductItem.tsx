interface ProductItem {
  name: string;
  description: string;
  image: string;
}

const ProductItem = ({ name, description, image }: ProductItem) => {
  return (
    <div className="flex flex-col justify-between gap-4 border-1 border-slate-900 rounded-lg shadow-2xl">
      <div className="rounded-t-lg overflow-hidden">
        <img
          src={require(`../assets/${image}.svg`)}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-4 pt-8 px-8">
        <span className="text-xl text-white font-medium">{name}</span>
        <p className="text-lg text-white font-normal">{description}</p>
      </div>
      <div className="p-8">
        <button className="w-full py-4 text-center text-2xl font-medium text-white border-2 border-white rounded-lg">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
