// used to verify the empty input's and return an error if it's not filled, need:
// questions: the currrent state of the questions;
export default function verifyBlankOptions(questions) {
    let canCreate = true;
    questions = questions.map(question => {
        return {
            title: (() => {
                if(!question.title.error && question.title.trim() === "") {
                    canCreate = false;
                    return { error: "not filled" }
                }
                return question.title
            })(),
            answers: question.answers.map(answer => {
                return {
                    ...answer,
                    value: (() => {
                        if(!answer.value.error && answer.value.trim() === "") {
                            canCreate = false;
                            return { error: "not filled" }
                        }
                        return answer.value 
                    })()
                }
            })
        }
    })
    return {
        canCreate,
        questions
    }
}