// traverse dom 
var startButton = $('#btn btn-primary');
var blankPage = $('#reset');

var questions = [
    {
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
   
];


// funtion to reset to a blank canvas 
function makePageBlank(){

}

function displayQuestion(){
// dynamically display questions

}

function setResults(){

}

function getResults(){

}

// function that starts a timer and displays on the page
function quizTimerStart(){

}

// funtion for a wrong answer
function wrongAnswer(){
// deducted time from timer
}

function correctAnswer(){
// add points to count 
}
// start of the quiz
function startQuiz(){
makePageBlank()
quizTimerStart()
displayQuestion()



}



startButton.on("click", startQuiz);