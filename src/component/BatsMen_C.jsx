import { useEffect, useState } from "react";
import CardSinglePlayer from "./CardSinglePlayer";

const BatsMen_A = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./batsmen.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data?.batsmen_c || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const getRandomPlayer = () => {
    if (players?.length === 0) {
      alert("No more players available.");
      return;
    }

    // Randomly pick a player
    const randomIndex = Math.floor(Math.random() * players?.length);
    const randomPlayer = players[randomIndex];

    // const randomIndex = parseInt(Math.random() * players.length);
    // const randomPlayer = players?.filter(
    //   (player) => selectedPlayer?.id !== player?.id
    // );
    console.log(randomPlayer, randomIndex, selectedPlayer)
    setSelectedPlayer(randomPlayer);
    // Remove the selected player from the list
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== randomPlayer.id)
    );
  };

  return (
    <div className="w-full flex justify-between items-center mx-auto text-center">
      <div className="w-full">
        <div className="flex justify-between items-center border-b-2 p-0 border-gray-300 w-full">
          <h2 className="text-4xl text-center p-4 pb-0 text-white">Batsmen (Segment 3)</h2>
          <button
            onClick={getRandomPlayer}
            disabled={loading}
            className="btn bg-white text-slate-900 btn-outline"
          >
            {loading ? "Loading..." : "Pick Player"}
          </button>
        </div>

        <div className="w-6/12 mx-auto m-10">
          {selectedPlayer && (
            <CardSinglePlayer
              name={selectedPlayer?.name}
              image={selectedPlayer?.photo}
              // designation={selectedPlayer?.designation}
              // office={selectedPlayer?.office}
              specialty={selectedPlayer?.speciality}
              basePrice={selectedPlayer?.basePrice}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BatsMen_A;
