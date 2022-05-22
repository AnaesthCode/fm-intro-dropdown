import c from "./main-header.module.css";
import Image from "next/image";
import ArrowUp from "../icons/arrow-up";
import ArrowDown from "../icons/arrow-down";
import Features from "../dropdowns/features";
import Company from "../dropdowns/company";
import { useState, useContext } from "react";
import { ModalContext } from "../../context/modal-context";

const MainHeader = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const modalCtx = useContext(ModalContext);

  const toggleShowFeatures = () => {
    setShowFeatures((prevValue) => !prevValue);
  };

  const toggleShowCompany = () => {
    setShowCompany((prevValue) => !prevValue);
  };

  let activeFeatures = c.inactive;
  let activeCompany = c.inactive;

  if (showFeatures) {
    activeFeatures = c.active;
  }

  if (showCompany) {
    activeCompany = c.active;
  }

  console.log(modalCtx.showModal);

  return (
    <>
      <navbar className={c.navbar}>
        <div className={c.navlogoMobile}>
          <Image
            alt="snap-logo-mobile"
            src="/images/logo.svg"
            priority
            width={95}
            height={30}
          />
        </div>

        <div>
          <ul className={c.navlinks}>
            <li>
              <Image
                alt="snap-logo"
                src="/images/logo.svg"
                priority
                width={95}
                height={30}
              />
            </li>

            <li onClick={toggleShowFeatures}>
              Features
              <span>{showFeatures ? <ArrowUp /> : <ArrowDown />}</span>
            </li>

            <li onClick={toggleShowCompany}>
              Company
              <span>
                <span>{showCompany ? <ArrowUp /> : <ArrowDown />}</span>
              </span>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className={c.navbuttons}>
          <button>Login</button>
          <button>Register</button>
        </div>
        <div onClick={modalCtx.toggleModal} className={c.hamburgerMobile}>
          <Image
            alt="icon-menu"
            src="/images/icon-menu.svg"
            width={40}
            height={20}
          />
        </div>
      </navbar>
      <Features active={showFeatures} />
      <Company active={showCompany} />
    </>
  );
};

export default MainHeader;
