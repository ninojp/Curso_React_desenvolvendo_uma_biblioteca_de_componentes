import React from "react";
import styled from "styled-components";

export interface IAbTagProps{
    texto: string
};

const TagEstilizada = styled.button`
    padding: 24px 32px;
    color: #FFFFFF;
    background: #EB9B00;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`;

export const AbTag = ({texto}: IAbTagProps) => {
    return(
        <TagEstilizada>
            {texto}
        </TagEstilizada>
    );
};
