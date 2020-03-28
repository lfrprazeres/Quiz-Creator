import addNewAnswer from '../../src/utils/addNewAnswer';
import changeAnswerValue from '../../src/utils/changeAnswerValue';
import changeCorrectAnswer from '../../src/utils/changeCorrectAnswer';
import verifyBlankOptions from '../../src/utils/verifyBlankOptions';
import newId from '../../src/utils/newId'
import { mockQuestion, mockAnswer, mockBlankQuestion } from '../mocks';
describe('utils functions test', () => {
    it('should add a new answer to a question', () => {
        let questionIndex = 0;
        expect(addNewAnswer(mockQuestion, questionIndex, mockAnswer)).toStrictEqual([{
            title: mockQuestion[questionIndex].title,
            answers: [mockAnswer, mockAnswer, mockAnswer, mockAnswer, mockAnswer]
        }]);
    });

    it('should change the answer value', () => {
        let questionIndex = 0;
        let answerIndex = 0;
        expect(changeAnswerValue(mockQuestion, questionIndex, answerIndex, "test")).toStrictEqual([{
            title: mockQuestion[questionIndex].title,
            answers: [{
                ...mockAnswer,
                value: "test"
            }, mockAnswer, mockAnswer, mockAnswer]
        }])
    });

    it('should change the correct answer', () => {
        let questionIndex = 0;
        let answerIndex = 0;
        expect(changeCorrectAnswer(mockQuestion, questionIndex, answerIndex, true)).toStrictEqual([{
            title: mockQuestion[questionIndex].title,
            answers: [{
                ...mockAnswer,
                correct: true
            }, mockAnswer, mockAnswer, mockAnswer]
        }])
    });

    it('should verify Blank Options', () => {
        expect(verifyBlankOptions(mockBlankQuestion)).toStrictEqual({
            canCreate: false,
            questions: [{
                title: {error: "not filled"},
                answers: [{
                    correct: false,
                    value: { error: "not filled"}
                }, mockAnswer, mockAnswer, mockAnswer]
            }]
        });
    });

    it('should return a new Id', () => {
        expect(newId()).toBe("1");
    });
});