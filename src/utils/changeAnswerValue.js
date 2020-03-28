// used to change the value of an answer, need: 
// questions: the currrent state of the questions;
// questionId: the id of the question that I need to change the answer value;
// answerId: the id of the answer that I need to change the value
// value: the value of the answer
export default function changeAnswerValue(questions, questionId, answerId, value) {
    return questions.map((question, questionIndex) => {
        if(questionIndex === questionId) {
            return {
                ...question,
                answers: question.answers.map((answer, answerIndex) => {
                    if(answerIndex === answerId) {
                        return {
                            ...answer,
                            value
                        }
                    }
                    return answer;
                })
            }
        }
        return question
    })
}