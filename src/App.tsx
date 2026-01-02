import NewNote from "./components/newNote/NewNote";
import Home from "./components/home/Home";
import EditNote from "./components/editNote/EditNote";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
// import { js } from "@eslint/js";
// import Set from "./components/Set";

// const notes = require("./components/echantillon");

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const hrs = now.getHours();
const mins = now.getMinutes();
const secs = now.getSeconds();
const schema: string = `${day}/${month + 1}/${year} (${hrs}h:${mins}:${secs})`;

function App() {
  const [infos, setInfos] = useState<any>(
    JSON.parse(localStorage.getItem("note") || "[]") || [
      {
        id: 1,
        title: "One",
        date: `${schema}`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Nostrum expedita deserunt, dolor accusamus sint maxime nihil laborum.
Sed deleniti libero qui harum perspiciatis aut? Nam sequi itaque dolore similique culpa?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita deserunt, dolor accusamus sint maxime nihil laborum.`,
      },

      {
        id: 2,
        title: "Two",
        date: `${schema}`,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
      },

      {
        id: 3,
        title: "Three",
        date: `${schema}`,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
      },
      {
        id: 4,
        title: "Four",
        date: `${schema}`,
        text: ` Lorem ipsum dolor sit amet consectetur ad.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,`,
      },
      {
        id: 5,
        title: "Five",
        date: `${schema}`,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
      },
      {
        id: 6,
        title: "Six",
        date: `${schema}`,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
      },
      {
        id: 7,
        title: "Seven",
        date: `${schema}`,
        text: `.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laboru`,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(infos));
  }, [infos]);
  return (
    <main id="app">
      <HashRouter>
        <Routes>
          <Route path="/newNote" element={<NewNote setInfos={setInfos} />} />
          <Route path="/" element={<Home infos={infos} />} />
          <Route
            path="/editNote/:id"
            element={<EditNote infos={infos} setInfos={setInfos} />}
          />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;
