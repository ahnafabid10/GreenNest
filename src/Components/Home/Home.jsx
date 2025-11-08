import React from 'react';
import Slider from '../../HomeLayouts/Swiper/Slider';
import TopRated from '../../HomeLayouts/TopRated/TopRated';
import PlantCareTips from '../../HomeLayouts/PlantCareTips/PlantCareTips';
import GreenExperts from '../../HomeLayouts/Experts/Experts';
import WeekOfPlants from '../../HomeLayouts/WeekOfPlants/WeekOfPlants';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopRated></TopRated>
            <PlantCareTips></PlantCareTips>
            <WeekOfPlants></WeekOfPlants>
            <GreenExperts></GreenExperts>
        </div>
    );
};

export default Home;