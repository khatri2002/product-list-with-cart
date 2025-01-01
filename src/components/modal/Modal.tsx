import classNames from "classnames";
import { ModalProps } from "../../types";
import styles from "./Modal.module.scss";

const Modal = ({ open }: ModalProps) => {
  return (
    <div
      className={classNames({ [styles.container]: true, [styles.open]: open })}
    ></div>
  );
};

export default Modal;
