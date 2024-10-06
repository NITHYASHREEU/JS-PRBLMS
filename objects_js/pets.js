let securityQuestions = [
  {
    question: "What was your first pet's name?",
    expectedAnswer: "FlufferNutter"
    },
    {
      question: "What was the model year of your first car?",
      expectedAnswer: "1985"
    },
    {
      question: "What city were you born in?",
      expectedAnswer: "NYC"
    }
];

function chksecurityQuestions(securityQuestions, question, answer) {
  const secQuestion = securityQuestions.find(q => q.question === question);
  if (secQuestion && secQuestion.expectedAnswer === answer) {
    return true;
  } else {
    return false;
  }
}
// Test case 1:
let ques1 = "What was your first pet's name?";
let ans1  =  "FlufferNutter";
let status1 = chksecurityQuestions(securityQuestions, ques1, ans1);
console.log(status1); 
  
//Test case 2:
let ques2 = "What was your first pet's name?";
let ans2  =  "DufferNutter";
let status2 = chksecurityQuestions(securityQuestions, ques2, ans2);
console.log(status2); 
  