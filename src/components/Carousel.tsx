import Carousel from "react-multi-carousel";
import { commentItems } from "../utils/commentItems";
import CommentItem from "./CommentItem";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = ({ className }: { className?: string }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      className={className}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      partialVisbile={true}
    >
      {commentItems.map((commentItem, index) => (
        <CommentItem
          key={index}
          title={commentItem.title}
          description={commentItem.description}
          profileImage={commentItem.profileImage}
          name={commentItem.name}
          job={commentItem.job}
        />
      ))}
    </Carousel>
  );
};

export default MyCarousel;
