"use client";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import LoadingGif from "./LoadingGif";

const IdealBodyWeightCalculator = () => {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [ibw, setIbw] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateIBW = () => {
    setError(null);
    setLoading(true);

    const parsedHeight = parseFloat(height);
    if (isNaN(parsedHeight) || parsedHeight < 48) {
      setError("Please enter a valid height in inches (minimum 48 inches).");
      setIbw(null);
      setLoading(false);
      return;
    }

    let base = gender === "male" ? 50 : 45.5;
    let extra = parsedHeight > 60 ? (parsedHeight - 60) * 2.3 : 0;
    const result = (base + extra).toFixed(2);

    setIbw(result);
    setLoading(false);
  };

  return (
    <div className="py-16 px-4 min-h-screen bg-slate-100 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-10 text-center">
        Ideal Body Weight Calculator
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateIBW();
        }}
        className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full flex flex-col gap-6"
      >
        <div>
          <label className="block font-semibold mb-1">Gender:</label>
          <select
            className="w-full py-2 px-4 rounded-md border focus:outline-none bg-highlights/30 font-semibold"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Height (in inches):
          </label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full py-2 px-4 rounded-md border focus:outline-none font-mono text-center text-xl bg-highlights/30"
            placeholder="Enter height in inches"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-3 rounded-full font-semibold shadow-lg hover:bg-primary/80 hover:scale-105 transition-all"
        >
          Calculate Ideal Body Weight
        </button>
      </form>

      {loading && <LoadingGif />}
      {error && <ErrorMessage message={error} />}

      {ibw && (
        <div className="bg-white border mt-10 p-6 rounded-xl shadow-xl max-w-md w-full">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Result:
          </h2>
          <p className="text-lg text-gray-700">
            Your Ideal Body Weight is:{" "}
            <span className="font-bold text-primary">{ibw} kg</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default IdealBodyWeightCalculator;

