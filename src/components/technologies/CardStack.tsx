import type { ITechType } from "../../types/types";
import { type Dispatch, type SetStateAction } from "react";
interface ISelectedTechCardProps{
    selectedTech: ITechType[],
    setSelectedTech:  Dispatch<SetStateAction<ITechType[]>>
}
const CardStack = ({selectedTech,setSelectedTech}:ISelectedTechCardProps) => {
    console.log(`this is from card stack ${selectedTech} and ${setSelectedTech}`)
    return (
        <div>
            <h1>Tech Stack Card</h1>
        </div>
    );
};

export default CardStack;