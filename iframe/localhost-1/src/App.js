import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleIframeMessage = (event) => {
      if (event.origin === "http://localhost:3001") {
        console.log("event.origin ", event.origin);
        console.log("Raw data received:", event.data);

        try {
          const mfe2LocalStorageValue = JSON.parse(JSON.parse(event.data));
          console.log("Value from mfe2 localStorage:", mfe2LocalStorageValue);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    };

    // Add event listener when the component mounts
    window.addEventListener("message", handleIframeMessage);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleIframeMessage);
    };
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  return (
    <div>
      im from the mfe1
      <iframe
        style={{
          width: "100vw",
          height: "20rem",
        }}
        src="http://localhost:3001/"
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
    </div>
  );
}

export default App;
