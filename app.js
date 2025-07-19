const questions = [
  {
    id: 1,
    subject: "Physics",
    question: "A ball is thrown up with 20 m/s. What is its max height?",
    options: ["10m", "15m", "20m", "25m"],
    correct: 2
  },
  {
    id: 2,
    subject: "Chemistry",
    question: "Which gas is produced when zinc reacts with hydrochloric acid?",
    options: ["O₂", "H₂", "Cl₂", "CO₂"],
    correct: 1
  }
];

const container = document.getElementById("question-list");
questions.forEach((q) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${q.subject}</h3>
    <p>${q.question}</p>
    <ul>
      ${q.options.map(opt => `<li>${opt}</li>`).join("")}
    </ul>
  `;
  container.appendChild(card);
});


Create app.js with question list logic
