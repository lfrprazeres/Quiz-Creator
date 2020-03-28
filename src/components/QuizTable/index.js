import React from 'react';
import MUIDataTable from "mui-datatables";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { onDeleteQuiz } from '../../actions';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const QuizStyled = styled.div`
    width: 90%;
    margin: 0 auto;
`

function QuizTable (props) {
    const data = props.quiz.map(quiz => {
        return [ quiz.id, quiz.title, quiz.description]
    })
    const columns = ["ID", "Quiz Title", "Quiz Description"];
    const history = useHistory();

    // use createMuiTheme to override the material-ui styles properly
    const theme = createMuiTheme({
        overrides: {
            MuiTableRow: {
                root: {
                    "&$selected&$hover": { backgroundColor: "rgba(123, 0, 130, .3)" },
                    cursor: "pointer",
                }
            }
        }
    });

    const options = (history) => ({
        filterType: 'checkbox',
        download: false,
        print: false,
        onRowClick: row => {
            history.push(`/quiz/${row[0]}`);
        },
        onRowsDelete: rowsDeleted => {
            const idsDeleted = rowsDeleted.data.map(row => row.index)
            props.onDeleteQuiz(idsDeleted)
        }
    });
    return (
        <QuizStyled>
            <ThemeProvider theme={theme}>
                <MUIDataTable
                    title={"List of all quizes"}
                    data={data}
                    columns={columns}
                    options={options(history)}
                />
            </ThemeProvider>
        </QuizStyled>
    )
};

const mapStateToProps = state => ({
    quiz: state.quiz,
    app: state.app
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteQuiz: async ( indexQuizes ) => {
            await dispatch(onDeleteQuiz(indexQuizes));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizTable)