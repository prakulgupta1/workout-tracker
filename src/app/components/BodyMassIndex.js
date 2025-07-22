import { useState } from "react";

function BodyMassIndex() {
  const [height, setHeight] = useState("65");
  const [weight, setWeight] = useState("150");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setError("Please enter valid height and weight.");
      setBmi(null);
      setStatus(null);
      return;
    }

    const bmiValue = (w * 703) / (h * h);
    setBmi(bmiValue.toFixed(2));
    setError(null);

    // Weight status based on BMI
    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue < 24.9) setStatus("Normal weight");
    else if (bmiValue < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div>
      <h1 className="text-3xl text-slate-500 text-center pb-6">
        BMI Calculator
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateBMI();
        }}
        className="bg-white border w-[90%] mx-auto 
          flex flex-col items-start justify-center gap-6
          rounded-md shadow-xl p-8 max-w-[600px]"
      >
        <label className="font-semibold">
          Height:
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="text-xl ml-2 mr-2 font-mono w-[80px] text-center
              focus:bg-highlights bg-highlights/80 py-1 rounded-full"
          />
          in
        </label>

        <label className="font-semibold">
          Weight:
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="text-xl ml-2 mr-2 font-mono w-[80px] text-center
              focus:bg-highlights bg-highlights/80 py-1 rounded-full"
          />
          lbs
        </label>

        <button
          type="submit"
          className="bg-primary p-4 rounded-full shadow-xl text-white text-center
            hover:bg-primary/80 hover:translate-y-1 px-8"
        >
          Calculate BMI
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-center mt-4 font-semibold">{error}</p>
      )}

      {bmi && (
        <div
          className="bg-white border w-[90%] max-w-[600px] mx-auto 
            rounded-md shadow-xl p-6 my-12"
        >
          <table className="w-full text-center ">
            <thead>
              <tr className="border-b-2 border-b-highlights">
                <th className="py-3 pl-2 text-left">Parameter</th>
                <th className="py-3">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-primary/20">
                <td className="py-3 pl-2 font-semibold text-primary text-left">
                  BMI
                </td>
                <td className="py-3">{bmi}</td>
              </tr>
              <tr>
                <td className="py-3 pl-2 font-semibold text-primary text-left">
                  Weight Status
                </td>
                <td className="py-3">{status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BodyMassIndex;
