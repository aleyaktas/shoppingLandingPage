import React from "react";
import CollectionImage from "../assets/images/Collection.png";
import WavesImage from "../assets/images/Waves.png";
import CollectionItem from "./CollectionItem";

interface CollectionItemProps {
  name: string;
  text: string;
  rightIconName?: string;
  isSelected?: boolean;
}

const collectionItems: CollectionItemProps[] = [
  {
    name: "Search",
    text: "Bibendum tellus",
    rightIconName: "ArrowRight",
    isSelected: true,
  },
  { name: "ShieldCheck", text: "Cras eget" },
  { name: "Rocket", text: "Dolor pharetra" },
  { name: "Screen", text: "Amet, fringilla" },
  { name: "Podcast", text: "Amet nibh" },
  { name: "SettingsAlt", text: "Sed velit" },
];

const CollectionSection: React.FC = () => {
  return (
    <div className="pt-12 lg:pt-20">
      <div className="flex flex-col items-center lg:items-start gap-8 px-4 lg:px-20">
        <p className="text-slate-900 text-2xl lg:text-6xl font-extrabold">
          Grow your collection
        </p>
        <p className="text-base lg:text-lg text-center lg:text-start text-slate-900">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="py-8 lg:py-20 relative flex flex-col lg:flex-row justify-between gap-20 px-4 lg:px-20">
        <div className="hidden lg:flex lg:flex-col gap-4">
          {collectionItems.map((item, index) => (
            <CollectionItem
              key={index}
              name={item.name}
              text={item.text}
              rightIconName={item.rightIconName}
              isSelected={item.isSelected}
            />
          ))}
        </div>
        <img
          src={CollectionImage}
          className="z-10 max-w-full mx-auto lg:mx-0 h-auto w-2/3"
          alt="Collection"
        />
        <div className="absolute inset-0 flex justify-end items-end">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${WavesImage})`,
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
