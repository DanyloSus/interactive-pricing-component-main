import { useState } from "react";

const Pricing = () => {
  const [price, setPrice] = useState(16.0);
  const [is, setIs] = useState(false);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    const completeRange = document.getElementById("completeRange");
    if (completeRange) {
      completeRange.style.width = `${(newValue / 32.0) * 100}%`;
    }
    setPrice(newValue);
  };

  const handleChange = () => {
    setIs((i) => !i);
  };

  return (
    <section className="w-[540px] bg-white rounded-lg h-full shadow-lg px-11 pt-[52px] pb-9">
      <div className="flex items-center">
        <p className="uppercase tracking-[3px]">100k pageviews</p>{" "}
        <div className="flex items-center ml-auto">
          <h1 className="font-bold text-4xl mr-2">
            ${is ? ((price / 100) * 75).toFixed(2) : price.toFixed(2)}
          </h1>
          <p> / month</p>
        </div>
      </div>
      <div className="relative mt-8 mb-10" id="range">
        <input
          type="range"
          value={price}
          min={1.0}
          max={32.0}
          onChange={handleSliderChange}
        />
        <div className="overflow-hidden">
          <div
            className="bg-full-slider-bar h-full z-20"
            style={{ width: `50%` }}
            id="completeRange"
          ></div>
        </div>
      </div>
      <div className="flex gap-3 pr-5 text-sm">
        <p className="ml-auto">Monthly Billing</p>
        <div
          className="bg-toggle-background w-[42px] h-[22px] rounded-full relative p-1 cursor-pointer"
          style={is ? { background: "hsl(174, 86%, 45%)" } : {}}
          onClick={handleChange}
        >
          <div
            className="h-[14px] w-[14px] bg-white rounded-full transition-all ml-0"
            style={is ? { marginLeft: "auto" } : {}}
          ></div>
        </div>
        <p>Yearly Billing</p>
        <p className="bg-discount-background text-discount-text px-1 rounded-full text-xs">
          25% discount
        </p>
      </div>
      <hr className="my-10" />
      <div className="flex justify-between items-center">
        <div>
          <p>
            <img src="./icon-check.svg" alt="icon check" /> Unlimited websites
          </p>
          <p>
            <img src="./icon-check.svg" alt="icon check" /> 100% data ownership
          </p>
          <p>
            <img src="./icon-check.svg" alt="icon check" /> Email reports
          </p>
        </div>
        <button className="text-cta-text bg-text-cta-background py-2 px-11 rounded-full hover:text-white transition-colors">
          Start my trial
        </button>
      </div>
    </section>
  );
};

export default Pricing;
