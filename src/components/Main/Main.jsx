import AddNewPerson from "../AddNewPerson/AddNewPerson";
import Nav from "../Nav/Nav";
import { Routes, Route } from "react-router-dom";
import "./Main.css";
import Info from "../Info/Info";

const Main = () => {
  return (
    <div className="main-content">
      <Nav />
      <Routes>
        <Route path="/" element={<AddNewPerson />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default Main;
