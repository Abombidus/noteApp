import "./newNote.css";
import { useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { FaArrowAltCircleLeft, FaFileImport } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewNote = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [titre, setTitre] = useState("");
  const [champ, setChamp] = useState("");

  function TakeNote() {
    // e.preventDeafault();

    console.log("titre:", titre);
    console.log("champ:", champ);
  }
  return (
    <>
      <div className="one">
        <button
          id="retour"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowAltCircleLeft className="sign" />
        </button>
      </div>

      <h3>Nouvelle note</h3>

      <div className="two">
        <input
          onFocus={() => setActive(true)}
          onBlur={() => {
            setActive(false);
          }}
          type="text"
          onChange={(e) => {
            setTitre(e.target.value);
          }}
          value={titre}
          id="nomDeLaNote"
          placeholder="  Nom de la note...✍"
        />

        <button
          id="btnOk"
          style={{
            background: active ? "var(--color-green)" : "var(--color-green2)",
          }}
        >
          ✔
        </button>
      </div>

      <div className="textAreaContainer">
        <textarea
          onChange={(e) => {
            setChamp(e.target.value);
          }}
          value={champ}
          name="textArea"
          className="textArea"
          id="textArea"
          placeholder="Ajouter une note..."
        ></textarea>
      </div>

      <div className="actions">
        <button id="import">
          <FaFileImport />
        </button>
        <button id="audio">
          <AiFillAudio />
        </button>
        <button id="saved" onClick={TakeNote}>
          <FaSave />
        </button>
      </div>
    </>
  );
};
export default NewNote;
