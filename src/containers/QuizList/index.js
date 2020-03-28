import React from 'react';
import { QuizTable } from '../../components';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const QuizListStyled = styled.section`
    h1 {
        text-align: center;
        font-size: 40px;
        background-color: ${props => props.primarycolor};
        color: white;
        padding: 20px 0;
        margin: 30px 0 100px 0;
    };
    .createButtonContainer {
        width: 90%;
        display: flex;
        margin: 0 auto;
        justify-content: flex-end;
        margin-bottom: 10px;
        > span {
            background-color: ${props => props.primarycolor};
            color: white;
            font-weight: bold;
            padding: 6px 20px;
        }
    }
`;

function QuizList(props) {
    const history = useHistory();
    return (
        <QuizListStyled primarycolor={props.app.primaryColor}>
            <h1> Quiz Creator </h1>
            <div className="createButtonContainer">
                <Button variant="contained" color="primary" component="span" onClick={() => history.push("/quiz/new")}>
                    Create new Quiz
                </Button>
            </div>
            <QuizTable />
        </QuizListStyled>
    )
};

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, null)(QuizList);