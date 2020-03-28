import { CREATE_QUIZ, CREATE_QUESTIONS, DELETE_QUIZ} from '../actions'
const initialState = [];

// reducer to add all the quiz state
export default function quizReducer(state = initialState, { type, payload }) {
    switch(type) {
        case CREATE_QUIZ: 
            return [
                ...state,
                {
                    id: payload.id,
                    title: payload.title,
                    description: payload.description,
                }
            ]
        case CREATE_QUESTIONS:
            return state.map(quiz => {
                if(quiz.id === payload.id){
                    return {
                        ...quiz,
                        questions: payload.questions
                    }
                }
                return quiz;
            })
        case DELETE_QUIZ:
            // filter all the quizes that have the index inside the array of indexQuizes
            state = state.filter((quiz, index) => {
                return payload.indexQuizes.find(deletedQuizIndex => index === deletedQuizIndex) === undefined;
            })
            return state;
        default:
            return state;
    }
}