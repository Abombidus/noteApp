import "./newNote.css";
import { useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { FaArrowAltCircleLeft, FaFileImport } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewNote = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  // const [task, setTask] = useState([]);
  // const [newTask, setNewTask] = useState("");

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

        <h3>Nouvelle note</h3>
      </div>

      <div className="two">
        <input
          onFocus={() => setActive(true)}
          onBlur={() => {
            setActive(false);
          }}
          type="text"
          id="nomDeLaNote"
          placeholder="   ajouter un nom a la note...✍"
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
        <input
          type="text"
          className="textArea"
          placeholder=" Ajouter une note..."
        />
      </div>
      <div className="actions">
        <button id="import">
          <FaFileImport />
        </button>
        <button id="audio">
          <AiFillAudio />
        </button>
        <button id="saved">
          <FaSave />
        </button>
      </div>
    </>
  );
};
export default NewNote;
