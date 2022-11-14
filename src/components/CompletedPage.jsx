import { useSelector, useDispatch } from "react-redux";
import { hapusTodo, tambahComplete } from "./redux/action/todoAction";
import swal from "sweetalert";

function CompletedPage() {
  const data = useSelector((state) => state);
  const allData = data.kegiatan;
  const dispatch = useDispatch();
  const handleClick = (index) => {
    dispatch(hapusTodo(index));
  };
  const handleComplete = (index) => {
    dispatch(tambahComplete(index));
  };
  const handleError = () => {
    swal({ title: "I'm Sorry", text: "Button edit masih dalam tahap pengembangan :(", icon: "info", button: "Ok" });
  };
  return (
    <div className="list">
      <h1>Completed page</h1>
      {allData
        .filter((kegiatan) => kegiatan.isComplete === true)
        .map((el, index) => (
          <div key={index} className="componentList">
            {el.isComplete ? (
              <>
                <button>
                  <i className="fa fa-dot-circle-o" onClick={() => handleComplete(index)}></i>
                </button>
                <div className="act1">
                  <h3>{el.value}</h3>
                </div>
              </>
            ) : (
              <>
                <button>
                  <i className="fa fa-circle-o" onClick={() => handleComplete(index)}></i>
                </button>
                <div className="act">
                  <h3>{el.value}</h3>
                </div>
              </>
            )}
            <button>
              <i className="fa fa-edit" onClick={() => handleError()}></i>
            </button>
            <button onClick={() => handleClick(index)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
    </div>
  );
}

export default CompletedPage;
