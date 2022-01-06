import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");
//pull out children from the props because modal does not
//care what it renders
const Modal = ({ children }) => {
  //ref is container for state that you want to
  //survive past render cycles
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    //append the ref to the Dom
    modalRoot.appendChild(elRef.current);
    //removed ref from Dom; cleaned up effect
    //not every ref appended to Dom needs to be cleaned up
    return () => modalRoot.removeChild(elRef.current);
    //only want this to happen once, place empty arr
  }, []);
  //@dev createPort takes children as first ele, container as second
  //returns, children rendered unto ref div
  //ref div is apended to modal on mount via useEffect
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
