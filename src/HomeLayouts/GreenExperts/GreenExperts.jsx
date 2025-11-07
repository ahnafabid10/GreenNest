import React from "react";

const GreenExperts = () => {
  const experts = [
    {
      id: 1,
      name: "Sophia Greenfield",
      specialization: "Indoor Plant Specialist",
      bio: "Sophia has 8+ years of experience in designing and maintaining indoor gardens. She helps people create green corners even in small apartments.",
      image: "https://i.ibb.co.com/Dq796Y0/images.jpg",
    },
    {
      id: 2,
      name: "Liam Evergreen",
      specialization: "Soil & Fertilizer Expert",
      bio: "Liam focuses on organic fertilizers and soil health. His guidance ensures plants grow stronger with natural nutrition and proper care.",
      image: "https://i.ibb.co.com/3YfgRCXQ/istockphoto-1192838871-612x612.jpg",
    },
    {
      id: 3,
      name: "Ava Bloom",
      specialization: "Succulent & Cactus Care Expert",
      bio: "Ava is passionate about low-maintenance plants. She shares tips on watering cycles, sunlight exposure, and how to keep succulents thriving all year.",
      image: "https://i.ibb.co.com/XkdNs5c2/21.jpg",
    },
    {
      id: 4,
      name: "Noah Leafson",
      specialization: "Plant Doctor & Pest Control Advisor",
      bio: "Noah helps plant lovers identify common leaf problems, treat pests naturally, and revive unhealthy plants with easy home remedies.",
      image: "https://i.ibb.co.com/DfdJkq69/best-houseplants-for-men-2000x.webp",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">Meet Our Green Experts</h2>

      <div className="max-w-[1440px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 px-4">
        {experts.map((expert)=>(

          <div
            className="bg-green-50 rounded-2xl p-5 text-center">

            <img
              src={expert.image}
              alt=""
              className="w-[300px] h-[300px] rounded-xl object-cover mb-4"/>

            <h3 className="text-xl font-semibold text-green-700 mb-1">{expert.name}</h3>

            <p className="text-sm text-green-600 font-medium mb-2">{expert.specialization}</p>

            <p className="text-gray-600 text-sm">{expert.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenExperts;
