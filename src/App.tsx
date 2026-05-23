import StudentList from "./Components/StudentList";
import AddStudent from "./Components/AddStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditStudent from "./Components/EditStudent";
import ViewStudent from "./Components/ViewStudent";

function App(){
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentList/>}></Route>
      <Route path="/add" element={<AddStudent/>}></Route>
      <Route path="/edit/:id" element={<EditStudent/>}></Route>
      <Route path="/view/:id" element={<ViewStudent/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;