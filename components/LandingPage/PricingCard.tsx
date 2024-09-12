import { Check } from "lucide-react";
import Button from "../shared/Button";

const PricingCard = () => {
  return (
    <div id="pricing" className="grid grid-cols-2 gap-8 text-left mx-auto">
      <div className="p-4 rounded-xl border-2 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Free</h1>
            <h2 className="text-gray-500 text-sm">Free Forever</h2>
          </div>
          <h2 className="text-4xl font-bold">$0</h2>
        </div>
        <div className="flex flex-col gap-4 mb-5 mt-5">
          <div className="flex items-center gap-4">
            <Check className="text-gray-500" />
            <span>Access to basic features</span>
          </div>
          <div className="flex items-center gap-4">
            <Check className="text-gray-500" />
            <span>Unlimited event creation</span>
          </div>
          <div className="flex items-center gap-4">
            <Check className="text-gray-500" />
            <span>50 attendee limit per event</span>
          </div>
          <div className="flex items-center gap-4">
            <Check className="text-gray-500" />
            <span>Email support</span>
          </div>
        </div>
        <Button className="bg-orange-400/20 text-orange-400">
          Start for free
        </Button>
      </div>
      <div className="p-4 rounded-xl border-2 border-orange-400 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Pro</h1>
            <h2 className="text-gray-500 text-sm">Get the best of Eventora</h2>
          </div>
          <h2 className="flex text-4xl font-bold items-end">
            $10{" "}
            <span className="text-base font-light mb-1 ml-1 text-gray-600">
              (one time)
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 mb-5 mt-5">
          <div className="flex items-center gap-4">
            <Check className="text-orange-400" />
            <span>All Free Plan Features</span>
          </div>
          <div className="flex items-center gap-4">
            <Check className="text-orange-400" />
            <span>Custom branding</span>
          </div>
          <div className="flex items-center gap-4">
            <Check className="text-orange-400" />
            <span>Priority support</span>
          </div>
          <div className="flex items-center gap-4">
            <Check className="text-orange-400" />
            <span>Advanced analytics</span>
          </div>
        </div>
        <Button className="bg-orange-400 text-white">Upgrade to Pro</Button>
      </div>
    </div>
  );
};

export default PricingCard;
