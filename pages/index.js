import HeroRemoteWork from "../components/hero/hero-remote-work";
import HeroImage from "../components/hero/hero-image";
import Modal from "../components/modal/modal";
import { ModalContext } from "../context/modal-context";
import { useContext } from "react";
export default function Home() {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      {modalCtx.showModal && <Modal />}
      <HeroRemoteWork />
      <HeroImage />
    </>
  );
}
