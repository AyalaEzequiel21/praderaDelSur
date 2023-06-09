import { styled } from "styled-components";
import { colors, fontSizes } from "../../../../../data";

export const ItemInfoContainerStyle = styled.article`
    align-items: center;
    color: ${colors.green};
    margin: 15px 0;
    width: 100%;

    & div{
        align-items: center;
        display: flex;
    
        & span{
            font-size: ${fontSizes.itemFooter};
            margin-left: 5px;
        };
    };

    & p{
        font-size: ${fontSizes.itemNav};
        font-weight: 700;
        width: 100%;
    }
`