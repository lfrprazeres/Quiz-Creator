import React from 'react';
import { 
    TextField,
    Paper,
    Grid,
    IconButton
} from '@material-ui/core';
import Answer from '../Answer';
import { Button } from '../../../components';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

const QuestionStyled = styled(Paper)`
    position: relative;
    .deleteQuestion {
        position: absolute;
        right: 10px;
        top: 10px;
        svg {
            color: #757575;
            opacity: .5
        }
    }
`
export default function Question(props){
    const {
        questions,
        questionId,
        onChangeQuestionTitle,
        question,
        onChangeAnswerValue,
        onChangeCorrectAnswer,
        onAddNewAnswer,
        onDeleteQuestion,
        onDeleteAnswer
    } = props;
    return (
        <QuestionStyled
            elevation={3} 
            className="content"
        >
            <IconButton aria-label="delete" className="deleteQuestion" onClick={() => onDeleteQuestion(questionId)}>
                <DeleteIcon />
            </IconButton>
            <Grid 
                container 
                className="questionContainer" 
                spacing={3}
                direction="column"
            >
                <h2> Question { questionId + 1 } </h2>
                <Grid item className="question">
                    {/* verifyBlankOption returns { error: "" } instead of the value in inputs that's not filled */}
                    <TextField 
                        label={question.title.error ? "You must fill this Input" : "Question"} 
                        variant="outlined" 
                        helperText="Your Question"
                        required
                        error={question.title.error ? true : false}
                        className="input"
                        value={question.title.error ? "" : question.title}
                        onChange={(e) => onChangeQuestionTitle(questionId, e.target.value)}
                    />
                </Grid>
                <h2> Answers </h2> 
                {question.answers.map((answer,answerId) => {
                    return (
                        <Answer
                            key={answerId}
                            answerId={answerId}
                            answer={answer}
                            questionId={questionId}
                            questions={questions}
                            onChangeAnswerValue={onChangeAnswerValue}
                            onChangeCorrectAnswer={onChangeCorrectAnswer}
                            onDeleteAnswer={onDeleteAnswer}
                        />
                    )
                })}
                <Button 
                    bg="#51A041"
                    variant="contained" 
                    color="primary"
                    onClick={() => onAddNewAnswer(questionId)}
                    style={{ width: 120 }}
                > 
                    New Answer
                </Button>
            </Grid>
        </QuestionStyled>
    )
}