const EventSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-6 w-full animate-pulse">
      {/* Left Section - Event Info */}
      <div className="rounded-lg border p-6 text-center flex flex-col items-center relative">
        {/* Back Arrow Skeleton */}
        <div className="absolute top-4 left-4 w-6 h-6 bg-gray-300 rounded-full"></div>
        {/* Image Skeleton */}
        <div className="w-40 h-40 rounded-full bg-gray-300 mb-4"></div>
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-24 mb-2"></div>
        {/* Date Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-20 mb-4"></div>
        {/* Button Skeleton */}
        <div className="h-10 bg-gray-300 rounded w-1/3 mt-8"></div>
      </div>

      {/* Right Section - Event Description */}
      <div className="col-span-2 bg-white rounded-lg border p-6">
        <div className="h-6 bg-gray-300 rounded w-40 mb-4"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>

      {/* Bottom Section - Event Details */}
      <div className="col-span-3 bg-white rounded-lg border p-6">
        <div className="h-6 bg-gray-300 rounded w-40 mb-4"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSkeleton;
