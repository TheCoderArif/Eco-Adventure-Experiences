import { FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";
const Service = ({ service }) => {
  const adventure = service;
  console.log(adventure)
  return (
    <div>
      <div className="border  card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl">
        {/* Image */}
        <figure className="relative h-52 overflow-hidden">
          <img
            src={adventure.image}
            alt={adventure.adventureTitle}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="badge badge-success text-white">
              {adventure.categoryName}
            </span>
          </div>
        </figure>

        {/* Content */}
        <div className="card-body p-4">
          {/* Title */}
          <h2 className="card-title text-lg font-bold">
            {adventure.adventureTitle}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500">{adventure.shortDescription}</p>

          {/* Info Row */}
          <div className="flex flex-wrap gap-4 text-sm mt-2 text-gray-600">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> {adventure.location}
            </span>
            <span className="flex items-center gap-1">
              <FaClock /> {adventure.duration}
            </span>
            <span className="flex items-center gap-1">
              <FaUsers /> {adventure.maxGroupSize}
            </span>
          </div>

          {/* Level + Availability */}
          <div className="flex justify-between items-center mt-3">
            <span className="badge badge-outline">
              {adventure.adventureLevel}
            </span>

            <span
              className={`badge ${
                adventure.bookingAvailability === "Available"
                  ? "badge-success"
                  : "badge-warning"
              }`}
            >
              {adventure.bookingAvailability}
            </span>
          </div>

          {/* Included Items */}
          <div className="mt-3">
            <p className="text-sm font-semibold">Included:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {adventure.includedItems.slice(0, 3).map((item, i) => (
                <span key={i} className="badge badge-ghost text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Price + Button */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-primary">
              ${adventure.adventureCost}
            </span>

            <button className="btn btn-primary btn-sm rounded-full">
              Explore Now bbb
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Service;
