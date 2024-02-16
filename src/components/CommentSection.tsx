import Carousel from "./Carousel";

const CommentSection = () => {
  return (
    <div className="py-12 lg:py-20">
      <div className="flex justify-between items-center px-4 lg:px-20 mb-20">
        <span className="text-slate-900 text-center lg:text-start text-3xl lg:text-6xl font-extrabold">
          Because they love us
        </span>
      </div>
      <div className="relative">
        <div className="absolute bottom-10 right-4 left-4 lg:right-20 lg:left-20 h-full bg-amber-200 z-0"></div>
        <Carousel />
      </div>
    </div>
  );
};

export default CommentSection;
