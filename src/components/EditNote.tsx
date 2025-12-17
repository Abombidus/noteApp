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

                <div className="editSave">
        <button id="editsaved">
          <FaSave />
        </button>
      </div>
    
          <h3>Editer la note</h3>
    
          <div className="two">
            <input
              type="text"
              id="nomDeLaNote"
            />
    
            <button
              id="btnOk"
            >
              ✔
            </button>
          </div>
    
          <div className="textAreaContainer">
            <textarea
              name="textArea"
              className="textArea"
              id="textArea"
            ></textarea>
          </div>
    </>
  );
}

export default EditNote;
