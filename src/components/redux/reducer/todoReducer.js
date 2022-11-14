import { TAMBAH, HAPUS, COMPLETE } from "../action/todoAction";

const initialState = {
  kegiatan: [
    {
      value: "belanja ke pasar",
      isComplete: false,
    },
    {
      value: "menyelesaikan tugas",
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
      const status = state.kegiatan.map((todoComplete, index) => {
        if (index === action.index) {
          return {
            ...todoComplete,
            isComplete: true,
          };
        } else {
          return todoComplete;
        }
      });
      return {
        kegiatan: status,
      };
    default:
      return state;
  }
}
export default todoReducer;
