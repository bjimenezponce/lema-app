"use client";

import { useState } from "react";
import SignUpModal from "../signup/SignUpModal";
import { Button } from "@material-tailwind/react";
import SignUpEmail from "../signup/SignUpEmail";
import SignUpRegister from "../signup/SignUpResgister";

const SignUpForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-3/5 mx-auto p-4">
          <Button
            onClick={openModal}
            className=" w-80 sm:max-w-sm md:max-w-md px-4 lg:max-w-lg
            shadow-indigo-300 rounded-lg transition duration-300 mx-auto mt-8 max-w-screen-lg lg:w-1/2"
            id="register"
          >
            Regístrate
          </Button>
        </div>
      </div>
      <SignUpModal isOpen={modalIsOpen} onClose={closeModal}>
        <SignUpRegister />
        <SignUpEmail />
      </SignUpModal>
    </>
  );
};
export default SignUpForm;
