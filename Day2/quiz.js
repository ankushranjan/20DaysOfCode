const questions = [
    {
      text: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      text: "What is the tallest mammal?",
      options: ["Giraffe", "Elephant", "Gorilla", "Hippopotamus"],
      answer: "Giraffe"
    },
    {
      text: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Jupiter"
    }
  ];
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const submitBtn = document.getElementById("submit-btn");
  
  function renderQuiz() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.text;
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const optionEl = document.createElement("label");
      const radioBtn = document.createElement("input");
      radioBtn.type = "radio";
      radioBtn.name = "option";
      radioBtn.value = option;
      optionEl.appendChild(radioBtn);
      optionEl.appendChild(document.createTextNode(option));