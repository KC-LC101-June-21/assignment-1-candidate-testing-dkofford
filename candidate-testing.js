const input = require('readline-sync');

/// define all questions 
let name 
let question = "1) Who was the first American woman in space? ";
let question2 = "2)True or False: 5 Kilometes == 5000 meters?";
let question3 = "3)(5 + 3)/2 * 10 = ?";
let question4 = "4)Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?  ";
let question5 = "5)What is the minimum crew size for the ISS? ";

///define all correct ansewers 
let correctAnswer = 'Sally Ride';
let correctAnswer2 = 'true';
let correctAnswer3 = '40' ;
let correctAnswer4 = 'Trajectory';
let correctAnswer5 = '3';

//Define all Arrays 

let questionarray = [question,question2,question3,question4,question5]
let correctanswerarray = [correctAnswer,correctAnswer2,correctAnswer3,correctAnswer4 ,correctAnswer5]
let question4array = [8, 'Orbit', 'Trajectory', 45]
let ansewerarray = []
let x = 0 


/// ask for the name 
    name = input.question("enter your name:")
    console.log("Candidate Name: " + name);

//// ask all questions in a loop 

 for(let i = 0 ; i < questionarray.length ; i++){
  let answer = input.question(questionarray[i])
  ansewerarray.push(answer)
  console.log("Candidate Ansewer: " + answer)
  console.log( "Correct Ansewer :" + correctanswerarray[i])
  console.log(" ")
if ( ansewerarray[i] == correctanswerarray[i]){
    x = x + 1 
  }
}

///// Grade quiz and give feedback 

  console.log(">>> Overall Grade: " + ((x/5)*100) + "% (" + x + " of 5 responses correct) <<<" )

if ( x >= 4 ){ 
  console.log(">>> Status: PASSED <<<")
} else{
  console.log(">>> Status: FAILED <<<")
}





function askForName() {
 
 
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