// mock of the quiz between newQuiz > newQuestions
export const mockQuiz = {
    title: "a",
    description: "a",
}

// mock of the answers inside question[], inside quiz in the redux
export const mockAnswer = {
    value: "answer",
    correct: false
}

// mock of the question inside quiz, in the redux
export const mockQuestion = [{
    title: "question",
    answers: [mockAnswer,mockAnswer,mockAnswer,mockAnswer]
}]

// mock of question with empty values, to test VerifyBlankOptions function
export const mockBlankQuestion = [{
    title: "",
    answers: [{
        ...mockAnswer,
        value: ""
    }, mockAnswer, mockAnswer, mockAnswer]
}]