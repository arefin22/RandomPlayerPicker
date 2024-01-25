import "./App.css";
import BatsMan from "./component/BatsMan";
import Bowler from "./component/Bowler";

function App() {
  return (
    <div className="gradient-background min-h-screen p-10">
      <div>
        <h2 className="text-4xl text-center p-4 pb-0 text-white">Batsmen</h2>
        <div className="border-b-2 border-white w-60 mx-auto mt-2 m-6"></div>
        <div>
          <BatsMan />
        </div>
      </div>
      <div>
        <h2 className="text-xl text-center p-4">Bowler</h2>
        <Bowler />
      </div>
    </div>
  );
}

export default App;
