import styled from "styled-components";
import {StyledPropsType} from "../types/types";

export const StyledBox = styled.div<StyledPropsType>
  `
  border-top: 1px solid red;
 
  ${props=>props.handleItemType? props.handleItemType:''}
  
`

export const StyledItemContainer = styled.div
  `
    margin-top: 100px;
    border: 1px solid green;
  `

export const StyledItem = styled.div
  `
  `;

export const StyledInput = styled.div
  `
    position: fixed;
    top: 0;
  `
