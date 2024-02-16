import { ServiceItemProps } from "../interfaces/Service.interfaces";

const ServiceItem = ({ name, description, image }: ServiceItemProps) => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-between gap-4 z-10">
      <img
        src={require(`../assets/icons/${image}.svg`)}
        className="w-16 h-auto"
        alt="Service"
      />
      <span className="text-xl text-slate-900 font-medium">{name}</span>
      <p className="text-lg text-center lg:text-start text-slate-900 font-normal">
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;
