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
  // const hapusTodo = (index) => {
  //   console.log(index);
  // };
  console.log(data.kegiatan);

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
        {/* <div className="list"> */}
        {/* <List /> */}
        {/* {data.kegiatan.map((item, index) => (
          ))} */}
        {/* {data.kegiatan.map((item, index) => (
            // console.log(index)
            <List key={index} kegiatan={item.aktivitas} />
          ))} */}
        {/* {data.kegiatan.forEach((o) => {
            console.log(o);
            // <List key={index} kegiatan={o.aktivitas} />;
          })} */}
        {/* </div> */}
      </section>
    </div>
  );
}

export default TodoList;
