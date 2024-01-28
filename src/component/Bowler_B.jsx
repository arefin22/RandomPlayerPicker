import { useEffect, useState } from "react";
import CardSinglePlayer from "./CardSinglePlayer";
// import Title from "./Title";

const Bowler_B = () => {
  const [playersByCategory, setPlayersByCategory] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./bowler.json")
      .then((res) => res.json())
      .then((data) => {
        const groupedPlayers = groupPlayersByCategory(data?.bowler_b);
        setPlayersByCategory(groupedPlayers);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const groupPlayersByCategory = (players) => {
    return players.reduce((grouped, player) => {
      const category = player.category || "default";
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(player);
      return grouped;
    }, {});
  };

  const getRandomPlayer = (category) => {
    const categoryPlayers = playersByCategory[category] || [];
    if (categoryPlayers.length === 0) {
      return null;
    }

    const randomNumber = parseInt(Math.random() * categoryPlayers.length);
    return categoryPlayers[randomNumber];
  };

  const HandleRandomNumber = () => {
    const categories = Object.keys(playersByCategory);
    let hasRemainingPlayers = false;

    for (const category of categories) {
      const randomPlayer = getRandomPlayer(category);
      if (randomPlayer) {
        hasRemainingPlayers = true;
        setSelectedPlayer(randomPlayer);
        const updatedPlayers = playersByCategory[category].filter(
          (player) => randomPlayer.id !== player.id
        );
        setPlayersByCategory({
          ...playersByCategory,
          [category]: updatedPlayers,
        });
        break;
      }
    }

    if (!hasRemainingPlayers) {
      alert("There are no more Bowlers.");
    }
  };

  return (
    <div className="w-full flex justify-between items-center mx-auto text-center">
      <div className="w-full">
        {/* <Title title="Batsmen" /> */}
        <div className="flex justify-between items-center border-b-2 p-0 border-gray-300 w-full">
          <h2 className="text-4xl text-center p-4 pb-0 text-white">Bowlers</h2>
          <button
            onClick={HandleRandomNumber}
            disabled={loading}
            className="btn bg-white text-slate-900 btn-outline"
          >
            Pick Player
          </button>
        </div>

        <div className="w-6/12 mx-auto m-10">
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

export default Bowler_B;
