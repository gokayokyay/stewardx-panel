import { useStore } from "effector-react"
import { useEffect, useState } from "react";
import { ModalStore } from "../stores/ModalStore"
import ConditionalRenderer from "./ConditionalRenderer";
import './Modal.css';

export default function Modal() {
  const { text, title, buttons: Buttons, isVisible } = useStore(ModalStore);
  const [isModalVisible, setModalVisible] = useState(isVisible);
  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        setModalVisible(false);
      }, 300);
    } else {
      setModalVisible(true);
    }
  }, [isVisible]);
  console.log(Buttons);
  return (
    <ConditionalRenderer condition={isModalVisible}>
      <div className={`absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-black text-white ${isVisible ? 'modal-in' : 'modal-out'}`}>
        <div className={`flex flex-col border-2 border-white modal-content ${isVisible ? 'modal-content-in' : 'modal-content-out'}`}>
          <ConditionalRenderer condition={title}>
            <div className="p-4 text-2xl align-center justify-center flex">
              {title}
            </div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={text}>
            <div className="p-4">
              {text}
            </div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={Buttons}>
            {Buttons}
          </ConditionalRenderer>
        </div>
      </div>
    </ConditionalRenderer>
  )
}