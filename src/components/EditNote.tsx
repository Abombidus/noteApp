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
      <h3 className="textH3">Editer la note</h3>
      <div>
        <input
          type="text"
          id="nomDeLaNote"
          //   placeholder="   ajouter un nom a la note...✍"
        />
      </div>
      <div className="textAreaContainer">
        <textarea name="textArea" id="textArea" className="textArea"></textarea>
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
