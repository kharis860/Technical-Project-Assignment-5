import { TAMBAH } from "../action/todoAction";
import { HAPUS } from "../action/todoAction";
import { COMPLETE } from "../action/todoAction";
import { TRUEONLY } from "../action/todoAction";

const initialState = {
  kegiatan: [
    {
      value: "tidur",
      isComplete: false,
    },
    {
      value: "makan",
      isComplete: true,
    },
  ],
};

function todoReducer(state = initialState, action) {
  console.log([...state.kegiatan]);
  state.kegiatan.map((item, index) => console.log(item));
  switch (action.type) {
    case TAMBAH:
      return {
        kegiatan: [...state.kegiatan, action.payload],
      };
    case HAPUS:
      const kegiatanv1 = state.kegiatan.filter((item, index) => index !== action.index);
      return {
        kegiatan: kegiatanv1,
      };
    case COMPLETE:
      const status = state.kegiatan.map((item, index) => {
        if (index === action.index) {
          // return console.log(index);
          // return [...state.kegiatan. state.kegiatan.isComplete: true];
        }
      });
      return {
        kegiatan: status,
      };
    case TRUEONLY:
      const completed = state.kegiatan.filter((item, index) => console.log(item));
      break;
    default:
      return state;
  }
}

export default todoReducer;
