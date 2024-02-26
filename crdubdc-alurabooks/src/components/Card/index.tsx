import React, { ReactNode } from "react";
import styled from "styled-components";

const CardEstilizado = styled.div`
    padding: 48px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

export interface ICardProps{
    children: ReactNode
};

export const Card = ({children}: ICardProps) => {
    return (
        <CardEstilizado>
            {children}
        </CardEstilizado>
    );
};
