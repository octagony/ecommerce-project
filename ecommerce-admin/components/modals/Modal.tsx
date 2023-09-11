"use client";

import { Modal } from "../ui/modal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { onClose } from "@/store/features/modalSlice";

export const StoreModal = () => {
  const { isOpen } = useAppSelector((store) => store.modalReducer);
  const dispatch = useAppDispatch();

  return (
    <Modal
      title="Create Store"
      description="Add a new store"
      isOpen={isOpen}
      onClose={() => dispatch(onClose())}
    >
      Redux Toolkit into project
    </Modal>
  );
};
