import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
} as ModalState;

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onOpen: (store) => {
      store.isOpen = true;
    },
    onClose: (store) => {
      store.isOpen = false;
    },
  },
});

export const { onClose, onOpen } = modal.actions;
export default modal.reducer;
