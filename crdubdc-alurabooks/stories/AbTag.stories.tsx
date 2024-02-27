import React from "react";
import { AbTag, IAbTagProps } from '../src/components/AbTag';
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'components/AbTag',
    component: AbTag
} as ComponentMeta<typeof AbTag>;

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args} />;

export const Primario = Template.bind({});
Primario.args = {
    texto: 'Tag'
} as IAbTagProps;
