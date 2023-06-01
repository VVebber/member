const questions = [
  {
    question: "Что такое С#?",
    options: ["Операционная система","Язык программирования", "База данных", "Браузер"],
    answer: "Язык программирования"
  },
  {
    question: "Что означает ключевое слово \"сalass\" в C#?",
    options: ["Ключевое слово для определения пользовательского типа данных", "Ключевое слово для выполнения циклических операций", "Ключевое слово для работы с исключениями", "Ключевое слово для определения функций    "],
    answer: "Ключевое слово для определения пользовательского типа данных"
  },
  {
    question: "Как объявить переменную в C#?",
    options: ["var variableName;", "string variableName;", "int variableName;", " variableName = value;"],
    answer: "int variableName;"
  },
  {
    question: "Что такое \"массив\" в C#?",
    options: ["Структура данных, которая хранит коллекцию элементов одного типа", "Математическая операция", "Функция для преобразования типов данных", "Оператор для создания циклов"],
    answer: "Структура данных, которая хранит коллекцию элементов одного типа"
  }, 
  {
    question: "Структура данных, которая хранит коллекцию элементов одного типа",
    options: ["Место, где хранятся исходные коды программы", "Коллекция классов и типов, объединенных в одну логическую группу", "Оператор для выполнения условных операций", "Функция для создания новых объектов"],
    answer: "Коллекция классов и типов, объединенных в одну логическую группу"
  },
  {
    question: "Какой модификатор доступа используется по умолчанию для членов класса в C#?",
    options: ["public", "private", "protected", "internal"],
    answer: "private"
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitBtn = document.getElementById("submitBtn");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
  
    optionsElement.innerHTML = "";
    for (let option of question.options) {
      const label = document.createElement("label");
      const radioBtn = document.createElement("input");
      radioBtn.type = "radio";
      radioBtn.name = "option";
      radioBtn.value = option;
      label.appendChild(radioBtn);
      label.appendChild(document.createTextNode(option));
      optionsElement.appendChild(label);
      optionsElement.appendChild(document.createElement("br"));
    }
  }
  

function submitAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    resultElement.textContent = "Please select an option.";
    return;
  }

  const answer = selectedOption.value;
  const question = questions[currentQuestion];
  if (answer === question.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "";
  optionsElement.innerHTML = "";
  submitBtn.style.display = "none";
  resultElement.textContent = `Вашь счет: ${score}/${questions.length}`;
}

loadQuestion();

submitBtn.addEventListener("click", submitAnswer);
