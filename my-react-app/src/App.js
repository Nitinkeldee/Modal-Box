import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Content from "./Components/Content";
import Loader from "./Components/Loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setValue(data.results[0]);
        setIsLoading(false);
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <div class="circle1"></div>
      <div class="circle2"></div>
      {isLoading ? <Loader></Loader> : <Content value={value} />}
      <div className="wrapper"></div>
    </div>
  );
}

export default App;
