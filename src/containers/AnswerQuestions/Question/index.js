import React, { useState } from 'react';
import { Paper, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Answer from '../Answer';

const QuestionStyled = styled(Paper)`
    padding: 30px;
    margin-bottom: 30px;
`

function Question(props) {
    const {
        title,
        answers,
    } = props;
    // catch the correct answer
    const [ correctAnswer ] = useState(answers.find(element => element.correct));
    // variable to store the chosen answer
    const [ answered, setAnswered ] = useState({})

    function handleChooseAnswer(answer) {
        setAnswered(answer);
    }
    return (
        <QuestionStyled>
            <h1> {title} </h1>
            <Grid 
                container
                className="answers"
                direction="column"
                justify="center"
                alignItems="center"
            >
                {answers.map((answer,index) => {
                    return (
                        <Answer
                            onChooseAnswer={handleChooseAnswer}
                            key={index}
                            answer={answer}
                            correctAnswer={correctAnswer}
                            answered={answered}
                        />
                    )
                })}
            </Grid>
        </QuestionStyled>
    )
}

export default Question;