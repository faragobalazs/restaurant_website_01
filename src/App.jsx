import { useState } from "react";
import "./App.css";
import chef from "./images/chef.png";

let city1 = "New York";
let city2 = "London";
let city3 = "Sydney";

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Header(props) {
  // This is a child component.
  return (
    <header>
      <h1>🌮 {props.name}'s Kitchen 🍜</h1>
    </header>
  );
}

function Main({ dishes }) {
  return (
    <>
      <div className="welcome">
        <h2>Welcome to this beautiful restaurant!</h2>
      </div>
      <main>
        <div className="menubar">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Restaurant</h3>
          <h3>Contact</h3>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur {city1} and {city2}. Dolor
            eu ornare feugiat, metus diam {city3.toUpperCase()}.
          </p>
        </div>
        <div className="photo">
          <img src={chef} height={200} alt="A photo of a female chef" />
        </div>
        <div className="list">
          <ul>
            {dishes.map((dish) => (
              <li key={dish.id} style={{ listStyleType: "none" }}>
                {dish.title}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

function Footer({ year, developer }) {
  // This is a child component.
  return (
    <footer>
      <h4>Copyright {year}</h4>
      <h4>{developer}</h4>
    </footer>
  );
}

function App() {
  // This is the parent component.
  const [status, setStatus] = useState(true);
  console.log(status);
  return (
    <div>
      <Header name="Esther" />
      <Main dishes={dishObjects} />
      <h4>The restaurant is currently {status ? "Open" : "Closed"}.</h4>
      <div className="buttons">
        <button onClick={() => setStatus(!status)}>
          {status ? "Close" : "Open"} Restaurant
        </button>
      </div>

      <Footer year={new Date().getFullYear()} developer="Balazs Farago" />
    </div>
  );
}

export default App;
