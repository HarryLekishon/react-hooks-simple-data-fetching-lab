import React, { useState, useEffect } from "react";

function App() {
  const [dogs, setDog] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDog(data.message);
      });
  }, []);

  if (!dogs) return <p>Loading...</p>;

  return <img src={dogs} alt="A Random Dog" />;
}

export default App;