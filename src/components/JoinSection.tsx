import JoinImg from "../assets/JoinImg.svg";
import Icon from "../utils/Icon";

const JoinSection = () => {
  return (
    <div className="p-4 pb-12 lg:px-20 lg:py-40">
      <div className="flex flex-col px-4 py-8 lg:flex-row justify-center items-center gap-20 bg-white shadow-dark-xl rounded-3xl">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <span className="text-slate-900 text-3xl lg:text-6xl text-center lg:text-start font-extrabold">
            Why join us
          </span>
          <div className="pb-6 lg:pb-0">
            <div className="flex">
              <Icon name="Check" />
              <p className="text-xl text-slate-900">
                Est et in pharetra magna adipiscing ornare aliquam.
              </p>
            </div>
            <div className="flex">
              <Icon name="Check" />
              <p className="text-xl text-slate-900">
                Tellus arcu sed consequat ac velit ut eu blandit.
              </p>
            </div>
            <div className="flex">
              <Icon name="Check" />
              <p className="text-xl text-slate-900">
                Ullamcorper ornare in et egestas dolor orci.
              </p>
            </div>
          </div>
          <button className="w-fit text-xl text-amber-900 px-8 py-4 border-2 border-amber-900 rounded-lg">
            Sign up now
          </button>
        </div>
        <img src={JoinImg} />
      </div>
    </div>
  );
};

export default JoinSection;
