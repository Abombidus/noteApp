import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import "./home.css";

function Home() {
  const now = new Date();
  const hrs = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();
  const schema = `${hrs}:${mins}:${secs}`;
  return (
    <>
      <button id="btnAdd">Ajouter ➕</button>

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
              <div className="contenu">
                <h5>title</h5>
                <div className="timeDiv">
                  <p className="time">{schema}</p>
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum expedita deserunt, dolor accusamus sint maxime nihil
                  laborum, sed deleniti libero qui harum perspiciatis aut? Nam
                  sequi itaque dolore similique culpa?
                </div>
                {/* BOUTON OPTIONS */}
                <div className="btns">
                  <button id="deleteTaskBtn">
                    <MdAutoDelete />
                  </button>

                  <button id="editTaskBtn">
                    <FaEdit />
                  </button>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
