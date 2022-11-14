export const TAMBAH = "TAMBAH";
export const HAPUS = "HAPUS";
export const COMPLETE = "COMPLETE";
export const TRUEONLY = "TRUEONLY";

export function tambah(kegiatan) {
  return {
    type: TAMBAH,
    payload: { value: kegiatan, isComplete: false },
  };
}

export function hapusTodo(index) {
  return {
    type: HAPUS,
    index,
  };
}
export function tambahComplete(index) {
  return {
    type: COMPLETE,
    index,
    isComplete: false,
  };
}
export function filterComplete() {
  return {
    type: TRUEONLY,
  };
}
