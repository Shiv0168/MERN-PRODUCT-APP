import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import View from "./components/View";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<View />} />
          <Route path="/edit/:_id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
