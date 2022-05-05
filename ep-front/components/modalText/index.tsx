import React, { useState } from "react";
import SModalText from "../modalText/style";

interface ModalTextProps {
  text: string;
}
/**
 *  a component with a button, and when you click on it a text appear
 * @returns {React.ReactElement} a component with a button, and when you click on it a text appear
 */
const ModalText: React.ComponentType<ModalTextProps> = ({ text }) => {
  const [isActived, setIsActived] = useState<boolean>(false);

  /**
   * @returns {boolean} who display the modal or not
   */
  const textAppeared = () => {
    setIsActived(!isActived);
  };

  return (
    <SModalText>
      <button type="button" onClick={textAppeared}>
        Display text for test !
      </button>
      {isActived && (
        <div>
          <p>{text}</p>
        </div>
      )}
    </SModalText>
  );
};

export default ModalText;
