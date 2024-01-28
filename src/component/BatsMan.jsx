import { useEffect, useState } from "react";
import CardSinglePlayer from "./CardSinglePlayer";

const BatsMan = () => {
  const [playersByCategory, setPlayersByCategory] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./batsmen.json")
      .then((res) => res.json())
      .then((data) => {
        const groupedPlayers = groupPlayersByCategory(data?.batsmen);
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
      const category = player.category || 'default';
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
      alert("There are no more Bats man.");
    }
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center mx-auto text-center">
        <div className="w-full">
          <button
            onClick={HandleRandomNumber}
            disabled={loading}
            className="btn bg-white m-6 text-slate-900 btn-outline"
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
