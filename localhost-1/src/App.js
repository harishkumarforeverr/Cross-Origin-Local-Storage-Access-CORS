import React, { useEffect } from 'react'; 

function App() {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === "http://localhost:3001") {
        console.log("Raw data received:", event.data);
        try {
          const mfe2LocalStorageValue = JSON.parse(JSON.parse(event.data));
          console.log("Value from mfe2 localStorage:", mfe2LocalStorageValue);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    };
  
    window.addEventListener('message', handleMessage);
  
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  

  return (
    <div>
      im from the mfe1
      <iframe
        src="http://localhost:3001/"
        style={{ width: '100%', border: 'none' }}
      />
    </div>
  );
}

export default App;
