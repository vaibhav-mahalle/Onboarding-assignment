import React from 'react';
import { CustomInput } from '../components/CustomInput';


export const InitialDetails = () => {
  return (
    <div>
      <h1>Welcome! First things first...</h1>
      <p>You can always change them later.</p>

      <CustomInput placeholderName={"Steve Jobs"} labelName={"Full Name"} />
    </div>
  )
}
