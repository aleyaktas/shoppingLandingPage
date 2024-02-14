import Carousel from "./Carousel";
import LeftArrow from "../assets/icons/arrow-left.svg";
import RightArrow from "../assets/icons/arrow-right.svg";
import { commentItems } from "../utils/commentItems";
import CommentItem from "./CommentItem";

const CommentSection = () => {
  return (
    <div className="py-20">
      <div className="flex justify-between items-center px-20 mb-20">
        <span className="text-slate-900 text-6xl font-extrabold">
          Because they love us
        </span>
        {/* <div className="flex gap-6">
          <button className="border-2 border-amber-900 rounded-full p-3 shadow-dark-s">
            <img src={LeftArrow} className="w-6 h-6" />
          </button>
          <button className="border-2 border-amber-900 rounded-full p-3 shadow-dark-s">
            <img src={RightArrow} className="w-6 h-6" />
          </button>
        </div> */}
      </div>
      <div className="relative">
        <div className="absolute bottom-10 right-20 left-20 h-full bg-amber-200 z-0"></div>
        <Carousel />
      </div>
    </div>
  );
};

export default CommentSection;
