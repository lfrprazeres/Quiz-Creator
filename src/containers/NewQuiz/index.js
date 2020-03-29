import React, { useState } from 'react';
import { 
    TextField,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { CreateSection } from '../../components';
import styled from 'styled-components';
import {
    createQuiz
} from '../../actions'

function NewQuiz(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    function handleCreateQuiz(title,description, history) {
        const {
            createQuiz
        } = props;
        let canCreate = true;
        if(title === ""){
            setTitle({ error: "not filled" });
            canCreate =  false;
        }
        if(description === "") {
            setDescription({ error: "not filled" });
            canCreate =  false;
        }
        if(canCreate){
            createQuiz(title,description, history);
        }
    }
    return(
        <CreateSection 
            title="Create a new quiz"
            current="1"
            total="2"
            buttonText="Next"
            backTitle="Back to List"
            onClickButton={() => handleCreateQuiz(title, description, history)}
        >
            <TextField 
                label={title.error ? "You must fill this Input" : "Title" }
                variant="outlined" 
                id="title" 
                helperText="Title of your quiz"
                required
                error={title.error ? true : false}
                className="input"
                value={title.error ? "" : title}
                onChange={(e) => setTitle(e.target.value)}
            />
        
            <TextField 
                label={description.error ? "You must fill this Input" : "Description"} 
                variant="outlined" 
                id="description"
                error={description.error ? true : false}
                required
                helperText="Description of your quiz"
                className="input"
                value={description.error ? "" : description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </CreateSection>
    )
}

const mapStateToProps = state => ({
    app: state.app
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createQuiz: async ( title, description, history ) => {
            await dispatch(createQuiz(title,description));
            const quizId = localStorage.getItem('quizId');
            history.push(`/Quiz-Creator/quiz/${quizId}/questions/new`);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuiz);