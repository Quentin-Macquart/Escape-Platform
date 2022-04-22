import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

const GameId: NextPage = () => {
  return (
    <>
      <h1>This is step one !</h1>
      <Link href="/games/id/step1">Start</Link>
    </>
  );
};

export default GameId;
