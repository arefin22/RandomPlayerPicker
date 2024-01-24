import { useEffect, useState } from "react";
import Card from "./card";

const RandomCard = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    fetch("./player.JSON")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
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
      <button onClick={HandleRandomNumber}>Random Number</button>

      {selectedPlayer && (
        <>
          <Card name={selectedPlayer.name} image={selectedPlayer.image} />
        </>
      )}
    </div>
  );
};

export default RandomCard;
