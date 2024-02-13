import JoinImg from "../assets/JoinImg.svg";

const JoinSection = () => {
  return (
    <div className="px-20 py-40">
      <div className="flex justify-center items-center gap-20 bg-white shadow-dark-xl rounded-3xl">
        <div className="flex flex-col gap-6">
          <span className="text-slate-900 text-6xl font-extrabold">
            Why join us
          </span>
          <div>
            <p className="text-xl text-slate-900">
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
            <p className="text-xl text-slate-900">
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
            <p className="text-xl text-slate-900">
              Ullamcorper ornare in et egestas dolor orci.
            </p>
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
