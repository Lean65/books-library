import { useState } from "react";

export const useModal = (initValue = false) => {
  const [isOpen, SetIsOpen] = useState(initValue);

  const OpenModal = () => SetIsOpen(true);

  const CloseModal = () => SetIsOpen(false);

  return { isOpen, OpenModal, CloseModal };
};
