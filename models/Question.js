

export class Question {

    /**
     * 
     * @param {string} question this is the text of question 
     * @param {string[]} choices this is a set of options 
     * @param {string} answer this is the answer 
     */


    constructor(question, choices, answer){
        this.question = question,
        this.choices = choices,
        this.answer = answer
    }



    /**
     * 
     * @param {choicesss} choicesss The choice selected
     * @returns {boolean} return  true  if the answer is correct
     */
    responseAnswer(choicesss){
        return choicesss === this.answer
    }
}



const bloque1 = new Question("Cuál es la respuesta", ["html", "css", "javascript"], "cd")

console.log(bloque1)
console.log(bloque1.responseAnswer("html"))




const bloque2 = new Question()
console.log(bloque2.responseAnswer())
 
