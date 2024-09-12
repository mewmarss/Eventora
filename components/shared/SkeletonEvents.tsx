const SkeletonEvents = () => {
  return (
    <div className="border rounded-md p-2 flex flex-col gap-4">
      {/* Skeleton for the Title */}
      <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto animate-pulse"></div>

      {/* Skeleton for the Items */}
      <div className="flex flex-col gap-5">
        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonEvents;
