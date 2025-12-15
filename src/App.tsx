import NewNote from "../src/components/newNote/NewNote";
import Home from "../src/components/home/Home";
// import { Navigation } from "react-router-dom";
import EditNote from "./components/EditNote";
import { Routes, Route } from "react-router-dom";
// import { js } from "@eslint/js";
// import Set from "./components/Set";

// const now = new Date();
// const hrs = now.getHours();
// const mins = now.getMinutes();
// const secs = now.getSeconds();
// const schema = `${hrs}:${mins}:${secs}`;
// const voir = "voir plus";

function App() {
  return (
    <main id="app">
      {/* <Set /> */}
      {/* <EditNote /> */}
      <Routes>
        <Route path="/newNote" element={<NewNote />} />
        <Route path="/" element={<Home />} />
        <Route path="/editNote" element={<EditNote />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
