import React, { ComponentType, useState, useEffect } from "react";
import ButtonRotation from "../buttonRotation";
import SElectrikBoard from "./style";

const ElectrikBoard: ComponentType = () => {
  const board: string[] = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];

  return (
    <SElectrikBoard>
      {board.map((element, i) => {
        return (
          <section key={i}>
            <ButtonRotation />
            {i}
          </section>
        );
      })}
    </SElectrikBoard>
  );
};

export default ElectrikBoard;
