import React from "react";

const PlantCareTips = () => {
  // Static plant care tips (no fetch)
  const tips = [
    {
      id: 1,
      title: "Water deeply but infrequently",
      type: "Watering",
      details:
        "Instead of watering a little every day, water your plants deeply so that moisture reaches the roots. Let the top 2–3 cm of soil dry before the next watering. This helps roots grow stronger and prevents overwatering or root rot.",
      frequency: "Every 10–14 days (adjust for season)",
      image: "https://i.ibb.co.com/qLSjvT6F/11.jpg",
    },
    {
      id: 2,
      title: "Bright, indirect light is best",
      type: "Sunlight",
      details:
        "Most indoor plants thrive in bright but indirect sunlight. Place them near an east- or north-facing window. Direct sun can scorch delicate leaves, so if sunlight is too harsh, use a light curtain for protection.",
      frequency: "4–8 hours daily",
      image: "https://i.ibb.co.com/NdmsJ00N/12.jpg",
    },
    {
      id: 3,
      title: "Feed during the growing season",
      type: "Fertilizing",
      details:
        "During spring and summer, your plants grow faster and need more nutrients. Use a balanced liquid fertilizer (10-10-10) once a month at half strength. Avoid fertilizing in winter when most plants are resting.",
      frequency: "Once a month (Spring–Summer)",
      image: "https://i.ibb.co.com/tTwRYXCg/13.jpg",
    },
    {
      id: 4,
      title: "Keep away from cold drafts and heat vents",
      type: "Temperature",
      details:
        "Most indoor plants dislike sudden temperature changes. Avoid placing them near open windows, air conditioners, or heaters. Stable room temperature (18–27°C) helps your plants stay healthy year-round.",
      frequency: "Ongoing",
      image: "https://i.ibb.co.com/N26KPdFY/14.jpg",
    },
  ];

  return (
    <div className="py-10 bg-green-200">
      <h2 className="text-4xl font-semibold text-center  text-green-700">Plant Care Tips</h2>
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 py-10 px-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl p-5"
          >
            <img
              src={tip.image}
              alt=""
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              {tip.title}
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              {tip.details}
            </p>
            <p className="text-sm text-gray-500">
              <b>Type:</b> {tip.type}
            </p>
            <p className="text-sm text-gray-500">
              <b>Frequency:</b> {tip.frequency}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCareTips;
