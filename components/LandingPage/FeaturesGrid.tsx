import {
  Sparkles,
  Calendar,
  Mail,
  Clipboard,
  Share,
  CheckCircle,
} from "lucide-react";
import React from "react";

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-xl border-2 flex flex-col text-left gap-2 shadow-xl hover:border-orange-400 transition duration-300 cursor-pointer">
        <Calendar className="text-orange-400" />
        <h1 className="text-lg font-bold">Event Agenda</h1>
        <h2 className="text-sm text-gray-500 font-medium">
          Create and share a detailed event agenda with your attendees. Include
          session times, speakers, and other important details to keep everyone
          on track.
        </h2>
      </div>
      <div className="p-4 rounded-xl border-2 flex flex-col text-left gap-2 shadow-xl hover:border-orange-400 transition duration-300 cursor-pointer">
        <Mail className="text-orange-400" />
        <h1 className="text-lg font-bold">Automated Notifications</h1>
        <h2 className="text-sm text-gray-500 font-medium">
          Keep your attendees informed with automated email and SMS
          notifications. Send reminders, confirmations, and follow-ups
          effortlessly.
        </h2>
      </div>
      <div className="p-4 rounded-xl border-2 flex flex-col text-left gap-2 shadow-xl hover:border-orange-400 transition duration-300 cursor-pointer">
        <Clipboard className="text-orange-400" />
        <h1 className="text-lg font-bold">Event Templates</h1>
        <h2 className="text-sm text-gray-500 font-medium">
          Use pre-designed templates to set up your events quickly. Choose from
          various styles to match your events theme.
        </h2>
      </div>
      <div className="p-4 rounded-xl border-2 flex flex-col text-left gap-2 shadow-xl hover:border-orange-400 transition duration-300 cursor-pointer">
        <Share className="text-orange-400" />
        <h1 className="text-lg font-bold">Social Media Integration</h1>
        <h2 className="text-sm text-gray-500 font-medium">
          Promote your events with built-in social media sharing tools. Allow
          attendees to spread the word effortlessly.
        </h2>
      </div>
      <div className="p-4 rounded-xl border-2 flex flex-col text-left gap-2 shadow-xl hover:border-orange-400 transition duration-300 cursor-pointer">
        <CheckCircle className="text-orange-400" />
        <h1 className="text-lg font-bold">RSVP Management</h1>
        <h2 className="text-sm text-gray-500 font-medium">
          Manage RSVPs with ease. Track responses, organize guest lists, and
          handle special requests all in one place.
        </h2>
      </div>
      <div className="p-4 rounded-xl border-2 flex flex-col text-left gap-2 shadow-xl hover:border-orange-400 transition duration-300 cursor-pointer">
        <Sparkles className="text-orange-400" />
        <h1 className="text-lg font-bold">Feedback Collection</h1>
        <h2 className="text-sm text-gray-500 font-medium">
          Gather and analyze feedback from attendees with customizable surveys
          and forms. Use insights to improve future events.
        </h2>
      </div>
    </div>
  );
};

export default FeaturesGrid;
