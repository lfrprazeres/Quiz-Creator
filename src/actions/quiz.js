import newId from '../utils/newId';

export const CREATE_QUIZ = "CREATE_QUIZ";

export function createQuiz(title, description) {
    const id = newId();
    localStorage.setItem("quizId", id);
    return {
        type: CREATE_QUIZ,
        payload: {
            title,
            description,
            id: parseInt(id)
        }
    }
};

export const CREATE_QUESTIONS = "CREATE_QUESTIONS";

export function createQuestions( questions ) {
    let id = localStorage.getItem("quizId");
    return {
        type: CREATE_QUESTIONS,
        payload: {
            id: parseInt(id),
            questions
        }
    }
};

export const DELETE_QUIZ = "DELETE_QUIZ";

export function onDeleteQuiz( indexQuizes ) {
    return {
        type: DELETE_QUIZ,
        payload: {
            indexQuizes
        }
    }
};