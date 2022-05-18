import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ModalText from '../../../components/modalText';
import CaptionModal from '../../../components/captionModal';
import Clock from '../../../components/clock';

const Step2: NextPage = () => {
  //----- will be moved to another component later, here for display -----
  const [recordedHour, setRecordedHour] = useState<number>(3);
  const [recordedMinute, setRecordedMinute] = useState<number>(4);
  const [isResolved, setIsResolved] = useState<boolean>(false);

  useEffect(() => {
    if (recordedHour === 5 && recordedMinute === 8) {
      setIsResolved(true);
    }
  }, [recordedHour, recordedMinute]);
  //----------------------------------------------------------------------

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
      <Clock
        defaultHour={9}
        defaultMinute={recordedMinute}
        modsNeedle="minute"
        needleState={setRecordedMinute}
        isResolved={isResolved}
        clockColor="silver"
      />
      <Clock
        defaultHour={recordedHour}
        defaultMinute={6}
        modsNeedle="hour"
        needleState={setRecordedHour}
        isResolved={isResolved}
        clockColor="gold"
      />
    </>
  );
};

export default Step2;
