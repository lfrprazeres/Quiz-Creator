import React, { useState, useEffect } from 'react';
import { CreateSection } from '../../components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Question from './Question'

function AnswerQuestions(props) {
    const history = useHistory();
    // path and quizId catch the quizId from the URI
    const path = props.location.pathname;
    const quizId = parseInt(path[path.length - 1]);
    // catch the questions based on the quizId on the URI
    let [ data ] = useState(props.quiz.find(element => element.id === quizId));
    useEffect(() => {
        const haveQuiz = props.quiz.find(quiz => quiz.id === quizId);
        // check if have this quiz in the redux, if it's not, alert the user and redirect the page
        if(!haveQuiz) {
            alert("you must have a quiz with this ID");
            setTimeout(history.push("/Quiz-Creator"), 2000);
        }
    },[])

    function handleDoneAnswerQuiz() {
        history.push("/Quiz-Creator");
    }
    
    return (
        <CreateSection
            title={data.title}
            buttonText="Finish your Quiz"
            onClickButton={() => handleDoneAnswerQuiz()}
            backTitle="Back to List"
        >
            {data.questions.map((question, index) => {
                return (
                    <Question
                        key={index}
                        title={question.title}
                        answers={question.answers}
                    >
                    </Question>
                )
            })}
        </CreateSection>
    )
}

const mapStateToProps = state => ({
    app: state.app,
    quiz: state.quiz
});

export default connect(mapStateToProps, null)(AnswerQuestions);