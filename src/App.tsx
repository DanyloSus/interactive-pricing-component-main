import Pricing from "./Pricing";

const App = () => {
  return (
    <main>
      <img
        src="./bg-pattern.svg"
        alt="bg pattern"
        className="w-screen absolute -z-10"
      />
      <div className="flex flex-col justify-center items-center py-[136px]">
        <div className="text-center relative">
          <h1 className="font-bold text-3xl mb-3 text-text-cta-background">
            Simple, traffic-based pricing
          </h1>
          <p className="text-text">
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
