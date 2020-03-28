import React from 'react';
import { 
    Paper
} from '@material-ui/core';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button } from '../';
import { Button as MuiButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const CreateSectionStyled = styled(Paper)`
    width: 90%;
    margin: 50px auto 0 auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
    h1 {
        color: ${props => props.primarycolor};
        margin-bottom: 20px;
    };
    .input {
        margin: 10px 0;
    }
    .backButton {
        align-items: center;
        display: flex;
        position: absolute;
        top: 10px;
        left: 10px;
        &:hover {
            background-color: transparent;
            text-decoration: underline;
        }
        span, svg {
            color: ${props => props.primarycolor};
            text-transform: none;
            font-size: 14px;
        }
    }
    .page {
        position: absolute;
        bottom: 10px;
        left: 40px;
        color: #757575;
    }
    button {
        margin: 0 auto;
    }
    .nextButton {
        background-color: ${props => props.primarycolor};
        transition: opacity .2;
        &:hover {
            background-color: ${props => props.primarycolor};
            opacity: .8
        }
    }
    
`

function CreateSection(props) {
    const history = useHistory();

    function goBack(history) {
        history.goBack();
    }
    return (
        <CreateSectionStyled primarycolor={props.app.primaryColor} className={props.className}>
            <h1> {props.title} </h1>
            {props.children}
            {/* validate if has current and total, if it does, show the page counter */}
            {props.current && props.total && 
                <div className="page">
                    {props.current} of {props.total}
                </div>
            }
            <Button 
                variant="contained" 
                color="primary" 
                className="button nextButton"
                onClick={props.onClickButton}
                bg={props.app.blue}
            >
                { props.buttonText }
            </Button>
            <MuiButton onClick={() => goBack(history)} className="backButton">
                <ArrowBackIcon /> <span> {props.backTitle} </span>
            </MuiButton>
        </CreateSectionStyled>
    )
}

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, null)(CreateSection);