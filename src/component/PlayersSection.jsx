import { useEffect, useState } from "react";
import Card from "./card";

const PlayersSection = () => {

    const [players, setPlayers] = useState([]);


    useEffect(()=> {
        fetch("./player.JSON")
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    
    return (
        <div className="flex justify-center items-center gap-2">
            {
                players?.map(player => (
                    <Card key={player.id} name={player.name} image={player.image} />
                ))
            }
        </div>
    );
};

export default PlayersSection;