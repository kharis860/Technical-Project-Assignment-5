import List from "./List";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tambah } from "./redux/action/todoAction";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TodoList() {
  const [kegiatan, setKegiatan] = useState();
  const dispatch = useDispatch();
  const tele = useNavigate();
  const data = useSelector((state) => state);
  const handleSubmit = (e) => {
    dispatch(tambah(kegiatan));
    console.log(kegiatan);
    e.preventDefault();
    setKegiatan("");
  };
  const handleChange = (e) => {
    setKegiatan(e.target.value);
  };
  const teleAll = () => {
    tele("/");
  };
  const teleActive = () => {
    tele("/Active");
  };
  const teleCompleted = () => {
    tele("/Completed");
  };

  return (
    <div className="todo">
      <header>
        <h1>Apa Rencana Anda Hari ini...?</h1>
      </header>
      <section>
        <div className="add">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tambahkan Kegiatan..." value={kegiatan} onChange={handleChange} />
            <button type="submit">Tambahkan</button>
          </form>
        </div>
        <div className="option">
          <button onClick={() => teleAll()}>All</button>
          <button onClick={() => teleActive()}>Active</button>
          <button onClick={() => teleCompleted()}>Completed</button>
          <hr />
        </div>
        <Outlet />
      </section>
    </div>
  );
}

export default TodoList;
