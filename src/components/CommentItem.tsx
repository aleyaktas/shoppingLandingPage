import { CommentItemProps } from "../interfaces/Comment.interfaces";

const CommentItem = ({
  title,
  description,
  profileImage,
  name,
  job,
}: CommentItemProps) => {
  return (
    <div className="flex flex-col h-96 lg:h-112 gap-4 p-8 bg-white rounded-2xl border border-gray-200 shadow-dark-lg mr-6">
      <span className="text-gray-600 text-2xl font-bold py-4">{title}</span>
      <p className="text-base lg:text-2xl lg:leading-10">{description}</p>
      <div className="flex gap-4 pt-4 mt-auto">
        <img
          src={require(`../assets/images/${profileImage}.png`)}
          className="w-16 h-16 rounded-full"
          alt="Profile"
        />
        <div className="flex flex-col">
          <span className="text-lg">{name}</span>
          <span>{job}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
