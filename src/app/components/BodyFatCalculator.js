"use client";
import { useState } from "react";

export default function BodyFatCalculator() {
  const [gender, setGender] = useState("male");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [height, setHeight] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState(null);

  const calculateBodyFat = () => {
    const h = parseFloat(height);
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const hp = parseFloat(hip);

    if (gender === "male") {
      if (!h || !w || !n) return;
      const bodyFat =
        86.010 * Math.log10(w - n) - 70.041 * Math.log10(h) + 36.76;
      setResult(bodyFat.toFixed(2) + "%");
    } else {
      if (!h || !w || !n || !hp) return;
      const bodyFat =
        163.205 * Math.log10(w + hp - n) -
        97.684 * Math.log10(h) -
        78.387;
      setResult(bodyFat.toFixed(2) + "%");
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-slate-500 text-center pb-6">Body Fat % Calculator</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateBodyFat();
        }}
        className="bg-white border w-[90%] mx-auto flex flex-col items-start justify-center gap-6 rounded-md shadow-xl p-8 max-w-[600px]"
      >
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

        <label className="font-semibold">
          Height (in):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="ml-2 font-mono w-[80px] text-center focus:bg-highlights bg-highlights/80 py-1 rounded-full"
          />
        </label>

        <label className="font-semibold">
          Neck (in):
          <input
            type="number"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            className="ml-2 font-mono w-[80px] text-center focus:bg-highlights bg-highlights/80 py-1 rounded-full"
          />
        </label>

        <label className="font-semibold">
          Waist (in):
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            className="ml-2 font-mono w-[80px] text-center focus:bg-highlights bg-highlights/80 py-1 rounded-full"
          />
        </label>

        {gender === "female" && (
          <label className="font-semibold">
            Hip (in):
            <input
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              className="ml-2 font-mono w-[80px] text-center focus:bg-highlights bg-highlights/80 py-1 rounded-full"
            />
          </label>
        )}

        <button
          type="submit"
          className="bg-primary p-4 rounded-full shadow-xl text-white text-center hover:bg-primary/80 hover:translate-y-1 px-8"
        >
          Calculate Body Fat %
        </button>
      </form>

      {result && (
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
                <td className="py-3 pl-2 font-semibold text-primary text-left">Body Fat %</td>
                <td className="py-3">{result}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
