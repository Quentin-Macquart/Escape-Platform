import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import ElectrikBoard from "../../../components/electrikBoard";

const Step1: NextPage = () => {
  return (
    <>
      <h1>This is step one !</h1>
      <Link href="/games/id/step2">Next step</Link>
      <ElectrikBoard />
    </>
  );
};

export default Step1;
