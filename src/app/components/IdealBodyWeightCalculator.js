"use client";
import { useState } from "react";

export default function IBWCalculator() {
  const [height, setHeight] = useState("65");
  const [gender, setGender] = useState("male");
  const [ibw, setIbw] = useState(null);

  const calculateIBW = () => {
    const h = parseFloat(height);
    if (!h || h < 48) {
      setIbw("Please enter height (in inches) >= 48");
      return;
    }

    let result;
    if (gender === "male") {
      result = 50 + 2.3 * (h - 60);
    } else {
      result = 45.5 + 2.3 * (h - 60);
    }

    setIbw(`${result.toFixed(2)} kg`);
  };

  return (
    <div>
      <h1 className="text-3xl text-slate-500 text-center pb-6">IBW Calculator</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateIBW();
        }}
        className="bg-white border w-[90%] mx-auto flex flex-col items-start justify-center gap-6 rounded-md shadow-xl p-8 max-w-[600px]"
      >
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
          Calculate IBW
        </button>
      </form>

      {ibw && (
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
                <td className="py-3 pl-2 font-semibold text-primary text-left">Ideal Body Weight</td>
                <td className="py-3">{ibw}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
