import "./newNote.css";
import { useState } from "react";

const NewNote = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <h3>Nouvelle note</h3>
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

      <div className="textAreaContainer">
        <input
          type="text"
          className="textArea"
          placeholder=" Ajouter une note..."
        />
      </div>
    </>
  );
};
export default NewNote;
