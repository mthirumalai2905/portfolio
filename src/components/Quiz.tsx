import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import './Quiz.css'

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the output of typeof null?",
    options: ["null", "undefined", "object", "number"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Which method removes the last element from an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "What does the JavaScript 'this' keyword refer to?",
    options: ["Current function", "Global object", "Object calling the function", "None of the above"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Which of the following is not a JavaScript data type?",
    options: ["String", "Boolean", "Undefined", "Character"],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "What is the correct syntax to create a new object in JavaScript?",
    options: ["let obj = new Object()", "let obj = {};", "let obj = Object();", "All of the above"],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "///"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "Which method is used to join two or more arrays in JavaScript?",
    options: ["concat()", "join()", "combine()", "merge()"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "What is the result of 2 + '2' in JavaScript?",
    options: ["22", "4", "undefined", "NaN"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "Which of the following methods can be used to loop over an array in JavaScript?",
    options: ["forEach()", "for in", "map()", "All of the above"],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: "Which method is used to add one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "What is the default value of a JavaScript variable?",
    options: ["undefined", "null", "NaN", "false"],
    correctAnswer: 0,
  },
  {
    id: 12,
    question: "Which method returns the length of a string in JavaScript?",
    options: ["length()", "size()", "count()", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "What is the result of the expression '10' + 5 in JavaScript?",
    options: ["105", "15", "Error", "NaN"],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "Which of the following is used to create an empty array in JavaScript?",
    options: ["[]", "{}", "()", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "What does NaN stand for in JavaScript?",
    options: ["Not a Number", "Number", "NaN is undefined", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "Which of the following is the correct way to declare a JavaScript variable?",
    options: ["var x = 10;", "let x = 10;", "const x = 10;", "All of the above"],
    correctAnswer: 3,
  },
  {
    id: 17,
    question: "Which of the following is used to compare both value and type in JavaScript?",
    options: ["==", "===", ">", "<"],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: "Which function is used to parse a string into an integer in JavaScript?",
    options: ["parseInt()", "parseString()", "toInt()", "int()"],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: "Which of the following is true about JavaScript functions?",
    options: ["Functions are objects", "Functions are not objects", "Functions are primitive", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "What is the correct way to check if a variable is an array?",
    options: ["Array.isArray()", "instanceof Array", "typeof", "Both Array.isArray() and instanceof Array"],
    correctAnswer: 3,
  },
  {
    id: 21,
    question: "How do you add a new property to an object in JavaScript?",
    options: ["object.property = value", "object.add('property', value)", "object.push(property, value)", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: "What does the JavaScript 'split()' method do?",
    options: ["Splits a string into an array", "Splits a string into a number", "Splits an array into a string", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: "Which of the following is used to terminate a loop in JavaScript?",
    options: ["break", "continue", "exit", "stop"],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: ["'==' compares both value and type", "'===' compares only value", "'==' compares only value", "'===' compares both value and type"],
    correctAnswer: 3,
  },
  {
    id: 25,
    question: "Which of the following methods can be used to remove elements from an array?",
    options: ["splice()", "shift()", "pop()", "All of the above"],
    correctAnswer: 3,
  },
  {
    id: 26,
    question: "How do you define a function in JavaScript?",
    options: ["function myFunc() {}", "func myFunc() {}", "define myFunc() {}", "function: myFunc() {}"],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: "What is a closure in JavaScript?",
    options: ["A function that can access variables from its outer function", "A function that is invoked immediately", "A function that returns another function", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: "Which of the following is a falsy value in JavaScript?",
    options: ["0", "false", "null", "All of the above"],
    correctAnswer: 3,
  },
  {
    id: 29,
    question: "What is the purpose of the 'event.preventDefault()' method?",
    options: ["Stops event propagation", "Prevents the default behavior of an event", "Stops the page from refreshing", "None of the above"],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "Which method is used to find the index of an element in an array in JavaScript?",
    options: ["indexOf()", "findIndex()", "searchIndex()", "getIndex()"],
    correctAnswer: 0,
  },
  {
    id: 31,
    question: "How do you define a constant variable in JavaScript?",
    options: ["const", "let", "var", "constant"],
    correctAnswer: 0,
  },
  {
    id: 32,
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Node.js", "Vue.js", "All of the above"],
    correctAnswer: 3,
  },
  {
    id: 33,
    question: "Which of the following is the correct way to write a comment in JavaScript?",
    options: ["// comment", "/* comment */", "<!-- comment -->", "Both // comment and /* comment */"],
    correctAnswer: 3,
  },
  {
    id: 34,
    question: "What is the 'typeof' operator used for in JavaScript?",
    options: ["To check the type of a variable", "To check if a variable is an object", "To check if a variable is a function", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 35,
    question: "What does the 'map()' method do in JavaScript?",
    options: ["Creates a new array by applying a function to each element", "Sorts an array", "Adds elements to the end of an array", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 36,
    question: "Which of the following methods is used to join two or more strings in JavaScript?",
    options: ["concat()", "join()", "append()", "merge()"],
    correctAnswer: 0,
  },
  {
    id: 37,
    question: "What is the result of 3 === '3' in JavaScript?",
    options: ["true", "false", "NaN", "Error"],
    correctAnswer: 1,
  },
  {
    id: 38,
    question: "Which of the following is not a valid event type in JavaScript?",
    options: ["click", "submit", "hover", "focus"],
    correctAnswer: 2,
  },
  {
    id: 39,
    question: "What is the purpose of 'setTimeout()' in JavaScript?",
    options: ["Executes a function after a specified delay", "Executes a function immediately", "Executes a function repeatedly", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 40,
    question: "What is the purpose of 'console.log()' in JavaScript?",
    options: ["To print values to the console", "To execute a function", "To throw errors", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 41,
    question: "What is the correct way to declare a function that returns a value?",
    options: ["function myFunction() { return value; }", "function myFunction { return value; }", "function return myFunction(value);", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 42,
    question: "Which method is used to remove the first element of an array in JavaScript?",
    options: ["shift()", "unshift()", "pop()", "splice()"],
    correctAnswer: 0,
  },
  {
    id: 43,
    question: "What is the output of '5' + 3 in JavaScript?",
    options: ["53", "8", "Error", "NaN"],
    correctAnswer: 0,
  },
  {
    id: 44,
    question: "How do you check if a value is NaN in JavaScript?",
    options: ["isNaN()", "checkNaN()", "NaNCheck()", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 45,
    question: "Which of the following methods is used to add an element to the beginning of an array in JavaScript?",
    options: ["unshift()", "shift()", "push()", "pop()"],
    correctAnswer: 0,
  },
  {
    id: 46,
    question: "What is the output of 0/0 in JavaScript?",
    options: ["Infinity", "NaN", "undefined", "0"],
    correctAnswer: 1,
  },
  {
    id: 47,
    question: "Which of the following can be used to create a promise in JavaScript?",
    options: ["new Promise()", "Promise.resolve()", "Promise.reject()", "All of the above"],
    correctAnswer: 0,
  },
  {
    id: 48,
    question: "Which operator is used for exponentiation in JavaScript?",
    options: ["**", "^", "exp", "None of the above"],
    correctAnswer: 0,
  },
  {
    id: 49,
    question: "Which method is used to remove whitespace from both ends of a string in JavaScript?",
    options: ["trim()", "strip()", "slice()", "remove()"],
    correctAnswer: 0,
  },
  {
    id: 50,
    question: "Which of the following is a JavaScript primitive type?",
    options: ["Object", "Array", "String", "Function"],
    correctAnswer: 2,
  }
];


const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const isAnswerCorrect = (questionId: number) => {
    const question = questions.find((q) => q.id === questionId);
    return selectedAnswers[questionId] === question?.correctAnswer;
  };

  const getOptionClassName = (questionId: number, optionIndex: number) => {
    if (selectedAnswers[questionId] === undefined) return 'option';

    if (selectedAnswers[questionId] === optionIndex) {
      return `option ${isAnswerCorrect(questionId) ? 'correct' : 'incorrect'}`;
    }
    return 'option';
  };

  return (
    <div className="quiz-container">
      <div className="quiz-wrapper">
        {/* Questions Panel */}
        <div className="questions-panel">
          <h2 className="question-header">JavaScript Quiz</h2>

          {/* Render only the current question */}
          {questions.map(
            (q) =>
              q.id === currentQuestion && (
                <div key={q.id} className="mb-8">
                  <div className="text-lg font-semibold mb-4">
                    {q.id}. {q.question}
                  </div>
                  <div className="options-container">
                    {q.options.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => handleAnswerSelect(q.id, index)}
                        className={getOptionClassName(q.id, index)}
                      >
                        <span>{option}</span>
                        {selectedAnswers[q.id] === index && (
                          isAnswerCorrect(q.id) ? (
                            <Check className="icon text-green-500" />
                          ) : (
                            <X className="icon text-red-500" />
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>

        {/* Question Numbers Panel */}
        <div className="question-numbers-panel">
          <h3 className="question-numbers-header">Questions</h3>
          <div className="grid grid-cols-4 gap-2">
            {questions.map((q) => (
              <div
                key={q.id}
                onClick={() => setCurrentQuestion(q.id)}
                className={`question-number ${currentQuestion === q.id ? 'selected' : 'default'} ${
                  selectedAnswers[q.id] !== undefined
                    ? isAnswerCorrect(q.id)
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }`}
              >
                {q.id}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
