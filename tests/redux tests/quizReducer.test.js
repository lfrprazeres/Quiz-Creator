import reducer from '../../src/reducers/quizReducer';
import {
    CREATE_QUIZ,
    CREATE_QUESTIONS,
    DELETE_QUIZ
} from '../../src/actions';
import { mockQuiz, mockQuestion } from '../mocks';

let idCounter = 1;
let initialState = [];

describe('quiz reducer test', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle CREATE_QUIZ', () => {
        let onCreateQuiz = () => {
            let currentId = idCounter;
            idCounter++;
            return reducer(initialState, {
                type: CREATE_QUIZ,
                payload: {
                    ...mockQuiz,
                    id: currentId
                }
            })
        };
        initialState = [...initialState, ...onCreateQuiz()]
        expect(initialState).toEqual([{
            id: idCounter - 1,
            ...mockQuiz
        }])
    })

    it('should handle CREATE_QUESTIONS', () => {
        
        expect(reducer(initialState, {
            type: CREATE_QUESTIONS,
            payload: {
                id: 1,
                questions: mockQuestion
            }
        })).toEqual([{
            id: 1,
            title: mockQuiz.title,
            description: mockQuiz.description,
            questions: mockQuestion
        }])
    })

    it('should handle DELETE_QUIZ', () => {
        expect(reducer(initialState, {
            type: DELETE_QUIZ,
            payload: {
                indexQuizes: [0]
            }
        })).toEqual([])
    })
})