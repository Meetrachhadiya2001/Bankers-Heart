interface PlanFeature {
  feature: string;
}

export interface PricePlan {
  id: number;
  title: string;
  description: string;
  price: string;
  features: PlanFeature[];
}

export const pricePlans: PricePlan[] = [
  {
    id: 1,
    title: "Executive Health Check",
    description: "Complete body analysis for busy professionals.",
    price: "15,000",
    features: [
      { feature: "Complete Blood Count (CBC)" },
      { feature: "Liver Function Test (LFT)" },
      { feature: "Kidney Function Test (KFT)" },
      { feature: "ECG (Heart Screening)" },
      { feature: "Chest X-Ray" },
      { feature: "Diet Consultation" },
    ],
  },
  {
    id: 2,
    title: "Diabetes Screening",
    description: "Early detection and management of diabetes.",
    price: "5,000",
    features: [
      { feature: "Fasting Blood Sugar (FBS)" },
      { feature: "HbA1c Test (Sugar Levels)" },
      { feature: "Urine Routine & Microalbumin" },
      { feature: "Diabetic Retinopathy" },
      { feature: "Foot Examination" },
      { feature: "Endocrinologist Consultation" },
    ],
  },
  {
    id: 3,
    title: "Executive Health Check",
    description: "Focused heart health evaluation.",
    price: "8,000",
    features: [
      { feature: "ECG (Electrocardiogram)" },
      { feature: "2D Echo with Doppler" },
      { feature: "Lipid Profile (Cholesterol)" },
      { feature: "TMT (Stress Test)" },
      { feature: "Blood Pressure Monitoring" },
      { feature: "Cardiologist Consultation" },
    ],
  },
];
