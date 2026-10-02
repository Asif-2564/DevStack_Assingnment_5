// import React from 'react';
import { use,useState } from "react";
import type { ITechType } from "../../types/types";
import TechnologyCard from "./TechnologyCard";
import TechStack from "./TechStackCard";

interface techProps{
    technologiesPromise: Promise<ITechType[]>
}
const Technologies = ({technologiesPromise}:techProps) => {
    const technology = use(technologiesPromise);
    console.log(technology);
    const [selectedTech,setSelectedTech] = useState([]);
    return (

        <section className="container mx-auto">
            <div className="space-y-3">
                <p className="text-4xl font-extrabold">Explore the <span className="text-[#7C3AED]">Technologies</span></p>
                <p className="text-[#475569]">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="flex justify-between mt-10">
                <div><TechnologyCard selectedTech={selectedTech} setSelectedTech={setSelectedTech} technology={technology}/></div>
                <div><TechStack></TechStack></div>
            </div>
        </section>
    );
};

export default Technologies;