
import { data } from "./data.js";
import { Question } from "../models/Question.js";




export const planteamientoPregunta = data.map(questions => new Question(questions.question, questions.choices, questions.answer))
 
