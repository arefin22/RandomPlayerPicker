import "./App.css";
import PlayersSection from "./component/PlayersSection";
import RandomCard from "./component/RandomCard";

function App() {
  return (
    <>
      <div className="w-full mx-auto text-center">
        <div className="w-7/12">
          <PlayersSection />
        </div>
        <div className="w-1/12">
          <RandomCard />
        </div>
        <div className="w-3/12"></div>
      </div>
    </>
  );
}

export default App;
