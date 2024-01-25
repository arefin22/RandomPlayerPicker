import { useEffect, useState } from "react";
import Card from "./card";
import CardSinglePlayer from "./CardSinglePlayer";

const BatsMan = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    fetch("./player.JSON")
      .then((res) => res.json())
      .then((data) => setPlayers(data?.batsman));
  }, []);

  const HandleRandomNumber = () => {
    if (players.length === 0) {
      return;
    }

    const randomNumber = parseInt(Math.random() * players.length);

    const recentlySelectedPlayer = players[randomNumber];
    setSelectedPlayer(recentlySelectedPlayer);

    const updatedPlayers = players.filter(
      (player) => recentlySelectedPlayer?.id !== player?.id
    );
    setPlayers(updatedPlayers);
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center mx-auto text-center">
        <div className="w-7/12">
          <div className="border-2 border-slate-300 p-4 rounded-xl">
            <div className="grid grid-cols-5 justify-center items-center gap-3">
              {players?.map((player) => (
                <Card
                  key={player.id}
                  name={player.name}
                  image={player.photo}
                  specialty={player.speciality}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/12">
          <button
            onClick={HandleRandomNumber}
            className="btn btn-ghost m-6 btn-outline"
          >
            Pick Player
          </button>

          {selectedPlayer && (
            <>
              <CardSinglePlayer
                name={selectedPlayer.name}
                image={selectedPlayer.photo}
                designation={selectedPlayer.designation}
                office={selectedPlayer.office}
                specialty={selectedPlayer.speciality}
                basePrice={selectedPlayer.basePrice}
              ></CardSinglePlayer>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BatsMan;
