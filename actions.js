function calculateResult() {
    const answers = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      G: 0
    };
  
    // Loop through each question and collect selected answers
    for (let i = 1; i <= 5; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`);
      if (answer) {
        answers[answer.value]++;
      }
    }
  
    // Determine which answer has the most selections
    let result = Object.keys(answers).reduce((a, b) => (answers[a] > answers[b] ? a : b));
  
    // Text for each possible result
    const resultText = {
      A: "Congratulations, you’re Claudia! Creative, unique, and the artist of the group.",
      B: "You’re Kristy! Some people say you're bossy, but you're just a natural leader.",
      C: "You’re Mary Anne! Kind-hearted, thoughtful, and bookish. Voted most likely to own a cat.",
      D: "You’re Stacey! Confident, stylish, and always up for a challenge. Maybe a little boy crazy too?",
      E: "You’re Dawn! Friendly, caring, and a bit of a free spirit. You also like to make being from California your whole personality.",
      F: "I'm so sorry, but you're a Mallory too. You're imaginative, thoughtful, and probably a little bit awkward.",
      G: "You’re Jessi! Determined, focused, and you shine in the spotlight."
    };
  
    // Display the result to the user
    document.getElementById("result").innerHTML = `<h2>${resultText[result]}</h2>`;
  }
  