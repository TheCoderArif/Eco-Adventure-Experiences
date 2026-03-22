
const AdventureCard = ({ adventure }) => {
  const {
    adventureTitle,
    image,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
  } = adventure;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition duration-300 flex flex-col justify-between">
      
      {/* Image */}
      <figure className="h-56 overflow-hidden">
        <img
          src={image}
          alt={adventureTitle}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4 flex flex-col justify-between flex-1">
        {/* Top Info */}
        <div>
          {/* Category Badge */}
          <div className="badge badge-outline mb-2">{categoryName}</div>

          {/* Title */}
          <h2 className="card-title text-lg font-bold">{adventureTitle}</h2>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-1">{shortDescription}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-2 text-sm mt-3 text-gray-700">
            <p><span className="font-semibold">📍</span> {location}</p>
            <p><span className="font-semibold">⏳</span> {duration}</p>
            <p><span className="font-semibold">🔥</span> {adventureLevel}</p>
            <p>
              <span className="font-semibold">👥</span> Max 5
            </p>
          </div>

          {/* Availability */}
          <div className="mt-3">
            <span
              className={`badge ${
                bookingAvailability === "Available"
                  ? "badge-success"
                  : "badge-warning"
              }`}
            >
              {bookingAvailability}
            </span>
          </div>
        </div>

        {/* Bottom Section: Price + Button */}
        <div className="mt-4 flex flex-row items-center justify-between gap-3">
          <div className="text-2xl font-bold text-primary">${adventureCost}</div>
          <button className="btn btn-primary btn-sm w-32">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;