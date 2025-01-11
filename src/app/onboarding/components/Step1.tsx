'use client';

import { OnboardingFormData } from '../page'; // Import the interface

interface Step1Props {
  data: OnboardingFormData;
  updateData: (data: Partial<OnboardingFormData>) => void;
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ data, updateData, nextStep }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-black">Enter your phone number or email to get started</h2>
      <div className="mt-4">
        <label className="block mb-2 text-black">we will send you a verification code for confirmation</label>
        <input
          type="text"
          value={data.phoneOrEmail}
          onChange={(e) => updateData({ phoneOrEmail: e.target.value })}
          className="w-full border rounded p-2"
          placeholder='Enter phone number or email'
        />
      </div>
     
      <button className="w-full mt-6 bg-[#8A226F] text-white rounded-full px-6 py-3" onClick={nextStep}>
        Continue
      </button>
    </div>
  );
};

export default Step1;
