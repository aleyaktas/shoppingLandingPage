interface ServiceItem {
  name: string;
  description: string;
  image: string;
}

const ServiceItem = ({ name, description, image }: ServiceItem) => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-between gap-4 z-10">
      <img src={require(`../assets/${image}.svg`)} className="w-16 h-auto" />
      <span className="text-xl text-slate-900 font-medium">{name}</span>
      <p className="text-lg text-center lg:text-start text-slate-900 font-normal">
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;
