import type { NextPage } from "next";
import Link from "next/link";
import FinalBoard from "../../../components/finalBoard";
import React from "react";

const Step4: NextPage = () => {
  return (
    <>
      <Link href="/games/id/step3">Previous step</Link>
      <h1>Last step !</h1>
      <FinalBoard />
    </>
  );
};

export default Step4;
