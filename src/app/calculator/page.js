"use client";

import React, { useState } from "react";
import Image from "next/image";
import BodyFatCalculator from "../components/BodyFatCalculator";
import BodyMassIndex from "../components/BodyMassIndex";
import BMRCalculator from "../components/BMRCalculator";
import IdealBodyWeightCalculator from "../components/IdealBodyWeightCalculator";

const calculators = [
  {
    key: "BodyFat",
    title: "Body Fat Calculator",
    imageSrc: "/assets/calculatorIcon3.png",
    component: BodyFatCalculator,
  },
  {
    key: "BodyMass",
    title: "BMI Calculator",
    imageSrc: "/assets/calculatorIcon1.png",
    component: BodyMassIndex,
  },
  {
    key: "BMR",
    title: "BMR Calculator",
    imageSrc: "/assets/calculatorIcon2.png",
    component: BMRCalculator,
  },
  {
    key: "IdealWeight",
    title: "Ideal Body Weight",
    imageSrc: "/assets/calculatorIcon4.png",
    component: IdealBodyWeightCalculator,
  },
];

const CalculatorTile = ({ title, imageSrc, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white/10 backdrop-blur-lg border border-white/20
      hover:bg-white/20 transition-all ease-in-out rounded-2xl p-6 
      flex flex-col items-center justify-center gap-3 
      w-full h-full text-white hover:-translate-y-1 shadow-xl"
  >
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-inner">
      <Image src={imageSrc} alt={title} width={40} height={40} />
    </div>
    <p className="text-sm text-center font-semibold tracking-wide">{title}</p>
  </button>
);

const Calculator = () => {
  const [active, setActive] = useState(null);
  const ActiveComponent = calculators.find(c => c.key === active)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-28 px-6 pb-12">
      {!active && (
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight text-white drop-shadow">
            Fitness Calculators
          </h1>
          <p className="text-lg text-slate-400 mb-10">
            Choose what you want to measure
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {calculators.map(({ key, title, imageSrc }) => (
              <CalculatorTile
                key={key}
                title={title}
                imageSrc={imageSrc}
                onClick={() => setActive(key)}
              />
            ))}
          </div>
        </div>
      )}

      {active && (
        <div className="relative animate-fade-in max-w-3xl mx-auto">
          <ActiveComponent />
        </div>
      )}

      {active && (
        <button
          onClick={() => setActive(null)}
          className="fixed top-24 left-6 md:left-12 z-10 bg-white/10 hover:bg-white/20 
          backdrop-blur-md p-3 rounded-full shadow-lg transition hover:scale-105"
          title="Go back"
        >
          <Image
            src="/assets/backArrow.png"
            alt="Back"
            width={32}
            height={32}
          />
        </button>
      )}
    </div>
  );
};

export default Calculator;

