import React from 'react';
import { 
    TextField,
    Grid,
    FormControlLabel,
    IconButton
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

// use WithStyles from material-ui to change the checkebox properly
const GreenCheckbox = withStyles({
    root: {
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

const AnswerStyled = styled(Grid)`
    display: flex;
    .answer {
        position: relative;
        width: 80%;
        .deleteAnswer {
            position: absolute;
            right: 0;
            top: 10px;
            span {
                opacity: .5
            }
        }
    }

`

export default function Answer(props) {
    const {
        answerId,
        answer,
        questionId,
        questions,
        onChangeAnswerValue,
        onChangeCorrectAnswer,
        onDeleteAnswer,
    } = props;
    return(
        <AnswerStyled item>
            <Grid item className="answer">
                {/* verifyBlankOption returns { error: "" } instead of the value in inputs that's not filled */}
                <TextField 
                    label={answer.value.error ? "You must fill this Input" :`Answer ${answerId + 1}`}
                    required
                    error={answer.value.error ? true : false}
                    className="input"
                    value={answer.value.error ? "" : answer.value}
                    onChange={(e) => onChangeAnswerValue(questionId, answerId, e.target.value)}
                />
                <IconButton aria-label="delete" className="deleteAnswer" onClick={() => onDeleteAnswer(questionId, answerId)}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
            <FormControlLabel
                control={<GreenCheckbox checked={questions[questionId].answers[answerId].correct} onChange={(e) => onChangeCorrectAnswer(questionId, answerId, e.target.checked)} />}
                label="Right Answer"
                className="answerCheckbox"
            />
        </AnswerStyled>
    )
}