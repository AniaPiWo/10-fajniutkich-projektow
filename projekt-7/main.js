const questionData = [
  ['Która planeta jest najbliżej Słońca?', ['Merkury', 'Wenus', 'Mars'], 0],
  [
    'Który pierwiastek chemiczny ma symbol "H"?',
    ['Hel', 'Hydrogen', 'Azot'],
    1,
  ],
  [
    'Który kraj jest największy pod względem ludności?',
    ['Chiny', 'Indie', 'Stany Zjednoczone'],
    0,
  ],
  [
    'Kto napisał powieść "Zbrodnia i kara"?',
    ['Fiodor Dostojewski', 'Lew Tołstoj', 'Gabriel García Márquez'],
    0,
  ],
  [
    'Ile kości składa się na ludzki szkielet dorosłego człowieka?',
    ['206', '250', '180'],
    0,
  ],
  [
    'Który pierwiastek chemiczny jest gazem szlachetnym?',
    ['Hel', 'Neon', 'Krypton'],
    1,
  ],
  [
    'Kto jest autorem obrazu "Mona Lisa"?',
    ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
    0,
  ],
  [
    'Które morze leży między Grecją a Turcją?',
    ['Morze Egejskie', 'Morze Adriatyckie', 'Morze Czarne'],
    0,
  ],
  [
    'Kto był pierwszym prezydentem Stanów Zjednoczonych?',
    ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln'],
    0,
  ],
  ['Ile stron ma trójkąt równoboczny?', ['3', '4', '5'], 0],
];

class Question {
  #title;
  #answers;
  #correctAnswer;

  constructor(title, answers, correctAnswer) {
    this.#title = title;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }

  get title() {
    return this.#title;
  }

  get answers() {
    return this.#answers;
  }

  get correctAnswer() {
    return this.#correctAnswer;
  }

  /*   set title(value) {
    this.#title = value;
  } */
}

class Quiz {
  #questions;
  #currentQuestionIndex;
  #score;
  #isGameOver;

  constructor(data) {
    this.#questions = data.map((question) => new Question(...question));
    this.#currentQuestionIndex = 0;
    this.#score = 0;
    this.#isGameOver = false;
  }

  displayQuestion() {
    const questionElement = document.querySelector('#question');
    const answersElement = document.querySelector('#answers');
    const currentQuestion = this.#questions[this.#currentQuestionIndex];

    questionElement.textContent = currentQuestion.title;

    answersElement.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
      const answerDiv = document.createElement('div');
      answerDiv.classList.add('answer-div');
      answerDiv.innerHTML = `
        <label>
          <input type="radio" name="answer" value="${index}">
          ${answer}
        </label>
      `;
      answersElement.appendChild(answerDiv);
    });
  }

  displayAlert(message, displayTime) {
    const alertBox = document.querySelector('#alert-box');
    alertBox.textContent = message;
    setTimeout(() => {
      alertBox.textContent = '';
    }, displayTime);
  }

  endGame() {
    const answersElement = document.querySelector('#answers');
    const questionElement = document.querySelector('#question');
    const nextButton = document.querySelector('#next');
    const restartButton = document.querySelector('#restart');
    this.#isGameOver = true;
    nextButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
    answersElement.innerHTML = '';
    questionElement.textContent = `Koniec quizu! Twój wynik to: ${
      this.#score
    }/${questionData.length}`;
    return;
  }

  restartGame() {
    this.#currentQuestionIndex = 0;
    this.#score = 0;
    this.#isGameOver = false;
    const nextButton = document.querySelector('#next');
    const restartButton = document.querySelector('#restart');
    nextButton.classList.remove('hidden');
    restartButton.classList.add('hidden');
    this.displayQuestion();
  }

  nextQuestion() {
    const selectedAnswer = document.querySelector(
      'input[name="answer"]:checked'
    );
    if (selectedAnswer == null) {
      this.displayAlert('Wybierz odpowiedź!', 2000);
      return;
    }
    const parsedSelectedAnswer = parseInt(selectedAnswer.value);
    const correctAnswer =
      this.#questions[this.#currentQuestionIndex].correctAnswer;

    if (selectedAnswer) {
      if (parsedSelectedAnswer === correctAnswer) {
        this.#score++;
        this.displayAlert('Poprawna odpowiedź! 🎉', 2000);
      } else {
        this.displayAlert('Niepoprawna odpowiedź! 😕', 2000);
      }
      this.#currentQuestionIndex++;
      if (this.#currentQuestionIndex < this.#questions.length) {
        this.displayQuestion();
      } else {
        this.endGame();
      }
    } else {
      this.displayAlert('Wybierz odpowiedź! 🎃', 2000);
      return;
    }
  }
}

const quiz = new Quiz(questionData);
quiz.displayQuestion();
