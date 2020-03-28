// used to add a new answer to an question, need:
// questions: the currrent state of the questions;
// questionId: the id of the question that I need a new answer;
// defaultAnswer: a mock of a answer to add  
export default function addNewAnswer(questions, questionId, defaultAnswer) {
    return questions.map((question, questionIndex) => {
        if(questionIndex === questionId) {
            return {
                ...question,
                answers: [
                    ...question.answers,
                    defaultAnswer
                ]
            }
        }
        return question
    })
}