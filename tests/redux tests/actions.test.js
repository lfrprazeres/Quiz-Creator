import * as actions from '../../src/actions';
import { 
    mockQuiz,
    mockQuestion
} from '../mocks';

describe('create quiz action', () => {
    it('Should create an quiz', () => {
        const expectedResponse = {
            type: actions.CREATE_QUIZ,
            payload: {
                ...mockQuiz,
                id: 1
            },
        };
        expect(actions.createQuiz(mockQuiz.title, mockQuiz.description)).toEqual(expectedResponse)
    })
});

describe('create quiz questions', () => {
    it('Should create questions for a quiz', () => {
        const expectedResponse = {
            type: actions.CREATE_QUESTIONS,
            payload: {
                id: 1,
                questions: mockQuestion
            }
        }
        expect(actions.createQuestions(mockQuestion)).toEqual(expectedResponse);
    })

    it('Should create several questions for a quiz', () => {
        const expectedResponse = {
            type: actions.CREATE_QUESTIONS,
            payload: {
                id: 1,
                questions: [mockQuestion, mockQuestion, mockQuestion]
            }
        }
        expect(actions.createQuestions([mockQuestion, mockQuestion, mockQuestion])).toEqual(expectedResponse);
    })
});

describe('should delete quiz', () => {
    it('Should delete one quiz informing it id', () => {
        const indexQuizes = [0];
        const expectedResponse = {
            type: actions.DELETE_QUIZ,
            payload: {
                indexQuizes: [0]
            }
        }
        expect(actions.onDeleteQuiz(indexQuizes)).toEqual(expectedResponse);
    })
    it('should delete several quizes informing their id', () => {
        const indexQuizes = [0,1,2,3,4,5];
        const expectedResponse = {
            type: actions.DELETE_QUIZ,
            payload: {
                indexQuizes: indexQuizes
            }
        }
        expect(actions.onDeleteQuiz(indexQuizes)).toEqual(expectedResponse);
    })
})
