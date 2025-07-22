"use client";
import { useState } from "react";

const BodyFatCalculator = () => {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = () => {
    const h = parseFloat(height);
    const n = parseFloat(neck);
    const w = parseFloat(waist);
    const hp = parseFloat(hip);

    if (!h || !n || !w || (gender === "female" && !hp)) return;

    let bf = 0;
    if (gender === "male") {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.221 * Math.log10(h)) - 450;
    }

    setBodyFat(bf.toFixed(1));
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 max-w-xl mx-auto w-[90%] my-10">
      <h2 className="text-2xl font-bold text-primary text-center mb-4">
        Body Fat Percentage
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlights"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlights"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Neck (cm)</label>
          <input
            type="number"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlights"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Waist (cm)</label>
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlights"
          />
        </div>
        {gender === "female" && (
          <div>
            <label className="block font-semibold text-gray-700">Hip (cm)</label>
            <input
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              className="w-full p-2 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlights"
            />
          </div>
        )}
        <button
          onClick={calculateBodyFat}
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition"
        >
          Calculate Body Fat %
        </button>
      </div>

      {bodyFat && (
        <div className="mt-6 text-center bg-highlights/10 p-4 rounded">
          <p className="text-xl font-semibold text-primary">
            Body Fat: {bodyFat}%
          </p>
        </div>
      )}
    </div>
  );
};

export default BodyFatCalculator;


