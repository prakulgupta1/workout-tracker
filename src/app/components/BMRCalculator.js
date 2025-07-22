import { useState } from "react";

function BMRCalculator() {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [bmr, setBMR] = useState(null);

  const calculateBMR = () => {
    let result;
    if (gender === "male") {
      result = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
      result = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }
    setBMR(result.toFixed(2));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-100 text-slate-800">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        BMR Calculator
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateBMR();
        }}
        className="bg-white max-w-xl mx-auto p-8 rounded-xl shadow-xl space-y-6"
      >
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Gender</label>
          <select
            className="p-2 rounded-md bg-highlights/30 focus:outline-none"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Age (years)</label>
          <input
            type="number"
            className="p-2 rounded-md bg-highlights/30 focus:outline-none text-center"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Height (cm)</label>
          <input
            type="number"
            className="p-2 rounded-md bg-highlights/30 focus:outline-none text-center"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Weight (kg)</label>
          <input
            type="number"
            className="p-2 rounded-md bg-highlights/30 focus:outline-none text-center"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-all mt-4 shadow-md"
        >
          Calculate BMR
        </button>
      </form>

      {bmr && (
        <div className="mt-10 max-w-xl mx-auto bg-white p-6 rounded-xl shadow-xl text-center">
          <h2 className="text-xl font-semibold text-primary">Your BMR</h2>
          <p className="text-3xl font-bold text-secondary mt-2">{bmr} kcal/day</p>
        </div>
      )}
    </div>
  );
}

export default BMRCalculator;
