import NewNote from "../src/components/newNote/NewNote";
import Home from "../src/components/home/Home";
import EditNote from "./components/editNote/EditNote";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import { js } from "@eslint/js";
// import Set from "./components/Set";

// const notes = require("./components/echantillon");

const now :string= new Date();
const year:string = now.getFullYear();
const month:string = now.getMonth();
const day:string = now.getDay();
const hrs:string = now.getHours();
const mins:string = now.getMinutes();
const secs:string = now.getSeconds();
const schema :string= `${day}/${month}/${year} (${hrs}h:${mins}:${secs})`;

function App() {
  const [infos, setInfos] = useState(
    JSON.parse(localStorage.getItem("note")) || [
      // {
      //   id: `${now}`,
      //   title: "One",
      //   date: `${schema}`,
      //   text: `Lorem ipsum
      //          .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
      //     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
      //     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
      //     .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
      //     .Nostrum expedita deserunt, do dolor sit amet consectetur adipisicing `,
      // },

      {
        id: 1,
        title: "One",
        date: `${schema}`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum,
    sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?",
  `,
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
    localStorage.setItem("note", JSON.parse(infos));
  }, [infos]);
  return (
    <main id="app">
      <Routes>
        <Route path="/newNote" element={<NewNote setInfos={setInfos} />} />
        <Route path="/" element={<Home infos={infos} />} />
        <Route
          path="/editNote/:id"
          element={<EditNote infos={infos} setInfos={setInfos} />}
        />
      </Routes>
    </main>
  );
}

export default App;
