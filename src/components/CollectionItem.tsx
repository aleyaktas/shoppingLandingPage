import Icon from "../utils/Icon";

interface CollectionItemProps {
  name: string;
  text: string;
  rightIconName?: string;
  isSelected?: boolean;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
  name,
  text,
  rightIconName,
  isSelected,
}) => {
  return (
    <div
      className={`flex gap-4 items-center p-4 ${
        isSelected && "bg-white rounded-lg shadow-dark-m"
      } `}
    >
      <Icon name={name} />
      <p className="text-xl font-medium">{text}</p>
      {rightIconName && <Icon name={rightIconName} />}
    </div>
  );
};

export default CollectionItem;
