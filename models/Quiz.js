import { Question } from "./Question.js"

export  class Quiz {

        questionIndex = 0
        score = 0

        /**
         * 
         * @param {Question[]} questionss  
         */
        constructor(questionss){
            this.questionss = questionss
        }


        /**
         * 
         * @returns {Question} the cuestion found
         */
        getQuestionIndex(){
            return this.questionss[this.questionIndex]
        }

        isEnded(){
            return this.questionss.length === this.questionIndex
        }

        /**
         * 
         * @param {string} answer some text 
         */
        quess(answer){
            console.log(answer)
            if (this.getQuestionIndex().responseAnswer(answer)) {
                this.score++
            }
            this.questionIndex++
        }
}