// @ts-check
import { planteamientoPregunta } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

    


/**
 * 
 * @param {Quiz} quiz is the quiz objet
 * @param {UI} ui the ui objet
 */

const renderPage = (quiz, ui)=> {
  
   if (quiz.isEnded()) {
     ui.showScores(quiz.score)
   }else{
    ui.showQuestion(quiz.getQuestionIndex().question)
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice)=> {
        quiz.quess(currentChoice);
        renderPage(quiz, ui)
       
    })
    ui.showProgress(quiz.questionIndex + 1, quiz.questionss.length)
   }
}


function main() {
    const quiz = new Quiz(planteamientoPregunta)
    const ui = new UI()
 

 renderPage(quiz, ui)
}

main()
