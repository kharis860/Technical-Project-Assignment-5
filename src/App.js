import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { Routes, Route } from "react-router-dom";
import AllPage from "./components/AllPage";
import CompletedPage from "./components/CompletedPage";
import ActivePage from "./components/ActivePage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<TodoList />}>
            <Route path="/" element={<AllPage />} />
            <Route path="Active" element={<ActivePage />} />
            <Route path="Completed" element={<CompletedPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
