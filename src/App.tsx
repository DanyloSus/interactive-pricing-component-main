import Pricing from "./Pricing";

const App = () => {
  return (
    <main>
      <img
        src="./bg-pattern.svg"
        alt="bg pattern"
        className="w-screen absolute -z-10 object-cover"
      />
      <div className="flex flex-col justify-center items-center py-[136px] sm:px-6">
        <div className="text-center z-10 relative">
          <h1 className="font-bold text-3xl mb-3 text-text-cta-background sm:text-lg z-10 relative">
            Simple, traffic-based pricing
          </h1>
          <p className="text-text z-10 relative text-sm w-[200px] text-center mx-auto">
            Sign-up for our 30-day trial. No credit card required.
          </p>
          <img
            src="./pattern-circles.svg"
            alt="pattern circles"
            className="relative mx-auto -top-[110px]"
          />
        </div>
        <Pricing />
      </div>
    </main>
  );
};

export default App;
