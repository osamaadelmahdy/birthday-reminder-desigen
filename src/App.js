import { useState } from "react";
import "./app.css";
import List from "./list";
import data from "./data";

export default function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <div className="container">
      <div className="list">
        <div style={{ padding: "30px 50px 0" }}>
          <h1>{people.length} birthdays today</h1>
        </div>
        <div style={{ overflow: "auto" }}>
          <List people={people} />
        </div>

        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </div>
  );
}
