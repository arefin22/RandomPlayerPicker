import { useEffect, useState } from "react";
import Card from "./card";

const RandomCard = () => {
  const [players, setPlayers] = useState([]);

  // const [remainingPlayers, setRemainingPlayers] = useState([]);
  let selectedPlayer = "";

  useEffect(() => {
    fetch("./player.JSON")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // const RandomNumber = Math.random()

  const HandleRandomNumber = () => {
    const randomNumber = parseInt(Math.random() * players?.length);
    console.log(randomNumber);
    selectedPlayer = players[randomNumber];
    console.log(selectedPlayer);
    let remaining = players?.filter(
      (player) => selectedPlayer?.id !== player?.id
    );
    setPlayers(remaining);
    console.log(remaining);
  };

  return (
    <div>
      <button onClick={HandleRandomNumber}>Random Number</button>

      <Card name={selectedPlayer?.name}  />
    </div>
  );
};

export default RandomCard;
