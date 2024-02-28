import React, { useState } from "react";
import styled from "styled-components";

const SectionEstilizada = styled.section<{ selecionado: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 194px;
    height: 88px;
    background:${props => props.selecionado ? 'linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%)' : '#fff'};
    border: 1px solid;
    border-color: ${props => props.selecionado ? '#002f52' : '#EB9B00'};
    border-radius: 8px;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header{
        color: ${props => props.selecionado ? '#fff' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong{
        color: ${props => props.selecionado ? '#fff' : '#EB9B00'};
        font-size: 16px;
        font-weight: 700;
    }
    footer{
        color: ${props => props.selecionado ? '#fff' : 'rgba(0,0,0,0.54)'};
        font-size: 12px;
        font-weight: 400;
    }
`;
// Essa é a interface que representa uma opção
export interface IAbGrupoOpcao {
    id: number
    titulo: string
    corpo: string
    rodape: string
};
// Essa é a interface que representa as PROPs
export interface IAbGrupoOpcoesProps {
    opcoes: IAbGrupoOpcao[]
    valorPadrao?: IAbGrupoOpcao | null
    onChange?: (opcao: IAbGrupoOpcao) => void 
};

export const AbGrupoOpcoes = ({ opcoes, onChange, valorPadrao }: IAbGrupoOpcoesProps) => {
    const [selecao, setSelecao] = useState<IAbGrupoOpcao | null>(valorPadrao ?? null);

    const aoSelecionar = (opcao: IAbGrupoOpcao): void => {
        setSelecao(opcao);
        if(onChange){
            onChange(opcao);
        }
    }

    return (
        <>
            {opcoes.map(opcao =>
                <SectionEstilizada 
                    onClick={() => aoSelecionar(opcao)} 
                    key={opcao.id} 
                    selecionado={selecao?.id === opcao.id}
                >
                    <header>
                        {opcao.titulo}
                    </header>
                    <div>
                        <strong>{opcao.corpo}</strong>
                    </div>
                    <footer>
                        {opcao.rodape}
                    </footer>
                </SectionEstilizada>
            )}
        </>
    );
};
