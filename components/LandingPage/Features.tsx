import FeaturesGrid from "./FeaturesGrid";

const Features = () => {
  return (
    <div className="py-20 flex flex-col gap-8 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl">Why Choose Eventora?</h1>
        <h2 className="font-medium text-xl text-gray-500">
          Explore how Eventora simplifies event planning with powerful,
          user-friendly features
        </h2>
      </div>
      <div className="flex items-center justify-center mt-5">
        <FeaturesGrid />
      </div>
    </div>
  );
};

export default Features;
