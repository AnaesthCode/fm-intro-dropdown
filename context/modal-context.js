import { createContext, useState } from "react";

const ModalContext = createContext({
  toggleModal: () => {},
  showModal: false,
});

const ModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const context = {
    toggleModal: toggleModal,
    showModal: showModal,
  };

  return (
    <ModalContext.Provider value={context}>
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
