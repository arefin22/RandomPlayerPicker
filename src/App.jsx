import "./App.css";
import BatsMan from "./component/BatsMan";
import Bowler from "./component/Bowler";

function App() {
  return (
    <>
      <div>
        <h2 className="text-xl text-center p-4">Bats-Man</h2>
        <BatsMan />
      </div>
      <div>
        <h2 className="text-xl text-center p-4">Bowler</h2>
        <Bowler />
      </div>
    </>
  );
}

export default App;
