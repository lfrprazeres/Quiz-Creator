// used to change the correct answer, need: 
// questions: the currrent state of the questions;
// questionId: the id of the question that I need to change the answer value;
// answerId: the id of the answer that I need to change the value
// checked: if it's checked (correct answer) or not
export default function changeCorrectAnswer(questions, questionId, answerId, checked) {
    return questions.map((question, questionIndex) => {
        if(questionIndex === questionId) {
            return {
                ...question,
                answers: question.answers.map((answer, answerIndex) => {
                    if(answerIndex === answerId) {
                        return {
                            ...answer,
                            correct: checked
                        }
                    } else if(checked === true) {
                        return {
                            ...answer,
                            correct: !checked
                        }
                    } else {
                        return answer
                    }
                })
            }
        }
        return question
    })
}