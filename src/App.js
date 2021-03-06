import { Routes, Route } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import ImportantTasks from "./pages/ImportantTasks";
import Layout from "./components/layout/Layout";
import SideBar from "./components/Sidebar/SideBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import TodoForm from "./components/tasks/TodoForm";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const todos = useSelector((state) => state.todo.todos)
    .slice()
    .reverse();

  const openModalHandler = () => {
    setModalOpen(true);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal onCloseModal={closeModalHandler}>
            <TodoForm onCloseModal={closeModalHandler} />
          </Modal>
        )}
      </AnimatePresence>
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
