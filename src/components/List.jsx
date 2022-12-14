import "../components/List.css";
import { hapusTodo } from "./redux/action/todoAction";
import { tambahComplete } from "./redux/action/todoAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function List() {
  const data = useSelector((state) => state);
  console.log(data.kegiatan);
  const allData = data.kegiatan;

  const dispatch = useDispatch();
  const handleClick = (index) => {
    dispatch(hapusTodo(index));
  };
  const handleComplete = (index) => {
    console.log("ini complete");
    dispatch(tambahComplete(index));
  };
  return (
    <div>
      {allData.map((el, index) => (
        <div key={index} className="componentList">
          <button>
            <i className="fa fa-circle-o" onClick={() => handleComplete(index)}></i>
          </button>
          <div className="act">
            <h3>{el.value}</h3>
          </div>
          <button>
            <i className="fa fa-edit"></i>
          </button>
          <button onClick={() => handleClick(index)}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
