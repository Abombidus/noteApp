import NewNote from "../src/components/newNote/NewNote";
import Home from "../src/components/home/Home";
// import { Navigation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/newNote" element={<NewNote />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
