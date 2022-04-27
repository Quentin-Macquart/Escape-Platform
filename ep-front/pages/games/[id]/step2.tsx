import type { NextPage } from "next";
import Link from "next/link";
import ModalText from "../../../components/modalText";
import React from "react";
import CaptionModal from "../../../components/captionModal";

const Step2: NextPage = () => {
  return (
    <>
      <h1>This is step two !</h1>
      <Link href="/games/id/step3">Next step</Link>
      <Link href="/games/id/step1">Previous step</Link>
      <ModalText text="Vous avez recuperé une perle." />
      <CaptionModal
        title="La jeune fille à la perle"
        author="Johannes Vermeer"
        date="1665"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1200px-1665_Girl_with_a_Pearl_Earring.jpg"
        altImage="peinture, jeune fille à la perle"
      />
    </>
  );
};

export default Step2;
