// import React from 'react';

import type { ITechType } from "../../types/types";


// interface techProps{
    
// }

const TechnologyCard = ({technology}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
            technology.map((tech:ITechType)=>{
                return (
                    <div className="card w-70 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className="flex justify-between">
                            <img className="h-8 w-8" src={tech.icon} alt="logo"/>
                            <div className="badge badge-outline badge-accent">{tech.badge}</div>
                        </div>
                        <div>
                            <p>{tech.name}</p>
                            <p>{tech.description}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>{tech.category}</p>
                            <p>{tech.difficulty}</p>
                            <p>{tech.rating}</p>
                        </div>
                        <div className="mt-6">
                            <button className="btn btn-block bg-[#0A0F1D] text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
                )
                
            })
        }
        </div>


        
        //     <div className="card w-96 bg-base-100 shadow-sm">
        //     <div className="card-body">
        //         <div className="flex justify-between">
        //             <img src="https://www.flaticon.com/free-icon" alt="logo"/>
        //             <div className="badge badge-outline badge-accent">Accent</div>
        //         </div>
        //         <div>
        //             <p>React</p>
        //             <p>A declarative, component-based
        //             JavaScript library for building modern user
        //             interfaces.</p>
        //         </div>
        //         <div className="flex justify-between">
        //             <p>category</p>
        //             <p>difficulty</p>
        //             <p>rating</p>
        //         </div>
        //     </div>
        //     <div className="mt-6">
        //         <button className="btn btn-wide bg-[#0A0F1D] text-white">Subscribe</button>
        //     </div>
        // </div>
    );
};

export default TechnologyCard;