"use client";
import { Button } from "@material-tailwind/react";
import { ReactNode, useState } from "react";
import Modal from "react-modal";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode[];
}

const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < children.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Sign Up"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div className=" flex justify-end">
        <Button onClick={onClose} className="w-15 px-1 py-1" type="submit">
          {" "}
          Cerrar{" "}
        </Button>
      </div>
      {children[currentPage]}
      <div className=" flex justify-center">
        {currentPage > 0 && (
          <Button onClick={prevPage} className="w-20 px-2 py-2">
            Anterior
          </Button>
        )}
        {currentPage < children.length - 1 && (
          <Button onClick={nextPage} className="w-20 px-2 py-2">
            {" "}
            Siguiente
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default SignUpModal;
