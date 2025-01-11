'use client';

import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

export interface OnboardingFormData {
  phoneOrEmail: string;
  fullName: string;
  username: string;
  phoneNumber: string;
  email: string;
  storeName: string;
  storeTagline: string;
  storePhone: string;
  storeEmail: string;
  category: string;
  storeLogo: File | null;
}

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<OnboardingFormData>({
    phoneOrEmail: '',
    fullName: '',
    username: '',
    phoneNumber: '',
    email: '',
    storeName: '',
    storeTagline: '',
    storePhone: '',
    storeEmail: '',
    category: '',
    storeLogo: null,
  });

  const saveToLocalStorage = () => {
    localStorage.setItem('onboardingData', JSON.stringify(formData));
    alert('Data saved to localStorage!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            data={formData}
            updateData={(data: Partial<OnboardingFormData>) =>
              setFormData({ ...formData, ...data })
            }
            nextStep={() => setCurrentStep(2)}
          />
        );
      case 2:
        return (
          <Step2
            data={formData}
            updateData={(data: Partial<OnboardingFormData>) =>
              setFormData({ ...formData, ...data })
            }
            nextStep={() => setCurrentStep(3)}
           
          />
        );
      case 3:
        return (
          <Step3
            data={formData}
            updateData={(data: Partial<OnboardingFormData>) =>
              setFormData({ ...formData, ...data })
            }
           
            saveData={saveToLocalStorage}
          />
        );
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="p-4 bg-white shadow-md flex items-center gap-2">
        {currentStep > 1 && (
          <IoIosArrowBack
            className="cursor-pointer text-2xl text-black"
            onClick={() => setCurrentStep(currentStep - 1)}
          />
        )}
        <h1 className="text-lg font-bold text-black">Get Started</h1>
      </header>
      
        <div
          className="absolute top-0 left-0 h-2 bg-[#8A226F] transition-all duration-500"
          style={{ width: `${(currentStep / 3) * 100}%` }}
        ></div>
      {/* Main Content */}
      <main className="flex-grow">{renderStep()} 
        
      </main>

      
    </div>
  );
};

export default OnboardingPage;
