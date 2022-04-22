import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Step4: NextPage = () => {
  return (
    <>
      <h1>Last step !</h1>
      <Link href="/games/id/step3">Previous step</Link>
    </>
  );
};

export default Step4;
