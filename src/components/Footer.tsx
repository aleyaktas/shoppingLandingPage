import AppStore from "../assets/icons/app-store.svg";
import PlayStore from "../assets/icons/play-store.svg";
import Icon from "../utils/Icon";

const Footer = () => {
  const footerItemList = [
    ["Product", "Pricing", "Overview", "Browse", "Accessibility", "Five"],
    [
      "Solutions",
      "Brainstorming",
      "Ideation",
      "Wireframing",
      "Research",
      "Design",
    ],
    [
      "Support",
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
    ],
  ];

  return (
    <div className="bg-slate-900 px-20">
      <div className="flex justify-between py-12 border-b border-slate-200">
        {footerItemList.map((footerItem) => (
          <div>
            {footerItem.map((item) => (
              <p className="py-3 text-slate-200">{item}</p>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <span className="text-slate-200 py-3">Get the App</span>

          <button className="bg-black flex gap-2 justify-center items-center px-3 py-2 border border-gray-300 rounded-lg">
            <img src={AppStore} alt="App Store" />
            <div>
              <p className="text-slate-200 text-sm text-start">
                Download on the
              </p>
              <p className="text-slate-200 text-xl font-medium">App Store</p>
            </div>
          </button>
          <button className="bg-black flex gap-2 justify-center items-center px-3 py-2 border border-gray-300 rounded-lg">
            <img src={PlayStore} alt="Play Store" />
            <div>
              <p className="text-slate-200 text-sm text-start">GET IT ON</p>
              <p className="text-slate-200 text-xl font-medium">Google Play</p>
            </div>
          </button>
          <span className="text-slate-200 pt-12 pb-3 font-medium">
            Follow Us
          </span>
          <div className="flex gap-4">
            <Icon name="Youtube" />
            <Icon name="Facebook" />
            <Icon name="Twitter" />
            <Icon name="Instagram" />
            <Icon name="Linkedin" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-6">
        <p className="text-slate-200">Collers @ 2023. All rights reserved.</p>
        <div className="flex gap-8">
          <button className="text-slate-200 py-3">Terms</button>
          <button className="text-slate-200 py-3">Privacy</button>
          <button className="text-slate-200 py-3">Contact</button>
          <button className="text-slate-200 py-3">Terms</button>
          <button className="flex gap-2 py-3">
            <Icon name="World" />
            <p className="text-slate-200">EN</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;