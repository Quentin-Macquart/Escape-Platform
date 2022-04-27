import type { NextPage } from "next";
import Link from "next/link";
import ModalText from "../../../components/modalText";
import React from "react";

const Step2: NextPage = () => {
  return (
    <>
      <h1>This is step two !</h1>
      <Link href="/games/id/step3">Next step</Link>
      <Link href="/games/id/step1">Previous step</Link>
      <ModalText text="Vous avez recuperé une perle." />
    </>
  );
};

export default Step2;
