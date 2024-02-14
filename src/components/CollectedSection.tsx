import Map from "../assets/images/Map.png";
import SelectedShoes from "../assets/images/SelectedShoes.png";

const CollectedSection = () => {
  return (
    <div className="bg-amber-900 relative h-192">
      <img src={SelectedShoes} className="absolute top-5 left-36 z-10" />
      <div className="h-full flex flex-col justify-center items-center">
        <span className="text-amber-50 text-8xl font-extrabold z-10">
          11,658,467
        </span>
        <span className="text-amber-50 text-6xl font-extrabold z-10">
          Shoes Collected
        </span>
      </div>
      <div className="absolute inset-0 px-36 py-10 flex justify-center items-center">
        <div className="h-full flex justify-center items-center">
          <img
            src={Map}
            className="h-full w-auto max-w-full max-h-full object-center opacity-50"
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectedSection;
