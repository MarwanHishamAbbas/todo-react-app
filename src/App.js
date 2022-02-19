import { Routes, Route } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import ImportantTasks from "./pages/ImportantTasks";
import Layout from "./components/layout/Layout";
import SideBar from "./components/Sidebar/SideBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";

function App() {
  const todos = useSelector((state) => state.todo.todos);

  const [modalOpen, setModalOpen] = useState(false);
  const openModalHandler = () => {
    setModalOpen(true);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      {modalOpen && <Modal onCloseModal={closeModalHandler} />}
      <SideBar onOpenModal={openModalHandler} />
      <Routes>
        <Route path="/" element={<AllTasks todos={todos} />} />
        <Route path="/important" element={<ImportantTasks todos={todos} />} />
        <Route path="/completed" element={<CompletedTasks todos={todos} />} />
      </Routes>
    </Layout>
  );
}

export default App;
