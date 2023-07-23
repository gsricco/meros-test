import styled from "styled-components";
import {StyledPropsType} from "../types/types";

export const StyledBox = styled.div<StyledPropsType>
  `
    display: flex;
    align-items: center;
    border-top: 1px solid darkgray;
    ${props => props.itemType ? props.itemType : ''}
  `

export const StyledBoxComment = styled(StyledBox)<StyledPropsType>
`
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
  border: none;  
  font-style: italic;
`


export const StyledItemContainer = styled.div
  `
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 80vh;
    overflow-y: scroll;
    margin-top: 150px;
    margin-left: 5vw;
    border: 2px solid darkgray;
  `


export const StyledInput = styled.div
  `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    width: 100vw;
    position: fixed;
    top: 0;
    text-align: center;
    background: darkgray;

    & h1 {
      width: 100%;
    }

    & input {
      height: 40px;
      width: 400px;
      padding: 10px;
      margin: 10px;
    }

    & span {
      width: 100%;
      padding: 0 20px;
    }
  `
