import "./App.css";

function App() {
  localStorage.setItem(
    "mfe2",
    JSON.stringify({
      name: "mfe2",
      port: "http://localhost:3001/",
      postMessage: "im from the mfe second",
    })
  );

  // Send a message to the parent window (mfe1) with the localStorage value
  window.parent.postMessage(
    JSON.stringify(localStorage.getItem("mfe2")),
    "http://localhost:3000/"
  );

  return <div>welcome to mfe2</div>;
}

export default App;
