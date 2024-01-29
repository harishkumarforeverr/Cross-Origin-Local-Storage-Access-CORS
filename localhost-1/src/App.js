import React, { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    // Fetch data from backend server
    axios
      .get("http://localhost:3001/api/data")
      .then((response) => {
        console.log("Data from Project-1:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      im from the mfe1
      <iframe
        src="http://localhost:3001/"
        style={{ width: "100%", border: "none" }}
      />
    </div>
  );
}

export default App;
