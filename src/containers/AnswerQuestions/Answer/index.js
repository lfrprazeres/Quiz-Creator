import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import red from '@material-ui/core/colors/red';

const AnswerStyled = styled(Button)`
    border: 1px solid #ccc !important; 
    margin-bottom: 10px !important;
    width: 100%;
    color: ${props => props.correctanswer === "" ? "black" : "white"} !important;
    background-color: ${props => {
        if(props.correctanswer === "rightAnswer") {
            return green[600]
        } else if(props.correctanswer === "wrongAnswer") {
            return red[600]
        } else {
            return "transparent"
        }
    }} !important;
`

function Answer(props) {
    // variable to store the current state of the answer, if it was clicked or not, if it's the right answer or the wrong answer etc.
    const [ answerResult, setAnswerResult ] = useState("");
    const {
        answer,
        onChooseAnswer,
        correctAnswer,
        answered
    } = props;
    // useEffect to check every time that "answered" variable was changed, to see if it needs to change the background or not
    useEffect(() => {
        if(answered === answer && answered === correctAnswer ){
            setAnswerResult("rightAnswer");
        } else if(answered === answer && answered !== correctAnswer) {
            setAnswerResult("wrongAnswer");
        } else if(answered.value !== undefined && answered !== correctAnswer && answer === correctAnswer) {
            setAnswerResult("rightAnswer")
        } else {
            setAnswerResult("");
        }
    },[answered])
    return (
        <AnswerStyled 
            onClick={() => onChooseAnswer(answer)}
            correctanswer={answerResult}
        >
            {answer.value}
        </AnswerStyled>
    )
};

export default Answer;