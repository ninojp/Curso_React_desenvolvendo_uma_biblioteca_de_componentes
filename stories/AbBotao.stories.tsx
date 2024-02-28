import React from "react";
import { ComponentMeta, ComponentStory} from '@storybook/react';
import { AbBotao, IAbBotaoProps } from '../src/components/AbBotao'

export default {
    title: 'components/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>;

export const Primario = Template.bind({})
Primario.args = {
    texto: 'Ab Botão Primário',
    tipo: 'primario'
} as IAbBotaoProps

export const Secundario = Template.bind({})
Secundario.args = {
    texto: 'Ab Botão Secundário',
    tipo: 'secundario'
} as IAbBotaoProps
