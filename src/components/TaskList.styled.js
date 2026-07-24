import styled from "styled-components";
import '@fontsource-variable/science-gothic';

export const TaskListList = styled.ul`
    list-style: none;
`
export const TaskListItem = styled.li`
    font-family: "Science Gothic";
    list-style: none;
    margin-bottom: 10px;
`

export const DeleteButton = styled.button`
    background-color: transparent;
    padding: 2px 4px;
    border: none;
    cursor: pointer;
    transition: transform 3s ease;
    border-radius: 50%;
    &:hover {
        transform: rotate(360deg);
    }
`