import type { ITechType } from "../../types/types";
import { type Dispatch, type SetStateAction } from "react";
interface ISelectedTechCardProps{
    selectedTech: ITechType[],
    setSelectedTech:  Dispatch<SetStateAction<ITechType[]>>
}
const CardStack = ({selectedTech,setSelectedTech}:ISelectedTechCardProps) => {
    console.log("This is from selected Tech:", selectedTech);
    return (
<div className="card w-80 bg-base-100 shadow-sm border border-slate-100">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                    Your Stack
                </h2>

                {selectedTech.length === 0 ? (
                    <div>
                        <p className="text-[#94A3B8]">
                            No technologies selected yet.
                        </p>

                        <div className="
                            mt-4
                            h-32
                            rounded-3xl
                            border-2
                            border-dashed
                            border-[#DCE5F0]
                            flex
                            items-center
                            justify-center
                        ">
                            <p className="text-xl text-[#94A3B8]">
                                Your stack is empty.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="mt-4 grid gap-3">
                        <p className="text-[#94A3B8]">
                            {selectedTech.length} technologies selected.
                        </p>
                        {selectedTech.map((tech) => (

                            <div
                                key={tech.id}
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-slate-200
                                    p-3
                                "
                            >

                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="h-10 w-10 object-contain"
                                />

                                <div>
                                    <p className="font-semibold text-[#0F172A]">
                                        {tech.name}
                                    </p>

                                    <p className="text-sm text-[#94A3B8]">
                                        {tech.category}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default CardStack;