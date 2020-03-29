import React, { useState, useEffect } from 'react';
import { CreateSection } from '../../components';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button } from '../../components';
import changeAnswerValue from '../../utils/changeAnswerValue';
import changeCorrectAnswer from '../../utils/changeCorrectAnswer';
import addNewAnswer from '../../utils/addNewAnswer';
import verifyBlankOptions from '../../utils/verifyBlankOptions';
import { createQuestions } from '../../actions';
import { useHistory } from 'react-router-dom';
import Question from './Question';

const NewQuestionStyled = styled(CreateSection)`
    .content {
        flex-grow: 1;
        margin-bottom: 20px;
        .questionContainer {
            padding: 30px;
            .input, .question {
                width: 100%;
            };
            .answers {
                width: 100%;
                display: flex;
                .input {
                    flex: 8
                };
                .answerCheckbox {
                    flex: 1;
                }
            };
        }
    }
    .newQuestionButton {
        margin: 20px auto;
    }
`;

function NewQuestions(props) {
    // state with a default answer, used to send to utils/addNewAnswer.js function
    const [ defaultAnswer ] = useState({
        value: "",
        correct: false
    });
    // state with a default question, used to send to createQuestions action
    const [ defaultQuestion ] = useState([{
        title: "",
        answers: [defaultAnswer, defaultAnswer, defaultAnswer, defaultAnswer]
    }]);
    const [questions, setQuestions] = useState(defaultQuestion);
    const history = useHistory();

    useEffect(() => {
        // catch the quiz ID from the URI
        let id = parseInt(props.location.pathname.split("/")[2]);
        const haveQuiz = props.quiz.find(quiz => quiz.id === id);
        // check if have the quiz, if it's not, alert the user and redirect to the quiz list
        if(!haveQuiz) {
            alert("you must have a quiz with this ID");
            setTimeout(history.push("/Quiz-Creator"), 2000);
        }
    }, [])
    function handleChangeQuestion(id, value) {
        setQuestions(questions.map((question, questionIndex) => {
            if(questionIndex === id) {
                return {
                    ...question,
                    title: value
                };
            }
            return question;
        }))
    }

    function handleAnswerValue(questionId, answerId, value) {
        setQuestions(changeAnswerValue(questions, questionId, answerId, value));
    }

    function handleChangeCorrectAnswer(questionId, answerId, checked) {
        setQuestions(changeCorrectAnswer(questions, questionId, answerId, checked));
    }

    function handleAddAnswer(questionId) {
        setQuestions(addNewAnswer(questions, questionId, defaultAnswer));
    }

    function handleAddQuestion() {
        setQuestions([...questions, ...defaultQuestion])
    }

    function handleDeleteQuestion(questionId) {
        if(questions.length === 1) {
            alert("you must have at least 1 question")
        } else {
            setQuestions(questions.filter((question, questionIndex) => questionIndex !== questionId))
        }
    }
    
    function handleDeleteAnswer(questionId, answerId) {
        // check if the question have less than 5 answers
        if(questions[questionId].answers.length <= 4) {
            alert("your question needs at least 4 answers")
        } else {
            // delete the answer
            setQuestions(questions.map((question, questionIndex) => {
                if(questionIndex === questionId) {
                    return {
                        ...question,
                        answers: question.answers.filter((answer, answerIndex) => answerIndex !== answerId)
                    };
                }
                return question;
            }))
        }
    }

    function handleDoneCreateQuestions(questions, history) {
        const {
            createQuestions
        } = props;
        let hasUnfilledCorrectAnswer = questions.map(question => {
            return question.answers.filter(answer => answer.correct === true).length > 0
        });
        // check if has a question without correct answer
        hasUnfilledCorrectAnswer.map((hasCorrectAnswer, index) => {
            if(hasCorrectAnswer === false) {
                return alert(`The question ${index + 1} needs a correct answer`)
            }
            return true
        })
        // get how many questions have without correct answer
        hasUnfilledCorrectAnswer = hasUnfilledCorrectAnswer.filter(recurrences => recurrences === false).length;
        // call verifyBlankOptions to change empty values to an error
        let { canCreate, questions: newQuestions } = verifyBlankOptions(questions);
        // veriFyOptions return canCreate, so validate if canCreate (questions and answers not empty) and if has no one unfilled correct answer
        if(canCreate && hasUnfilledCorrectAnswer === 0){
            createQuestions(questions, history)
        } else {
            setQuestions(newQuestions);
        }
    }

    return (
        <NewQuestionStyled 
            title="Create new Questions"
            current="2"
            total="2"
            buttonText="Done"
            onClickButton={() => handleDoneCreateQuestions(questions, history)}
            backTitle="Back to Quiz"
        >
            {questions.map((question,questionId) => {
                return (
                    <Question 
                        key={questionId}
                        questionId={questionId}
                        questions={questions}
                        question={question}

                        onChangeQuestionTitle={handleChangeQuestion}
                        onDeleteQuestion={handleDeleteQuestion}

                        onChangeAnswerValue={handleAnswerValue}
                        onChangeCorrectAnswer={handleChangeCorrectAnswer}
                        onAddNewAnswer={handleAddAnswer}
                        onDeleteAnswer={handleDeleteAnswer}
                    >

                    </Question>
                )
            })}
            <Button 
                bg="#51A041"
                variant="contained" 
                color="primary" 
                className="newQuestionButton"
                onClick={handleAddQuestion}
            >
                New Question
            </Button>
        </NewQuestionStyled>
    )
}

const mapStateToProps = state => ({
    app: state.app,
    quiz: state.quiz
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createQuestions: async ( questions, history ) => {
            await dispatch(createQuestions(questions));
            history.push(`/Quiz-Creator`);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestions);