import Map from "../assets/images/map.png";
import SelectedShoes from "../assets/images/selectedShoes.png";

const CollectedSection = () => {
  return (
    <div className="bg-amber-900 relative h-192">
      <div className="absolute right-0 left-0 lg:right-auto lg:top-5 lg:left-36 flex justify-center items-center">
        <img
          src={SelectedShoes}
          className="z-10 max-w-full max-h-full h-auto lg:mx-auto"
          alt="Selected Shoes"
        />
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <span className="text-amber-50 text-5xl lg:text-8xl font-extrabold z-10">
          11,658,467
        </span>
        <span className="text-amber-50 text-3xl lg:text-6xl font-extrabold z-10">
          Shoes Collected
        </span>
      </div>
      <div className="absolute inset-0 lg:px-36 py-10 flex justify-center items-center">
        <div className="h-full flex justify-center items-center">
          <img
            src={Map}
            className="h-full lg:w-auto max-w-full max-h-full w-full lg:object-center object-cover opacity-50"
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectedSection;
