import React, { useState } from "react";
import SCaptionModal from "./style";

interface CaptionModalProps {
  title: string;
  image: string;
  altImage: string;
  author: string;
  date: string;
}
/**
 *  a component with a button, and when you click on it a text appear
 * @returns {React.ReactElement} a component with a button, and when you click on it a text appear
 */
const CaptionModal: React.ComponentType<CaptionModalProps> = ({
  title,
  author,
  date,
  image,
  altImage,
}) => {
  const [isActived, setIsActived] = useState<boolean>(false);

  /**
   * @returns {boolean} who display the modal or not
   */
  const textAppeared = () => {
    setIsActived(!isActived);
  };

  return (
    <SCaptionModal>
      <button type="button" onClick={textAppeared}>
        <img src={image} alt={altImage} />
      </button>
      {isActived && (
        <div>
          <p>
            {title}
            <br />
            {author}, {date}
          </p>
        </div>
      )}
    </SCaptionModal>
  );
};

export default CaptionModal;
