"use client";
import { useState } from "react";

export default function BMRCalculator() {
  const [weight, setWeight] = useState("150");
  const [height, setHeight] = useState("65");
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState(null);
  const [error, setError] = useState(null);

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) {
      setError("Please enter valid values.");
      setBmr(null);
      return;
    }

    let result;
    if (gender === "male") {
      result = 66 + 6.23 * w + 12.7 * h - 6.8 * a;
    } else {
      result = 655 + 4.35 * w + 4.7 * h - 4.7 * a;
    }

    setBmr(result.toFixed(2));
    setError(null);
  };

  return (
    <div>
      <h1 className="text-3xl text-slate-500 text-center pb-6">BMR Calculator</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateBMR();
        }}
        className="bg-white border w-[90%] mx-auto flex flex-col items-start justify-center gap-6 rounded-md shadow-xl p-8 max-w-[600px]"
      >
        <label className="font-semibold">
          Weight (lbs):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="text-xl ml-2 font-mono w-[80px] text-center focus:bg-highlights bg-highlights/80 py-1 rounded-full"
          />
        </label>

        <label className="font-semibold">
          Height (in):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="text-xl ml-2 font-mono w-[80px] text-center focus:bg-highlights bg-highlights/80 py-1 rounded-full"
          />
        </label>

        <label className="font-semibold">
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="text-xl ml-2 font-mono w-[80px] text-center focus:bg-highlights bg-highlights/80 py-1 rounded-full"
          />
        </label>

        <label className="font-semibold">
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="ml-2 p-1 rounded-full bg-highlights/80"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-primary p-4 rounded-full shadow-xl text-white text-center hover:bg-primary/80 hover:translate-y-1 px-8"
        >
          Calculate BMR
        </button>
      </form>

      {error && <p className="text-red-500 text-center mt-4 font-semibold">{error}</p>}

      {bmr && (
        <div className="bg-white border w-[90%] max-w-[600px] mx-auto rounded-md shadow-xl p-6 my-12">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b-2 border-b-highlights">
                <th className="py-3 pl-2 text-left">Parameter</th>
                <th className="py-3">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-primary/20">
                <td className="py-3 pl-2 font-semibold text-primary text-left">BMR</td>
                <td className="py-3">{bmr} calories/day</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
