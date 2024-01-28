import "./App.css";
import AllRounder_A from "./component/AllRounder_A";
import AllRounder_B from "./component/AllRounder_B";
import BatsMen_A from "./component/BatsMen_A";
import BatsMen_B from "./component/BatsMen_B";
import BatsMen_C from "./component/BatsMen_C";
import Bowler_A from "./component/Bowler_A";
import Bowler_B from "./component/Bowler_B";
import Hero from "./component/Hero";
import WicketKeepers from "./component/WicketKeepers";

function App() {
  return (
    <div className="gradient-background min-h-screen">
        <Hero />
      <div className="flex flex-col justify-center items-center p-20 mx-auto">
        <BatsMen_A />
        <Bowler_A />
        <AllRounder_A />
        <WicketKeepers />
        <BatsMen_B />
        <Bowler_B />
        <AllRounder_B />
        <BatsMen_C />
      </div>
    </div>
  );
}

export default App;
