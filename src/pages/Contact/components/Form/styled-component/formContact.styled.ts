import { styled } from "styled-components";
import { colors, fontSizes } from "../../../../../data";

export const InputContainerStyle = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 5px;
    width: 100%;

    & label{
        color: ${colors.green};
        font-size:${fontSizes.itemNav};
    };
    
    & input{
        border: 2px solid #ccc;
        border-radius: 5px;
        color: #555;
        font-size: 16px;
        height: 3rem;
        outline: none;
        padding: 10px;

        &:hover{
            border-color: ${colors.green};
            box-shadow: 0 0 0 0.2rem rgba(36, 57, 23, 0.25);
        }
    };

    & textarea{
        resize: none;
        border: 2px solid #ccc;
        border-radius: 5px;
        color: #555;
        font-size: 16px;
        margin-bottom: 5px;
        outline: none;
        padding: 10px;

        &:hover{
            border-color: ${colors.green};
            box-shadow: 0 0 0 0.2rem rgba(36, 57, 23, 0.25);
        }
    };

    & p{
        color: red;
        font-size: ${fontSizes.itemFooter};
    }
`
