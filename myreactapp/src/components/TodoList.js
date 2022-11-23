import React from "react";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations'

const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`

const TodoList = () => {
    return(
        <Bounce>
            <h1>Hello!!!</h1>
        </Bounce>
    )
}

export default TodoList