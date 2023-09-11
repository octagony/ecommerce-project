"use client";
import { onClose, onOpen } from "@/store/features/modalSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function SetupPage() {
  const { isOpen } = useAppSelector((store) => store.modalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isOpen) {
      dispatch(onOpen());
    }
  }, [dispatch, isOpen]);
  return <div className="p-4">Root Page</div>;
}
