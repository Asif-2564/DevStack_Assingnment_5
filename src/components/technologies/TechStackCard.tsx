import { type Dispatch, type SetStateAction } from "react";
import type { ITechType } from "../../types/types";
import CardStack from "./CardStack";

interface SelectedTechProps{
    selectedTech:ITechType[],
    setSelectedTech: Dispatch<SetStateAction<ITechType[]>>
}

const TechStackCard = ({ selectedTech, setSelectedTech }: SelectedTechProps) => {
    return (
        <div>
            <CardStack selectedTech={selectedTech} setSelectedTech={setSelectedTech}/>
        </div>
    );
};

export default TechStackCard;