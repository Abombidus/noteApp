// import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import "./home.css";
import { useNavigate } from "react-router-dom";

const now = new Date();
const hrs = now.getHours();
const mins = now.getMinutes();
const secs = now.getSeconds();
const schema = `${hrs}:${mins}:${secs}`;
const voir = "voir plus";

const task = [
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
  },`,
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
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, ipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?`,
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
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, 
    .Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum expedita deserunt, dolor accusamus sint maximenihil laborum, sed deleniti libero qui harum perspiciatisaut? Nam sequi itaque dolore similique culpa?`,
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <button
        id="btnAdd"
        onClick={() => {
          navigate("/newNote");
        }}
      >
        Ajouter ➕
      </button>

      <div className="entete">
        <p>Dossier</p>

        <div className="search">
          <input
            className="searchBar"
            type="search"
            placeholder="🔍 Recherche....."
          />
        </div>
      </div>

      {/* Apres l'entete */}

      <div className="afterEntete">
        <hr />
        <div className="contents">
          <div className="boite">
            <fieldset>
              <legend>Liste de note</legend>

              {task.map(({ id, date, title, text }) => {
                return (
                  <>
                    <div className="contenu" key={id}>
                      <h5>{title}</h5>
                      <div className="timeDiv">
                        <p className="time">{date}</p>
                      </div>
                      <div className="text">
                        {text.length > 300
                          ? text.substring(0, 300) +
                            `
                          ......${voir}`
                          : text}
                      </div>
                      {/* BOUTON OPTIONS */}
                      <div className="btns">
                        <button id="deleteTaskBtn">
                          <MdAutoDelete />
                        </button>

                        <button
                          id="editTaskBtn"
                          onClick={() => {
                            navigate(`/editNote`);
                          }}
                        >
                          <FaEdit />
                        </button>
                      </div>
                    </div>
                    <hr className="separation" />
                  </>
                );
              })}
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
