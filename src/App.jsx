import "./App.css";
import BatsMan from "./component/BatsMan";

function App() {
  return (
    <div className="gradient-background min-h-screen p-10">
      <div className="flex justify-center items-center">
          <BatsMan />
        {/* <div>
          <Title title="Batsmen" />
          <BatsMan />
        </div>
        <div>
          <Title title="Batsmen" />
          <BatsMan />
        </div>
        <div>
          <Title title="Batsmen" />
          <BatsMan />
        </div> */}
      </div>
    </div>
  );
}

export default App;
