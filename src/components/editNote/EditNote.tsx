import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import "./editNote.css";

function EditNote({ infos, setInfos }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const note = infos.find((item) => {
    item.id == id;
  });
  // const [title, setTitle] = useState(note.title);
  // const [text, setText] = useState(note.text);
  // console.log(note);

  function saveTask() {
    navigate("/");
  }
  return (
    <>
      <div className="one">
        <button
          id="retour"
        >
          <FaArrowAltCircleLeft className="sign" />
        </button>
      </div>

      <div className="editSave">
        <button id="editsaved" onClick={saveTask}>
          <FaSave />
        </button>
      </div>

      <h3>Editer la note</h3>

      <div className="two">
        <input
          type="text"
          id="nomDeLaNote"
        />

        <button id="btnOk">✔</button>
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
