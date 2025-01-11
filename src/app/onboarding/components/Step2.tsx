'use client';

import { OnboardingFormData } from '../page'; // Import the interface

interface Step2Props {
  data: OnboardingFormData;
  updateData: (data: Partial<OnboardingFormData>) => void;
  nextStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ data, updateData, nextStep }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-black">Complete profile setup</h2>
      <p className="text-black mb-4">Connect your socials for quick setup</p>
      <div className="flex gap-4 mb-6">
        <button className="flex-1 text-black p-3 rounded">📷 Instagram</button>
        <button className="flex-1 text-black p-3 rounded">🎵 TikTok</button>
        <button className="flex-1 text-black p-3 rounded">🌐 Google</button>
      </div>
      <p className="text-black mb-4">Or enter manually</p>
      <div className="mt-4">
        <label className="block mb-2 text-black">Full Name</label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => updateData({ fullName: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter full name"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-black">Username</label>
        <input
          type="text"
          value={data.username}
          onChange={(e) => updateData({ username: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter username"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-black">Phone Number</label>
        <input
          type="text"
          value={data.phoneNumber}
          onChange={(e) => updateData({ phoneNumber: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter phone number"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-black">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter email"
        />
      </div>
      <div className="mt-4 flex justify-between">
       
        <button className="w-full bg-[#8A226F] text-white rounded-full px-6 py-3" onClick={nextStep}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step2;
