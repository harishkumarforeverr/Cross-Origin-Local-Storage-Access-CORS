import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const parentWindow = window.parent;

    parentWindow.postMessage(
      JSON.stringify(localStorage.getItem("mfe2")),
      "http://localhost:3000/"
    );

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return <div>welcome to mfe2</div>;
}

export default App;
