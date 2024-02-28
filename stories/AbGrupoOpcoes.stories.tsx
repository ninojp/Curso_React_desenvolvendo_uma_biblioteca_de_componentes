import React from "react";
import { AbGrupoOpcoes, IAbGrupoOpcoesProps } from '../src/components/AbGrupoOpcoes';
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'components/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>;

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args}/>;

export const Padrao = Template.bind({});
Padrao.args = {
    opcoes: [
        {
            id: 1,
            titulo: 'E-Books',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            titulo: 'Impresso',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            titulo: 'IMpresso + E-Books',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        },
    ]
} as IAbGrupoOpcoesProps;
