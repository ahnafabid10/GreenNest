import React from "react";

const PlantCareTips = () => {
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
            <div className='bg-green-200'>
                <h2 className='text-4xl text-green-800 font-medium text-center py-10'>Plant Care Tips </h2>
                <div className='pb-20'>
            <div className='max-w-[1440px] mx-auto'>
                    <div className='justify-between gap-5 grid grid-cols-1 md:grid-cols-4'>
                    {
                        tips.map((t) =>(
                            <div className="card bg-green-50 max-w-[350px] object-cover p-3 shadow-sm">
      <figure className="px-10 pt-10">
    
        <img
        
          src={t.image}
          alt="Shoes"
          className="rounded-xl w-full h-[300px]" />
      </figure>
      <div className="items-center w-[300px] text-black p-1 text-center">
        <h2 className="text-xl text-green-800 font-bold py-3 text-center">{t.title}</h2>
        <p className="font-medium text-gray-700 pb-3 text-left">{t.details}</p>
        <p className=" pb-3 text-gray-500 text-left"><span className="font-bold">Type:</span> {t.type}</p>
        <p className="text-gray-500 pb-3 text-left"><span className="font-bold">Frequency:</span> {t.frequency}</p>
        
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCareTips;
