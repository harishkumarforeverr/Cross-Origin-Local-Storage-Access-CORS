import React, { useEffect } from 'react';

import axios from "axios";
function App() {
  useEffect(() => {
    // Send data to backend server
    axios.get('/api/data', { message: 'Hello from Project-1' })
      .then(response => {
        console.log('Data sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  }, []);

  return <div>welcome to mfe2</div>;
}

export default App;
