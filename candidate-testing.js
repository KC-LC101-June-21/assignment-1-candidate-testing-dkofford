const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //fd

// TODO 1.1a: Define candidateName // 
let name = input.question("enter your name:")
console.log( "Candidate Name: " + name);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

/// define all questions 
let question = "1) Who was the first American woman in space? ";
let question2 = "2)True or False: 5 Kilometes == 5000 meters?";
let question3 = "(5 + 3)/2 * 10 = ?";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?  ";
let question5 = "What is the minimum crew size for the ISS? ";

///define all correct ansewers 
let correctAnswer = "Sally Ride";
let correctAnswer2 = "true";
let correctAnswer3 = 40 ;
let correctAnswer4 = "Trajectory";
let correctAnswer5 = "3";

//Define all Arrays 

let questionarray = [question,question2,question3,question4,question5]
let question4array = [8, 'Orbit', 'Trajectory', 45]
let ansewerarray = [answer1,answer2,answer3,answer4,answer5]




//let candidateAnswer = input.question(question);
////console.log("Your Answer :" + candidateAnswer);
///console.log( "Correct Ansewer :" + correctAnswer)


let questions;
let correctAnswers;
let candidateAnser; 

function askForName() {
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};