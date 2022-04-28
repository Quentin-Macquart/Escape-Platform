import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import WaterGage from '../../../components/waterGage';

const Step3: NextPage = () => {
  return (
    <>
      <h1>This is step three !</h1>
      <Link href="/games/id/step4">Next step</Link>
      <Link href="/games/id/step2">Previous step</Link>
      <WaterGage />
    </>
  );
};

export default Step3;
