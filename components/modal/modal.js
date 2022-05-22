import c from "./modal.module.css";
import ArrowDown from "../icons/arrow-down";
import ArrowUp from "../icons/arrow-up";
import Image from "next/image";
import Company from "../dropdowns/company";
import Features from "../dropdowns/features";
import ReactDOM from "react-dom";
import { ModalContext } from "../../context/modal-context";
import { useContext, useState } from "react";
import { useTransition, animated } from "react-spring";

const Modal = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const modalCtx = useContext(ModalContext);

  const transition = useTransition(modalCtx.showModal, {
    from: { opacity: 0, x: -30 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, x: -10 },
  });

  const showFeaturesHandler = () => {
    setShowFeatures((prevValue) => !prevValue);
  };

  const showCompanyHandler = () => {
    setShowCompany((prevValue) => !prevValue);
  };

  return transition(
    (style, item) =>
      item && (
        <animated.div style={style}>
          {ReactDOM.createPortal(
            <>
              <div onClick={modalCtx.toggleModal} className={c.overlay}></div>
              <div className={c.modal}>
                <div onClick={modalCtx.toggleModal}>
                  <Image
                    src="/images/icon-close-menu.svg"
                    width={30}
                    height={30}
                  />
                </div>

                <ul>
                  <li onClick={showFeaturesHandler}>
                    Features
                    <span>{showFeatures ? <ArrowUp /> : <ArrowDown />}</span>
                  </li>

                  {showFeatures && (
                    <div className={c.modalFeatures}>
                      <Features active={showFeatures} />
                    </div>
                  )}

                  <li onClick={showCompanyHandler}>
                    Company
                    <span>
                      <span>{showCompany ? <ArrowUp /> : <ArrowDown />}</span>
                    </span>
                  </li>
                  {showCompany && (
                    <div className={c.modalCompany}>
                      <Company active={showCompany} />
                    </div>
                  )}

                  <li>Careers</li>
                  <li>About</li>
                </ul>
                <button>Login</button>
                <button>Register</button>
              </div>
            </>,
            document.getElementById("modal")
          )}
        </animated.div>
      )
  );
};

export default Modal;
