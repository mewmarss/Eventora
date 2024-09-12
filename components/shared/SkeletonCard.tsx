const SkeletonCard = () => {
  return (
    <div className="w-fit rounded-md border flex flex-col items-center cursor-pointer">
      {/* Skeleton for Image */}
      <div className="w-[300px] h-[200px] bg-gray-300 rounded-t-md animate-pulse"></div>

      {/* Skeleton for Title and Date */}
      <div className="flex flex-col gap-1 mt-3 text-center w-full">
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mt-1 animate-pulse"></div>
      </div>

      {/* Skeleton for Description */}
      <div className="p-3 text-center w-full">
        <div className="h-4 bg-gray-300 rounded w-full mb-1 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mt-1 animate-pulse"></div>
      </div>

      {/* Skeleton for Button */}
      <div className="mb-3 w-1/3">
        <div className="h-10 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
