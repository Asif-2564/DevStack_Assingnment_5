import type { ITechType } from "../../types/types";
import  Card from "../../components/technologies/Card";
import type { Dispatch, SetStateAction } from "react";

interface techProps{
    technology:ITechType[],
    selectedTech:ITechType[],
    setSelectedTech: Dispatch<SetStateAction<ITechType[]>>
}

const TechnologyCard = ({technology, selectedTech, setSelectedTech}:techProps) => {
    console.log(`This is from technology card ${selectedTech} and ${setSelectedTech}`);
    return (
        <div className="grid grid-cols-3 gap-4">
            {
            technology.map((tech:ITechType)=>{
                return (
                    <Card key={tech.id} tech={tech}></Card>
                )
            })
        }
        </div>
    );
};

export default TechnologyCard;
