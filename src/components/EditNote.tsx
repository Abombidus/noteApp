// import echantillon from "../components/echantillon";
// import Set from "./Set";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import "./editNote.css";
function EditNote() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          id="retour"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowAltCircleLeft className="sign" />
        </button>
      </div>
      <div>
        <input
          type="text"
          id="nomDeLaNote"
          style={{
            position: "relative",
            left: "2rem",
            top: "2rem",
          }}
          //   placeholder="   ajouter un nom a la note...✍"
        />
      </div>

      <div className="textAreaContainer">
        <input
          type="text"
          className="textArea"
          //   placeholder=" Ajouter une note..."
        />
      </div>

      <div className="editSave">
        <button id="editsaved">
          <FaSave />
        </button>
      </div>
    </>
  );
}

export default EditNote;
