import Star from "../../assets/star.png";
import { useState } from 'react';
import type { ITechType } from "../../types/types";
import { toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";

interface ICardTypeProps{
    tech: ITechType,
    selectedTech:ITechType[],
    setSelectedTech: Dispatch<SetStateAction<ITechType[]>>

}
const Card = ({tech, selectedTech, setSelectedTech}:ICardTypeProps) => {
    const [addToStack, setAddToStack] = useState(false);
    const isAdded = selectedTech.some((selected)=>selected.id===tech.id);
    return (
            <div className="card w-70 bg-base-100 base-100 shadow-sm">
                <div className="card-body grid gap-5">
                    <div className="flex justify-between">
                        <img className="h-8 w-8" src={tech.icon} alt="logo"/>
                            <div className="badge badge-outline badge-accent">{tech.badge}</div>
                        </div>
                        <div className="grid gap-2">
                            <p className="text-2xl font-bold">{tech.name}</p>
                            <p className="text-[#64748B]">{tech.description}</p>
                        </div>
                        <div className="flex justify-between items-center gap-0.5">
                            <div className="badge badge-ghost text-[12px] font-semibold">{tech.category}</div>
                            <p className="text-[12px] font-semibold ">{tech.difficulty}</p>
                            <div className="flex justify-between items-center gap-0.5">
                                <img src={Star} alt="start image" className="h-3.5 w-3.5" ></img>
                                <p className="text-[12px] font-semibold">{tech.rating}</p>
                            </div>

                        </div>
                        <div className="mt-6">
                            <button 
                            onClick={()=>{
                                toast(`${tech.name} added to your stack`);
                                setAddToStack(true);
                                setSelectedTech([...selectedTech,tech]);
                            }  
                            }
                            disabled = {isAdded}
                            className="btn btn-block 
                            bg-[#0A0F1D] 
                            text-white
                            disabled:bg-gray-300
                            disabled:text-gray-700"
                            >
                                {isAdded || addToStack === true ? "Added to Stack" : "AddtoStack"}
                            </button>
                </div>
            </div>
        </div>
    );
};

export default Card;