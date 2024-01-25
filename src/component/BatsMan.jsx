import { useEffect, useState } from "react";
import Card from "./card";

const BatsMan = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    fetch("./player.JSON")
      .then((res) => res.json())
      .then((data) => setPlayers(data.batsman));
  }, []);

  const HandleRandomNumber = () => {
    if (players.length === 0) {
      return;
    }

    const randomNumber = parseInt(Math.random() * players.length);
    const updatedPlayers = players?.filter(
      (player) => selectedPlayer?.id !== player?.id
    );
    setPlayers(updatedPlayers);

    const recentlySelectedPlayer = players[randomNumber];
    setSelectedPlayer(recentlySelectedPlayer);
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center mx-auto text-center">
        <div className="w-7/12">
          <div className="flex justify-center items-center gap-2">
            {players?.map((player) => (
              <Card key={player.id} name={player.name} image={player.image} />
            ))}
          </div>
        </div>
        <div className="w-1/12">
          <button
            onClick={HandleRandomNumber}
            className="btn btn-ghost btn-outline"
          >
            Player Selector
          </button>
        </div>
        <div className="w-3/12">
          {selectedPlayer && (
            <>
              <Card name={selectedPlayer.name} image={selectedPlayer.image} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BatsMan;
