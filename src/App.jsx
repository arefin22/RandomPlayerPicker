import "./App.css";
import AllRounder_A from "./component/AllRounder_A";
import AllRounder_B from "./component/AllRounder_B";
import AllRounder_C from "./component/AllRounder_C";
import BatsMen_A from "./component/BatsMen_A";
import BatsMen_B from "./component/BatsMen_B";
import BatsMen_C from "./component/BatsMen_C";
import Bowler_A from "./component/Bowler_A";
import Bowler_B from "./component/Bowler_B";
import Bowler_C from "./component/Bowler_C";

import Wicket_A from "./component/Wicket_A";

import Wicket_B from "./component/Wicket_B";

import Wicket_C from "./component/Wicket_C";
import Hero from "./component/Hero";

function App() {
  return (
    <div className="gradient-background min-h-screen">
      <Hero />
      <div className="flex flex-col justify-center items-center p-20 mx-auto">
        <AllRounder_A />
        <BatsMen_A />
        <Bowler_A />
        <Wicket_A />
        <AllRounder_B />
        <BatsMen_B />
        <Bowler_B />
        <Wicket_B />
        <AllRounder_C />
        <BatsMen_C />
        <Bowler_C />
        <Wicket_C />
      </div>
    </div>
  );
}

export default App;
