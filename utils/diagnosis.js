// utils/diagnosis.js

const factorMap = {
  CP: [1, 2, 3, 4],
  NP: [5, 6, 7, 8],
  A:  [9, 10, 11, 12],
  FC: [13, 14, 15, 16],
  AC: [17, 18, 19, 20],
};

function scoreToGrade(score) {
  if (score >= 4.0) return "A";
  if (score >= 2.5) return "B";
  return "C";
}

export function calculateDiagnosisCode(answers) {
  const factors = Object.keys(factorMap);
  let code = "";

  for (const factor of factors) {
    const ids = factorMap[factor];
    const scores = ids.map(id => answers[id - 1]);
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    code += scoreToGrade(average);
  }

  return code;
}

export function getWorkstyleFit(grades) {
  return {
    freelance: ["A", "B"].includes(grades.FC),
    haken: grades.AC === "A" && ["A", "B"].includes(grades.CP),
    tenshoku: grades.A === "A" && ["A", "B"].includes(grades.CP),
    fukugyo: grades.NP === "A" && ["A", "B"].includes(grades.FC),
  };
}
