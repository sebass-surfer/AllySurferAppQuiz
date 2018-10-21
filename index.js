'use strict';


//// QUESTION DATABASE 
const STORE = [
  {
    question: 'What kind of foam is traditionally used to shape a surfboard?', 
    answer1: 'Poly (Polyurethane)',
    answer2: 'EPS (Expanded Polystyrene)',
    answer3: 'Fiberglass', 
    correctAnswer: 'Poly (Polyurethane)',
    img: './mediaAssets/polyImg.jpg',
    alt: 'foam',
  },
  {
    question: 'What type of board is most common on the World Surf League?', 
    answer1: 'Various versions of the classic shortboard',
    answer2: 'Longboards are the best',
    answer3: 'High performance hydrofoil boards', 
    correctAnswer: 'Various versions of the classic shortboard',
    img: './mediaAssets/shortBoard.jpg',
    alt: 'shortBoard',
  },
  {
    question: 'The purpose of a stringer is?', 
    answer1: 'For design',
    answer2: 'For balance',
    answer3: 'For structure and strength', 
    correctAnswer: 'For structure and strength',
    img: './mediaAssets/stringer.jpg',
    alt: 'stringer',
  },
  {
    question: 'What do you call the very front tip of a surfboard?', 
    answer1: 'Top',
    answer2: 'Tip',
    answer3: 'Nose', 
    correctAnswer: 'Nose',
    img: './mediaAssets/nose.jpg',
    alt: 'nose',
  },
  {
    question: 'What is the very back part of a surfboard called?', 
    answer1: 'Tail',
    answer2: 'Rear',
    answer3: 'Back', 
    correctAnswer: 'Tail',
    img: './mediaAssets/tail.jpg',
    alt: 'surfBoardTail',
  },
  {
    question: 'A rip current is?', 
    answer1: 'The face of the wave',
    answer2: 'Long current moving out',
    answer3: 'Short current moving in', 
    correctAnswer: 'Long current moving out',
    img: './mediaAssets/ripCurrent.jpg',
    alt: 'ripCurrent',
  },
  {
    question: 'What is a common surfer term when riding inside the barrel?', 
    answer1: 'Getting shacked',
    answer2: 'Cowabunga dude',
    answer3: 'Getting gnarly', 
    correctAnswer: 'Getting shacked',
    img: './mediaAssets/barrel.jpg',
    alt: 'barrelImg',
  },
  {
    question: 'Which way do you paddle to best avoid a surfer coming at you on a wave?', 
    answer1: 'Toward the beach',
    answer2: 'Away from the shoulder',
    answer3: 'Toward the white wash', 
    correctAnswer: 'Toward the white wash',
    img: './mediaAssets/paddleOut.jpg',
    alt: 'whiteWash',
  },
  {
    question: 'Where was surfing invented?', 
    answer1: 'Australia',
    answer2: 'Hawaii',
    answer3: 'California', 
    correctAnswer: 'Hawaii',
    img: './mediaAssets/hawaii.jpg',
    alt: 'hawaiiImg',
  },
  {
    question: 'What do you call a little ripper?', 
    answer1: 'Grom',
    answer2: 'Kook',
    answer3: 'Shaka', 
    correctAnswer: 'Grom',
    img:'./mediaAssets/grom.jpg',
    alt: 'gromSurfer',
  },
];

//QUESTION GENERATOR
//variables for questionNumber score 
//make generated question dynamic by pulling from datastroe

// checked="checked"
function generateQuestions() {
  return `<div class="questionsForm">
  <img class="questionIllustration" src="${STORE[questionNumber].img}" alt="${STORE[questionNumber].atl}" />
    <h2 class="questionUpdater" for="questions">${STORE[questionNumber].question}</h2>
    <legend class="questionNumHeader">Question #${questionNumber+1}</legend>
  <form>
    
    <fieldset class="questionList">

      <input type="radio" id="userOption" name="option"   required value="${STORE[questionNumber].answer1}">
      <label for="userOption">${STORE[questionNumber].answer1}</label>
      <br>
      <input type="radio" id="userOption2" name="option"  value="${STORE[questionNumber].answer2}">
      <label for="userOption2">${STORE[questionNumber].answer2}</label>
      <br>
      <input type="radio" id="userOption3" name="option"  value="${STORE[questionNumber].answer3}">
      <label for="userOption3" >${STORE[questionNumber].answer3}</label>
      <br>
    </fieldset>  
    <button type="submit" class="submitButton">Submit</button>
  </form>

  </div>`;
}

//// START QUIZ 
////  event listener for start quiz button
function startQuiz() {
  let startQuizBtn = '<button class="startBtn">Start Quiz</button>';
    $('.myQuiz').html(startQuizBtn);
}

function handleStartQuiz(){  
  $('.myQuiz').on('click', '.startBtn', function(event) {
    $(this).hide();  
    $('.myQuiz').html(generateQuestions());
    $('.hide-container').hide();

    let headerSection = `    
      <div class="progressBar" role="progressBar">
        <ul class="porgressStyle">
          <li>Question: <span class="questionNumber">0</span>/10</li>
          <li>Correct: <span class="scoreKeeper">0</span></li>
          <li>Incorrect: <span class="numWrong">0</span></li>
        </ul>
      </div>`;
      $('.showOnStart').html(headerSection);

    updateHeader();


  });
}

//// RESTART QUIZ
//// event listener for restart button clicked
function handleRestartQuiz() {
  $('.myQuiz').on('click', '.restartButton', function(event) {
    $(this).hide();
    questionNumber = 0;
    numWrong = 0;
    score = 0;
    updateHeader();
    startQuiz();
    
    $('.showOnStart').html(`<h2 class="subHeading "role="subHeading">10 QUESTIONS TO TEST YOUR SURF KNOWLEDGE!</h2>`);
    
    $('.hide-container').show(); 

 });
}

//////////////////
//// ANSWER CLICKED
///// listener for user submit
function handleAnswerClicked() {
  $('.myQuiz').on('submit', function(event){
   event.preventDefault();

      if (questionNumber < STORE.length){

        let selected = $("input[name='option']:checked");
        if (STORE[questionNumber].correctAnswer == selected.val()) {
        
        changeCorrectScore();
        changeQuestionNum();
        renderPositiveFeedback();
        } else {
          
          changeIncorectScore();
          changeQuestionNum();
          renderNegativeFeedback();
        }
      }
  });
}

//// NEXT QUESTION
//// handle next question after response
function handleNextBtn() {
  $('.myQuiz').on('click', '.nextBtn', function(event) {
    if (questionNumber < STORE.length) { 
     $('.myQuiz').html(generateQuestions());
    } 
    
    // else if(questionNumber == STORE.length) {
    //   $('').html()
    // } 
    
    else {
      renderQuizSummary();

      handleRestartQuiz();  
      }
      updateHeader();
  });
}

//// SCRORE AND QUESTION # UPDATER SECTION
let score = 0;
let numWrong = 0;
let questionNumber = 0;

function changeCorrectScore(){
  score++;
}

function changeIncorectScore() {
  numWrong++;
}

function changeQuestionNum() {
    questionNumber++;
};

//// HEADER UPDATER
////    updates score and questionNumber
function updateHeader() {
  $('.scoreKeeper').text(score);
  $('.numWrong').text(numWrong);
  if (questionNumber < STORE.length)
    // Don't display anything above 10 
    $('.questionNumber').text(questionNumber+1);
}

//// PAGE UPDATER 
////   render positive feedback
function renderPositiveFeedback() {
  let userAnswered = `${STORE[questionNumber-1].correctAnswer}`;
  let positiveFeedback = `
  <img class='iconFeedback' src='./mediaAssets/Artboard3correct.png' alt='postiveIcon'/>
  <h2 class='feedbackHeader correct'>Radical dude!</h2> 
  <h3 class='answerPicked'>You picked: ${userAnswered}!</h3>
  <h3 class='subText'>Let's go to the next one!</h3>
  <br> 
  <button class="nextBtn">Next</button>`;
  $('.myQuiz').html(positiveFeedback);
}

//// PAGE UPDATER
////   render negative feedback
function renderNegativeFeedback() {
  let currentQuestion = `${STORE[questionNumber-1].question}`;

  if (numWrong <= 5){
    let correction = `${STORE[questionNumber-1].correctAnswer}`;
    let negativeFeedback = `
    <img class='iconFeedback' src='./mediaAssets/Artboard3wrong.png' alt='negativeIcon'/>
    <h2 class='feedbackHeader wrong'>Bummer dude!</h2> 
    <h3 class='feedbackHeader wrong'>You got it wrong but you can still pass! <br> Let's review:</h3>
    <h3 class='feedbackHeader'>${currentQuestion}</h3>
    <p class='answerPicked'>The correct answer is: <span class"answerHighlight">${correction}!</span></p>
    <br> 
    <button class="nextBtn">Next</button>`;
    $('.myQuiz').html(negativeFeedback);
       
  } else if (numWrong > 5) {
      let correction = `${STORE[questionNumber-1].correctAnswer}`;
      let negativeFeedback = `
      <img class='iconFeedback' src='./mediaAssets/Artboard3wrong.png' alt='negativeIcon'/>
      <h2 class='feedbackHeader wrong'>Sorry dude! Wrong answer...</h2> 
      <h3 class='feedbackHeader wrong'>Let's review:</h3>
      <h3 class='feedbackHeader wrong'>${currentQuestion}</h3>
      <p class='answerPicked'>The correct answer is: <span class"answerHighlight">${correction}!</span></p>
      <br> 

      <h4 class='feedbackHeader wrong'>You can keep going or restart now because at this rate you are going to wipe out fast!</h4>
      <button class="nextBtn">Next</button>
      <br>
      <button type="submit" class="restartButton">Restart Quiz</button>`;
      $('.myQuiz').html(negativeFeedback);

  };
}


//// QUESTION PAGE SUMMARY


//// QUIZ SUMMARY
function renderQuizSummary() {
  // this will be last screen with restart button  
  let proSurfer = 10;
  let surfer = 9;
  let kook = 5;

  if (questionNumber = STORE.length) {
    if (score == proSurfer) {
    proSurferSummary();
    } else if (score == surfer && numWrong <= 1) {
    surferSummary();
    } else if (numWrong >= kook) {
    justAKook();    
    } else {
      justAKook();
      //myRestartQuiz();
    };
  } else {
    handleRestartQuiz();
  };
};

function myRestartQuiz() {
  let restartBtn = `<button type="submit" class="restartButton">Restart quiz</button>`;
  $('.myQuiz').html(restartBtn);

}

function proSurferSummary() {
  let restartBtn = `
  <h2 class="surferCongrats">Congratulations!</h2>
  <h3 class="surferScore" >You got a perfect score of ${score} correct which means...</h3>
  <h3 class="pass">You're a PRO in and out of the water!</h3>

  <p>You are a professional surfer! See you in the water and make sure you are sharing waves and sending good vibes out there!</p>

  <button type="submit" class="restartButton">Restart Quiz</button>`;
  $('.myQuiz').html(restartBtn);

};

function surferSummary () {
  let restartBtn = `
  <h2 class="surferCongrats">Congratulations!</h2>
  <h3 class="surferScore" >You got ${score} correct which means...</h3>
  <h3 class="pass">You Passed!</h3>

  <p>You are a great surfer! See you in the water and make sure you are sharing good vibes out there!</p>

  <button type="submit" class="restartButton">Restart Quiz</button>`;
  $('.myQuiz').html(restartBtn);

};

function justAKook() {
  let restartBtn = `
  <h2 class="justAKook">TRY AGAIN!!!</h2>
  <h3 class="kookScore" >You got a total of ${numWrong} wrong which means...</h3> 
  <h2 class="fail">You didn't pass...</h2>

  <p>You're on your way to become a great surfer! Keep surfing and graduate from kook by making sure you know these fundamentals!</p>

  <button type="submit" class="restartButton">Restart Quiz</button>`;
  $('.myQuiz').html(restartBtn);
};



/////////////////////////
//// JQUERY LISTENER
//// Load document on ready
function handleQuizApp() {
  handleStartQuiz();
  handleAnswerClicked();
  handleRestartQuiz();
  handleNextBtn();
};

$(handleQuizApp);
