import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>Animated cup and Plate with coffee</h1> */}
      <div className="container">
        <div className="plate"></div>
        <div className="cup">
          <div className="top">
            <div className="vapour">
              <span style={{ "--i": 1 }}></span>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 16 }}></span>
              <span style={{ "--i": 5 }}></span>
              <span style={{ "--i": 13 }}></span>
              <span style={{ "--i": 20 }}></span>
              <span style={{ "--i": 6 }}></span>
              <span style={{ "--i": 7 }}></span>
              <span style={{ "--i": 10 }}></span>
              <span style={{ "--i": 8 }}></span>
              <span style={{ "--i": 17 }}></span>
              <span style={{ "--i": 11 }}></span>
              <span style={{ "--i": 12 }}></span>
              <span style={{ "--i": 14 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 9 }}></span>
              <span style={{ "--i": 15 }}></span>
              <span style={{ "--i": 4 }}></span>
              <span style={{ "--i": 19 }}></span>
            </div>
            <div className="circle">
              <div className="tea"></div>
            </div>
          </div>
          <div className="handle"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
