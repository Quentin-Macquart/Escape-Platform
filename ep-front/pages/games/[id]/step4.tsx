import type { NextPage } from "next";
import Link from "next/link";
import FinalBoard from "../../../components/finalBoard";
import React, { useState, useEffect } from "react";
import { fetchData } from "../../../lib/features";

const Step4: NextPage = () => {
  const [dataTest, setDataTest] = useState<{ id: number; stepsNumber: number }>(
    { id: 0, stepsNumber: 0 }
  );

  useEffect(() => {
    fetchData(setDataTest, "http://localhost:8080/games", "One", 0);
  }, []);

  return (
    <>
      <Link href="/games/id/step3">Previous step</Link>
      <h1>Last step !</h1>
      <FinalBoard />
      <p>{dataTest.stepsNumber}</p>
      <p>{dataTest.id}</p>
    </>
  );
};

export default Step4;
