// import Set from "../Set";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// const now = new Date();
// const hrs = now.getHours();
// const mins = now.getMinutes();
// const secs = now.getSeconds();
// const schema = `${hrs}:${mins}:${secs}`;
const voir = "voir plus";

function Home({ infos }) {
  // const [note, setNote] = useState([
  //   {
  //     id: 1,
  //     titre: "BienVenue Developpeur JavaScript",
  //     text: "Hello MERN developer technologies with stack Mongo,Express,React,Node",
  //     date: `${schema}`,
  //   },
  // ]);
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
            // value={filtre}
            className="searchBar"
            type="search"
            placeholder=" Recherche....."
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

              {infos.map(({ id, title, date, text }) => {
                return (
                  <div>
                    <div className="contenu" key={id}>
                      <h5>{title}</h5>
                      <div className="timeDiv">
                        <p className="time">{date}</p>
                      </div>
                      <div className="text">{text}</div>
                      {/* BOUTON OPTIONS */}
                      <div className="btns">
                        <button id="deleteTaskBtn">
                          <MdAutoDelete />
                        </button>

                        <button
                          id="editTaskBtn"
                          onClick={() => {
                            navigate(`/editNote/:id`);
                          }}
                        >
                          <FaEdit />
                        </button>
                      </div>
                    </div>
                    <hr className="separation" />
                  </div>
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
