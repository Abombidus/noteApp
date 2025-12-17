import "./newNote.css";
import { useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { FaArrowAltCircleLeft, FaFileImport } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewNote = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");

  function TakeNote() {
    // e.preventDeafault();
    if (title && text) {
      const note = {
        id: navigate,
        title,
        text,
      };
      console.log(note);
    }

    // titre.value = "";
    // champ.value = "";
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
            setTitle(e.target.value);
          }}
          value={title}
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
            setText(e.target.value);
          }}
          value={text}
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
