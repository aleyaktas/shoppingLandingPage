import { navbarItems } from "../utils/navbarItems";

const Navbar = () => {
  return (
    <nav className="py-7 px-20">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl font-bold text-amber-900">Collers</span>
        <div className="flex gap-4 items-center">
          {navbarItems.map((navbarItem) => (
            <button className="text-amber-900 px-2 py-3">{navbarItem}</button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
