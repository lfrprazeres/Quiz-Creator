import React from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

const ButtonStyled = styled(MuiButton)`
    width: 15vw;
    max-width: 170px;
    background-color: ${props => props.bg} !important;
    transition: opacity .2s;
    margin: 40px auto 0 auto;
    text-transform: none !important;
    &:hover {
        background-color: ${props => props.bg};
        opacity: .8
    }
`

export default function Button(props) {
    return (
        <ButtonStyled {...props} />
    )
}