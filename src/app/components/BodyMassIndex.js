"use client";
import { useState } from "react";

const BodyMassIndex = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w) return;

    const heightInMeters = h * 0.0254;
    const bmiValue = w / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue < 25) setStatus("Normal");
    else if (bmiValue < 30) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 max-w-xl mx-auto w-[90%] my-10">
      <h2 className="text-2xl font-bold text-primary text-center mb-4">
        Body Mass Index (BMI)
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Height (inches)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlights"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Weight (lbs)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlights"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition"
        >
          Calculate BMI
        </button>
      </div>

      {bmi && (
        <div className="mt-6 text-center bg-highlights/10 p-4 rounded">
          <p className="text-xl font-semibold text-primary">BMI: {bmi}</p>
          <p className="text-lg font-medium text-secondary">Status: {status}</p>
        </div>
      )}
    </div>
  );
};

export default BodyMassIndex;
