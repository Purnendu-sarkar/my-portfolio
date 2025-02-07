import { Route, Routes } from "react-router";
import Root from "./Layout/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ProjectDetails from "./Pages/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
        <Route path="/education" element={<Education></Education>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route
          path="//projects/:id"
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
