'use client';

import { OnboardingFormData } from '../page'; // Import the interface

interface Step3Props {
  data: OnboardingFormData;
  updateData: (data: Partial<OnboardingFormData>) => void;

  saveData: () => void;
}

const Step3: React.FC<Step3Props> = ({ data, updateData, saveData }) => {
  return (
    <div className="p-6 ">
       <h2 className="text-2xl font-bold mb-4 text-black">Create your store - confirm details</h2>
      <div className="mt-4">
        <label className="block mb-2 text-black">Upload store logo</label>
        <input
          type="file"
          onChange={(e) => updateData({ storeLogo: e.target.files?.[0] || null })}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-black">Store Name</label>
        <input
          type="text"
          value={data.storeName}
          onChange={(e) => updateData({ storeName: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter store name"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-black">Store Tag Name</label>
        <input
          type="text"
          value={data.storeTagline}
          onChange={(e) => updateData({ storeTagline: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter store tagline"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-black">Store Phone Number</label>
        <input
          type="text"
          value={data.storePhone}
          onChange={(e) => updateData({ storePhone: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter store phone number"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-black">Store Email</label>
        <input
          type="email"
          value={data.storeEmail}
          onChange={(e) => updateData({ storeEmail: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter store email"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-black">Category</label>
        <input
          type="text"
          value={data.category}
          onChange={(e) => updateData({ category: e.target.value })}
          className="w-full border rounded p-2"
          placeholder="Enter store category"
        />
      </div>
      <div className="mt-4 ">
        
        <button className="w-full bg-[#8A226F] text-white rounded-full px-6 py-3" onClick={saveData}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step3;
