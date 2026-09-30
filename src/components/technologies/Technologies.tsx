// import React from 'react';
import { use } from "react";
import type { ITechType } from "../../types/types";
import TechnologyCard from "./TechnologyCard";

interface techProps{
    technologiesPromise: Promise<ITechType[]>
}
const Technologies = ({technologiesPromise}:techProps) => {
    const technology = use(technologiesPromise);
    console.log(technology);
    return (

        <section className="container mx-auto">
            <div className="space-y-3">
                <p className="text-4xl font-extrabold">Explore the <span className="text-[#7C3AED]">Technologies</span></p>
                <p className="text-[#475569]">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="flex justify-between mt-10">
                <div><TechnologyCard technology={technology}/></div>
                <div><h1>selected technology</h1></div>
            </div>
        </section>
    );
};

export default Technologies;